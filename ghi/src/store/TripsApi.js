// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const tripsAPI = createApi({
//     reducerPath: "tripsAPI",
//     baseQuery: fetchBaseQuery({
//         baseUrl: '${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}' ,
//         credentials: "include",
//     }),
//     tagTypes: ["Trips"],
//     endpoints: (builder) => ({
//         getTrips: builder.query({
//             query: () => "/api/trips",
//             transformResponse: (response) => response.trips,
//             providesTags: (result) => {
//                 const tags = [{ type: "Trips" , id: "LIST" }];
//                 if (!result) return tags;
//                 return [...result.map(({ id }) => ({ type: "Trips" , id })), ...tags];
//             },
//         }),
//         createTrip: builder.mutation({
//             query: (body) => ({
//                 url: "/api/trips",
//                 method: "POST",
//                 body: body.fields,
//                 credentials: "include",
//             }),
//             invalidatesTags: [{ type: "Trips", id: "LIST" }],
//         }),
//         getTrip: builder.query({
//             query: (id) => ({
//                 url: "/api/trips/{trip_id}",
//                 transformResponse: (response) => response?.event,
//                 providesTags: ["Trips"]
//             }),
//         }),
//     })
// })

// export const {useGetTripsQuery, useCreateTripMutation, useGetTripQuery} = tripsAPI;