/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const dashboardApi = createApi({
  reducerPath: "dashboard",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["GetListings"],
  endpoints: (builder) => ({
    // getListings: builder.query({
    //   query: () => "",
    //   providesTags: ["GetListings"],
    // }),
  }),
});

export const {} = dashboardApi;
