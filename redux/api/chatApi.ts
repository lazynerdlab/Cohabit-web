/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const chatApi = createApi({
  reducerPath: "chat",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["chats", "searchedChats", "messages"],
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => "chats",
      providesTags: ["chats"],
    }),
    getSearchedChats: builder.query({
      query: (query: string) => `chats?type=search&query=${query}`,
      providesTags: ["searchedChats"],
    }),
    getMessages: builder.query({
      query: (id: string | number) => `chats/${id}`,
      providesTags: ["messages"],
    }),
    getSearchedMessages: builder.query({
      query: (query: string) => `chats?type=search&query=${query}`,
      providesTags: ["messages"],
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: "chats",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["messages"],
    })
  }),
});

export const {
  useGetChatsQuery,
  useGetSearchedChatsQuery,
  useGetMessagesQuery,
  useGetSearchedMessagesQuery,
  useSendMessageMutation
} = chatApi;
