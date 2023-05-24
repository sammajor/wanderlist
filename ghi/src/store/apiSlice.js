import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['Token'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/'

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

    }),
    getToken: builder.query({
      query: () => ({
        url: `/token`,
        credentials: 'include',
      }),
      providesTags: ['Token'],
      transformResponse: (response) => response?.account || null
    }),
  }),
});

export const {useGetTokenQuery, useLoginMutation} = apiSlice
