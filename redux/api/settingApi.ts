/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const settingApi = createApi({
  reducerPath: "setting",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "profile",
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "settings/update_profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
    updateEmail: builder.mutation({
      query: (data) => ({
        url: "settings/update_email",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "settings/update_password",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useUpdateEmailMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useGetProfileQuery,
} = settingApi;
