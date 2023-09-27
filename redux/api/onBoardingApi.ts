/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const onBoardingApi = createApi({
  reducerPath: "onboarding",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["Onboarding"],
  endpoints: (builder) => ({
    onBoardingProcess: builder.mutation({
      query: (data) => ({
        url: "houseSeeker/onboarding",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Onboarding"],
    }),
  }),
});

export const { useOnBoardingProcessMutation } = onBoardingApi;
