import api from "../api/api";

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => "/bookings",
      providesTags: ["Bookings"],
    }),
    placeBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: `/bookings`,
        method: "POST",
        body: JSON.stringify(bookingInfo),
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const { usePlaceBookingMutation, useGetBookingsQuery } = bookingApi;
