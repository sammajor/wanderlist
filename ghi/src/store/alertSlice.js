import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const alertSlice = createApi({
  reducerPath: "alertSlice",
  tagTypes: ["Alerts"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_ALERT_HOST}`,
  }),
  endpoints: (builder) => ({
    getOneAlert: builder.query({
      query: (parkCode) => {
        return {
          url: `/alerts?parkCode=${parkCode}&api_key=${process.env.REACT_APP_NPS_KEY}`,
          method: "GET",
        };
      },
      providesTags: ["Alerts"],
    }),
  }),
});
export const { useGetOneAlertQuery } = alertSlice;
