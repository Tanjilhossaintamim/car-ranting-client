import fetchCurrentUser from "../../../utils/fetchUser";
import api from "../api/api";
import { setToken, setUser } from "./authenicationSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/users/",
          method: "POST",
          body: JSON.stringify(data),
        };
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/jwt/create",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.access) {
            dispatch(setToken(data.access));
            // dispatch(api.endpoints.getCurrentUser.initiate())
            //   .unwrap()
            //   .then((res) => {
            //     dispatch(setUser(res));
            //     console.log(res);
            //   })
            //   .catch((error) => console.log(error));

            const user = await fetchCurrentUser(data.access);
            if (user?.id) {
              dispatch(setUser(user));
            }
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getCurrentUser: builder.query({
      query: () => "/auth/users/me",
      keepUnusedDataFor: 0.001,
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation, useGetCurrentUserQuery } =
  authApi;
