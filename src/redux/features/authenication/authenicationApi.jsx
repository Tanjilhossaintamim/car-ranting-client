import api from "../api/api";

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
  }),
});
export const { useSignUpMutation } = authApi;
