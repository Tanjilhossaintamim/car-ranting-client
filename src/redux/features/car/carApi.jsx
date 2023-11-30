import api from "../api/api";

const carApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (page) => `/cars?page=${page}`,
    }),
    getSearchCar: builder.query({
      query: (value) => `/cars/search${value}`,
    }),
    getOwnerCar: builder.query({
      query: (page) => `/usercars/?page=${page}`,
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

          if (data?._id) {
            dispatch(
              api.util.updateQueryData("getCars", 1, (draft) => {
                draft.totalCar = parseInt(draft.totalCar) + 1;
                draft.cars.push(data);
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

export const {
  useGetCarsQuery,
  useAddCarMutation,
  useGetSearchCarQuery,
  useGetOwnerCarQuery,
} = carApi;
