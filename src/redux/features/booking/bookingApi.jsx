import api from "../api/api";

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    placeBooking: builder.mutation({
      query: (carId) => ({
        url: `/booking/`,
        method: "POST",
        body: JSON.stringify({ car_id: carId }),
      }),
    }),
  }),
});

export const { usePlaceBookingMutation } = bookingApi;
