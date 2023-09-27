/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const attachmentApi = createApi({
  reducerPath: "attachment",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["Attachments", "AttachmentDetails"],
  endpoints: (builder) => ({
    createAttachment: builder.mutation({
      query: (data) => ({
        url: "attachment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Attachments"],
    }),
    getAttachmentDetails: builder.query({
      query: (id) => `attachment/${id}`,
      providesTags: ["AttachmentDetails"],
    }),
    getAttachments: builder.query({
      query: () => "attachment",
      providesTags: ["Attachments"],
    }),
    deleteAttachment: builder.mutation({
      query: (id) => ({
        url: `attachment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Attachments"],
    }),
  }),
});

export const {
  useCreateAttachmentMutation,
  useGetAttachmentDetailsQuery,
  useGetAttachmentsQuery,
  useDeleteAttachmentMutation,
} = attachmentApi;
