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
      query: (page) => `/cars/mycar?page=${page}`,
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
            dispatch(
              api.util.updateQueryData("getOwnerCar", 1, (draft) => {
                draft.count = parseInt(draft.count) + 1;
                draft.results.push(data);
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/mycar/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getOwnerCar", 1, (draft) => {
            const carId = draft.results.map((car) => car._id);
            const index = carId.indexOf(arg);
            draft.results.splice(index, 1);
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
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
  useDeleteCarMutation,
} = carApi;
