/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const landingPageApi = createApi({
  reducerPath: "landingPage",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["Listings", "ListingDetails", "RecentlyUploaded", "LocationData"],
  endpoints: (builder) => ({
    getRecentlyUploaded: builder.query({
      query: () => "listings?order=asc&count=5&random=0",
      providesTags: ["RecentlyUploaded"],
    }),
    getListings: builder.query({
      query: ({ path }) => `${path}`,
      providesTags: ["Listings"],
    }),
    findByLocation: builder.query({
      query: () => `listings/areas?count=10&random=yes&level=major`,
      providesTags: ["LocationData"],
    }),
  }),
});

export const {
  useGetListingsQuery,
  useGetRecentlyUploadedQuery,
  useFindByLocationQuery,
} = landingPageApi;
