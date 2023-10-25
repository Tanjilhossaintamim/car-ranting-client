import api from "../api/api";

const carApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/cars",
    }),
  }),
});

export const { useGetCarsQuery } = carApi;
