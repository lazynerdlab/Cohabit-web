/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const paymentApi = createApi({
    reducerPath: "payment",
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: 10,
    baseQuery: baseQueryWithInterceptor,
    endpoints: (builder) => ({
        initializePayment: builder.mutation({
            query: (data) => ({
                url: "payments/initialize",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useInitializePaymentMutation
} = paymentApi;
