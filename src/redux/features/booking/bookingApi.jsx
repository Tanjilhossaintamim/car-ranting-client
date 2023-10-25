import api from "../api/api";

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    placeBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: `/booking/`,
        method: "POST",
        body: JSON.stringify(bookingInfo),
      }),
    }),
  }),
});

export const { usePlaceBookingMutation } = bookingApi;
