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
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/jwt/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation } = authApi;
