import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://holy-wildflower-830.fly.dev/" }),
  reducerPath: "main",
  tagTypes: ["logs", "threats", "reqlocations","stats","locations"],
  endpoints: (build) => ({
    getLog: build.query({
      query: () => "log/logs/",
      providesTags: ["logs"],
    }),
    getThreat: build.query({
      query: () => "threat/threats/",
      providesTags: ["threats"],
    }),
    getreqLocation: build.query({
      query: () => "threat/reqlocations/",
      providesTags: ["reqlocations"],
    }),
    getStats: build.query({
        query: () => "state/stats/",
        providesTags: ["stats"],
      }),
    getResponses: build.query({
      query: () => "location/locations/",
      providesTags: ["locations"],
    }),
  }),
});




export const { useGetLogQuery,useGetreqLocationQuery,useGetStatsQuery,useGetThreatQuery,useGetResponsesQuery } =
  dataApi;
