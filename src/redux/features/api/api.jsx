import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-ranting-server.onrender.com/api",

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 300,
  endpoints: () => ({}),
});
export default api;
