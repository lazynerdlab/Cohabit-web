/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const landingPageApi = createApi({
  reducerPath: "landingPage",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [
    "Listings",
    "ListingDetails",
    "SinglePropertyFilter",
    "MultiplePropertyFilter",
    "SingleStateFilter",
    "MultipleStateFilter",
    "SingleAreaFilter",
    "MultipleAreaFilter",
    "SingleBudgetFilter",
    "MultipleBudgetFilter",
    "RecentlyUploaded",
    "SearchedListings",
    "LocationData",
  ],
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => `listings`,
      providesTags: ["Listings"],
    }),
    getListingDetails: builder.query({
      query: (id) => `listings/${id}`,
      providesTags: ["ListingDetails"],
    }),
    getSinglePropertyTypeFilter: builder.query({
      query: ({ type, count }) =>
        `listings?property_type=${type}&count=${count}`,
      providesTags: ["SinglePropertyFilter"],
    }),
    getMultiplePropertyTypeFilter: builder.query({
      query: ({ type, count, random }) => {
        const propertyQueries = type
          .map((property: string) => `property_type=${property}`)
          .join("&");
        return `listings?${propertyQueries}&count=${count}&random=${random}`;
      },
      providesTags: ["MultiplePropertyFilter"],
    }),
    getSingleStatesFilter: builder.query({
      query: ({ state, count, random }) =>
        `listings?state=${state}&count=${count}&random=${random}`,
      providesTags: ["SingleStateFilter"],
    }),
    getMultipleStatesFilter: builder.query({
      query: ({ states, count, random }) => {
        const stateQueries = states
          .map((state: string) => `state=${state}`)
          .join("&");
        return `listings?${stateQueries}&count=${count}&random=${random}`;
      },
      providesTags: ["MultipleStateFilter"],
    }),
    getSingleAreaFilter: builder.query({
      query: ({ area, count, random }) =>
        `listings?area=${area}&count=${count}&random=${random}`,
      providesTags: ["SingleAreaFilter"],
    }),
    getMultipleAreaFilter: builder.query({
      query: ({ states, count, random }) => {
        const areaQueries = states
          .map((area: string) => `area=${area}`)
          .join("&");
        return `listings?${areaQueries}&count=${count}&random=${random}`;
      },
      providesTags: ["MultipleAreaFilter"],
    }),
    getBudgetFilter: builder.query({
      query: ({ budget, count, random }) =>
        `listings?budget=${budget}&count=${count}&random=${random}`,
      providesTags: ["SingleBudgetFilter"],
    }),
    getMultipleBudgetFilter: builder.query({
      query: ({ budgets, count, random }) => {
        const budgetQueries = budgets
          .map((budget: string) => `budget=${budget}`)
          .join("&");
        return `listings?${budgetQueries}&count=${count}&random=${random}`;
      },
      providesTags: ["MultipleBudgetFilter"],
    }),
    getRecentlyUploaded: builder.query({
      query: ({ order, count, random }) =>
        `listings?order=${order}&count=${count}&random=${random}`,
      providesTags: ["RecentlyUploaded"],
    }),
    searchListings: builder.query({
      query: ({ searchQuery, state, count }) =>
        `listings?keyword=${searchQuery}&state=${state}&count=${count}`,
      providesTags: ["SearchedListings"],
    }),
    findByLocation: builder.query({
      query: (count) => `listings/areas?count=${count}`,
      providesTags: ["LocationData"],
    }),
  }),
});

export const {
  useGetListingsQuery,
  useGetListingDetailsQuery,
  useGetSinglePropertyTypeFilterQuery,
  useGetMultiplePropertyTypeFilterQuery,
  useGetSingleStatesFilterQuery,
  useGetMultipleStatesFilterQuery,
  useGetSingleAreaFilterQuery,
  useGetMultipleAreaFilterQuery,
  useGetBudgetFilterQuery,
  useGetMultipleBudgetFilterQuery,
  useGetRecentlyUploadedQuery,
  useSearchListingsQuery,
  useFindByLocationQuery,
} = landingPageApi;
