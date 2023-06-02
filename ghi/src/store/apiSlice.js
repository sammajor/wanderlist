import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  tagTypes: ["Account", "Trips", "Notes"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
    credentials: "include",
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
      invalidatesTags: ["Account", "Token"],
    }),

    getToken: builder.query({
      query: () => ({
        url: `/token`,
        credentials: "include",
      }),
      providesTags: ["Token"],
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
      invalidatesTags: ["Account", "Token"],
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
    }),
    createTrip: builder.mutation({
      query: (body) => ({
        url: "/api/trips",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["Trips"],
    }),
    getTrip: builder.query({
      query: (trip_id) => ({
        url: `/api/trips/${trip_id}`,
      }),
      providesTags: ["Trips"],
    }),
    cancelTrip: builder.mutation({
      query: (body) => ({
        url: `/api/trips/${body.trip_id}/status?trip_status=${body.trip_status}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["Trips"],
    }),
    completeTrip: builder.mutation({
      query: (body) => ({
        url: `/api/trips/${body.trip_id}/status?trip_status=${body.trip_status}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["Trips"],
    }),
    createTripNote: builder.mutation({
      query: (body) => ({
        url: "/api/trips/{trip_id}/notes",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: ["Notes"]
    }),
    getParkByID: builder.query({
      query: (park_id) => ({
        url: `/api/parks/${park_id}`,
      }),
      providesTags: (result, error, park_id) => [{ type: "Parks", park_id }],
    }),
    getTripNote: builder.query({
      query: ({ trip_id, note_id }) => ({
        url: `api/trips/${trip_id}/notes/${note_id}`,
      }),
      providesTags: ["Notes"],
    }),
    getAllTripNotes: builder.query({
      query: (trip_id) => ({
        url: `api/trips/${trip_id}/notes`,
        credentials: "include",
      }),
      providesTags: ["Notes"],
    }),
    getParkByID: builder.query({
      query: (park_id) => ({
        url: `/api/parks/${park_id}`,
      }),
      providesTags: (result, error, park_id) => [{ type: "Parks", park_id }],
    }),
    deleteTripNote: builder.mutation({
      query: ({trip_id, note_id}) => ({
        url: `/api/trips/${trip_id}/notes/${note_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Notes"],
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
  useCreateTripNoteMutation,
  useGetAllParksQuery,
  useGetParkByIDQuery,
  useGetTripNoteQuery,
  useGetAllTripNotesQuery,
  useCancelTripMutation,
  useCompleteTripMutation,
  useDeleteTripNoteMutation,
} = apiSlice;
