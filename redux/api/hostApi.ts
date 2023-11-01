/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const hostApi = createApi({
  reducerPath: "host",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["HostListings", "HostProfile", "HostReview", "HostListing"],
  endpoints: (builder) => ({
    getHostRecentlyUploaded: builder.query({
      query: () => `hosts/apartment?count=6`,
      providesTags: ["HostListings"],
    }),
    postApartment: builder.mutation({
      query: (data) => ({
        url: "hosts/apartment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["HostListings"],
    }),
    getHostProfile: builder.query({
      query: () => `hosts/profile/me`,
      providesTags: ["HostProfile"],
    }),
    getHostReviews: builder.query({
      query: () => `hosts/profile/reviews`,
      providesTags: ["HostReview"],
    }),
    getHostListing: builder.query({
      query: ({ path }) => `${path}`,
      providesTags: ["HostListing"],
    }),
    updateHostProfile: builder.mutation({
      query: (data) => ({
        url: "settings/update_profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["HostProfile"],
    }),
    updateHostPassword: builder.mutation({
      query: (data) => ({
        url: "settings/update_password",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["HostProfile"],
    }),
    verifyToken: builder.mutation({
      query: (data) => ({
        url: "verify_email",
        method: "POST",
        body: data,
      }),
    }),
    resendOtp: builder.mutation({
      query: () => ({
        url: "resend_otp",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetHostListingQuery,
  useGetHostProfileQuery,
  useGetHostReviewsQuery,
  usePostApartmentMutation,
  useUpdateHostPasswordMutation,
  useUpdateHostProfileMutation,
  useGetHostRecentlyUploadedQuery,
  useVerifyTokenMutation,
  useResendOtpMutation,
} = hostApi;
