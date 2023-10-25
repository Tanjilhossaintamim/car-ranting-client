import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-ranting-server.onrender.com/api",

    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", `JWT ${token}`);
      return headers;
    },
  }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 300,
  endpoints: () => ({}),
});
export default api;
