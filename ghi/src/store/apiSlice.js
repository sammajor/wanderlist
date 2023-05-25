import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['Account'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/'

  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({username, password}) => {
        const body = new FormData();
        body.append('username', username);
        body.append('password', password);
        return {
          url: `/token`,
          method: 'post',
          body,
          credentials: 'include',
        };
      },
      invalidatesTags: ["Account"]
    }),

    getToken: builder.query({
      query: () => ({
        url: `/token`,
        credentials: 'include',
      }),
      providesTags: ['Account'],
      transformResponse: (response) => response?.account || null
    }),

    logout: builder.mutation({
      query: () => ({
        url: `/token`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ["Account"],
    }),

    signup: builder.mutation({
      query: (body) => {
        return {
          url: "/api/accounts",
          method: "POST",
          body,
          credentials: 'include',
        };
      },
      invalidatesTags: ["Account"],
    }),
  }),
});

export const {useGetTokenQuery, useLoginMutation, useLogoutMutation, useSignupMutation} = apiSlice
