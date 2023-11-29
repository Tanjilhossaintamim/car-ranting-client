import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",

    prepareHeaders: (headers, { endpoint }) => {
      const token = Cookies.get("token");
      headers.set("Content-Type", "application/json");
      if (!["signUp", "login", "getCars", "getSearchCar"].includes(endpoint)) {
        console.log(endpoint);
        headers.set("Authorization", `JWT ${token}`);
      } else {
        console.log(endpoint);
      }
      return headers;
    },
  }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 300,
  endpoints: () => ({}),
});
export default api;
