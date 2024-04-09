/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptor";

export const houseApi = createApi({
  reducerPath: "house",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [
    "HouseTypes",
    "PersonalityTraits",
    "HouseBudgets",
    "HouseStatus",
    "AllAreas",
    "filteredAreas",
    "HouseSeekerStatus",
    "SavedApartments",
    "HouseSeekerProfile",
    "ListingDetail",
    "HostDetails",
    "ListingRating",
    "ListingReview"
  ],
  endpoints: (builder) => ({
    getHouseType: builder.query({
      query: () => "get_house_type",
      providesTags: ["HouseTypes"],
    }),
    getHostDetails: builder.query({
      query: (id) => `houseSeeker/listings/${id}?type=host`,
      providesTags: ["HostDetails"],
    }),
    getPersonalityTraits: builder.query({
      query: () => "get_personality_trait",
      providesTags: ["PersonalityTraits"],
    }),
    getHouseBudget: builder.query({
      query: () => "get_house_budgets",
      providesTags: ["HouseBudgets"],
    }),
    getHouseStatus: builder.query({
      query: () => "get_house_status",
      providesTags: ["HouseStatus"],
    }),
    getAllAreas: builder.query({
      query: ({ path }) => `${path}`,
      providesTags: ["AllAreas"],
    }),
    filterAreas: builder.query({
      query: ({ count, state, level, area }) =>
        `get_all_areas?count=${count}&state=${state}&level=${level}&area=${area}`,
      providesTags: ["filteredAreas"],
    }),
    getHouseSeekerStatus: builder.query({
      query: () => "get_house_seeker_status",
      providesTags: ["HouseSeekerStatus"],
    }),
    getSavedApartments: builder.query({
      query: () => "houseSeeker/profile/saved_apartment",
      providesTags: ["SavedApartments"],
    }),
    getHouseSeekerProfile: builder.query({
      query: () => "houseSeeker/profile/me",
      providesTags: ["HouseSeekerProfile"],
    }),
    getHouseSeekerListingDetail: builder.query({
      query: (id) => `houseSeeker/listings/${id}`,
      providesTags: ["ListingDetail"],
    }),
    getListingRating: builder.query({
      query: (id) => `houseSeeker/listings/${id}/ratings`,
      providesTags: ["ListingRating"],
    }),
    saveListing: builder.mutation({
      query: (id) => ({
        url: `houseSeeker/listings/${id}/save`,
        method: "POST",
      }),
      invalidatesTags: ["ListingDetail"],
    }),
    createListingReview: builder.mutation({
      query: (data) => ({
        url: `houseSeeker/listings/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ListingDetail", "ListingRating"],
    }),
    getListingReview: builder.query({
      query: (id) => `houseSeeker/listings/${id}/reviews?count=10&page`,
      providesTags: ["ListingReview"],
    }),
  }),
});

export const {
  useGetHouseTypeQuery,
  useGetHouseSeekerListingDetailQuery,
  useGetPersonalityTraitsQuery,
  useGetHouseBudgetQuery,
  useGetHouseStatusQuery,
  useGetAllAreasQuery,
  useFilterAreasQuery,
  useGetHouseSeekerStatusQuery,
  useGetSavedApartmentsQuery,
  useGetHouseSeekerProfileQuery,
  useGetHostDetailsQuery,
  useSaveListingMutation,
  useCreateListingReviewMutation,
  useGetListingRatingQuery,
  useLazyGetAllAreasQuery,
  useGetListingReviewQuery
} = houseApi;
