import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  tagTypes: ["Account", "Trips"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
    credentials: "include",

    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().auth?.token
    //     if (token){
    //         headers.set('authorization', `Bearer ${token}`)
    //     }
    //     return headers
    // }
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        return {
          url: `/token`,
          method: "post",
          body: body,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account"],
    }),

    getToken: builder.query({
      query: () => ({
        url: `/token`,
        credentials: "include",
      }),
      providesTags: ["Token"],
      transformResponse: (response) => response?.account || null,
    }),
    getAllParks: builder.query({
      query: () => ({
        url: "/api/parks",
        credentials: "include",
      }),
      providesTags: ["Parks"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: `/token`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Account"],
    }),

    signup: builder.mutation({
      query: (body) => {
        return {
          url: "/api/accounts",
          method: "POST",
          body: body,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account"],
    }),
    getAllTrips: builder.query({
      query: () => ({
        url: "/api/trips",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Trips"],
      // transformResponse: (response) => response?.account || null
    }),
    createTrip: builder.mutation({
      query: (body) => ({
        url: "/api/trips",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Trips", id: "LIST" }],
    }),
    getTrip: builder.query({
      query: (id) => ({
        url: "/api/trips/{trip_id}",
        transformResponse: (response) => response?.event,
        providesTags: ["Trips"],
      }),
    }),
  }),
});

export const {
  useGetTokenQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useGetAllTripsQuery,
  useCreateTripMutation,
  useGetTripQuery,
  useGetAllParksQuery,
} = apiSlice;
