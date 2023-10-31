/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const flatmateApi = createApi({
  reducerPath: "flatmates",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["Flatmates", "FlatmateDetails", "SavedFlatmates", "SaveFlatmate"],
  endpoints: (builder) => ({
    getFlatmates: builder.query({
      query: ({ count }) => `houseSeeker/flatmate?count=${count}&random=0`,
      providesTags: ["Flatmates"],
    }),
    getFlatmateDetails: builder.query({
      query: (id) => `houseSeeker/flatmate/${id}/view`,
      providesTags: ["FlatmateDetails"],
    }),
    saveFlatmate: builder.mutation({
      query: (id) => ({
        url: `houseSeeker/flatmate/${id}/save`,
        method: "POST",
      }),
    }),
    getSaveFlatmates: builder.query({
      query: ({ count }) =>
        `houseSeeker/flatmate/saved_flatmate?count=${count}`,
      providesTags: ["SavedFlatmates"],
    }),
  }),
});

export const {
  useGetFlatmateDetailsQuery,
  useSaveFlatmateMutation,
  useGetSaveFlatmatesQuery,
  useGetFlatmatesQuery,
} = flatmateApi;
