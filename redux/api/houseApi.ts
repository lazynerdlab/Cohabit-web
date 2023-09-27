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
  ],
  endpoints: (builder) => ({
    getHouseType: builder.query({
      query: () => "get_house_type",
      providesTags: ["HouseTypes"],
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
      query: () => "get_all_areas",
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
  }),
});

export const {
  useGetHouseTypeQuery,
  useGetPersonalityTraitsQuery,
  useGetHouseBudgetQuery,
  useGetHouseStatusQuery,
  useGetAllAreasQuery,
  useFilterAreasQuery,
  useGetHouseSeekerStatusQuery,
  useGetSavedApartmentsQuery,
} = houseApi;
