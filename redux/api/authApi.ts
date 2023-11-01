import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryForAuth } from "../queryInterceptor";

export const authApi = createApi({
  reducerPath: "auth",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryForAuth,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
    createPassword: builder.mutation({
      query: (data) => ({
        url: "create_password",
        method: "POST",
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "forget_password",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `verify_otp`,
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: `verify_email`,
        method: "POST",
        body: data,
      }),
    }),
    getProfile: builder.query({
      query: () => "me",
      providesTags: ["Profile"],
    }),
    logout: builder.query({
      query: () => "auth/logout",
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetProfileQuery,
  useLogoutQuery,
  useCreatePasswordMutation,
  useForgetPasswordMutation,
  useVerifyOtpMutation,
} = authApi;
