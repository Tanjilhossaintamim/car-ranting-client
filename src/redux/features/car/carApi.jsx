import api from "../api/api";

const carApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (page) => `/cars/?page=${page}`,
    }),
    getSearchCar: builder.query({
      query: (value) => `/cars/?search=${value}`,
    }),
    addCar: builder.mutation({
      query: (data) => ({
        url: "/cars/",
        method: "POST",
        body: JSON.stringify(data),
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.id) {
            dispatch(
              api.util.updateQueryData("getCars", 1, (draft) => {
                draft.results.push(data);
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetCarsQuery, useAddCarMutation, useGetSearchCarQuery } =
  carApi;
