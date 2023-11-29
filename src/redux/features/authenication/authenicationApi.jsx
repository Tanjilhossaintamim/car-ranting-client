import Cookies from "js-cookie";
import fetchCurrentUser from "../../../utils/fetchUser";
import api from "../api/api";
import { setIsLoggedIn, setUser } from "./authenicationSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register/",
          method: "POST",
          body: JSON.stringify(data),
        };
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.access) {
            dispatch(setIsLoggedIn(true));
            Cookies.set("token", data.access, { expires: 1, secure: true });

            const user = await fetchCurrentUser(data.access);
            if (user?._id) {
              Cookies.set("user", JSON.stringify(user));

              dispatch(setUser(user?.is_owner ? true : false));
            }
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: "/auth/users/me",
        method: "GET",
        cache: "no-store",
      }),
      keepUnusedDataFor: 0.001,
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation, useGetCurrentUserQuery } =
  authApi;
