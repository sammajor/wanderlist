import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  tagTypes: ["Account", "Trips"],
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
      query: (trip_id) => ({
        url: `/api/trips/${trip_id}`,
      }),
      providesTags: ["Trip"],
    }),
    cancelTrip: builder.mutation({
      query: (body) => ({
        url: `/api/trips/${body.trip_id}/status?trip_status=${body.trip_status}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["Trip"],
    }),
    completeTrip: builder.mutation({
      query: (body) => ({
        url: `/api/trips/${body.trip_id}/status?trip_status=${body.trip_status}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["Trip"],
    }),
    createTripNote: builder.mutation({
      query: (body) => ({
        url: "/api/trips/{trip_id}/notes",
        method: "POST",
        body: body,
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Notes", id: "LIST" }],
    }),
    getTripNote: builder.query({
      query: (trip_id, note_id) => ({
        url: `api/trips/${trip_id}/notes/${note_id}`,
        providesTags: ["Notes"],
      }),
      transformResponse: (response) => response?.event,
    }),
    getAllTripNotes: builder.query({
      query: (trip_id) => ({
        url: `api/trips/${trip_id}/notes`,
        providesTags: ["Notes"],
        credentials: "include",
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
  useCreateTripNoteMutation,
  useGetAllParksQuery,
  useGetTripNoteQuery,
  useGetAllTripNotesQuery,
  useCancelTripMutation,
  useCompleteTripMutation,
} = apiSlice;
