/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const seekerApi = createApi({
  reducerPath: "seeker",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [
    'Banner'
  ],
  endpoints: (builder) => ({
    updateSeekerBanner: builder.mutation({
      query: (data) => ({
        url: "houseSeeker/profile/update/banner",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Banner"],
    }),
   
    updatePreference: builder.mutation({
      query: (data) => ({
        url: "houseSeeker/profile/update/preference",
        method: "PUT",
        body: data,
      }),
     
    }),
    updateAboutMe: builder.mutation({
      query: (data) => ({
        url: "houseSeeker/profile/update/aboutMe",
        method: "PUT",
        body: data,
      }),
    }),
    createHostReview: builder.mutation({
      query: (data) => ({
        url: "houseSeeker/host/review",
        method: "POST",
        body: data,
      }),
    }),
   
  }),
});

export const {
  useUpdateSeekerBannerMutation,
  useUpdatePreferenceMutation,
  useUpdateAboutMeMutation,
  useCreateHostReviewMutation
 
  
} = seekerApi;
