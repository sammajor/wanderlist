

// LOGOUT CODE SNIPPETS/NOTES


logout: builder.mutation({
    query: () => ({
        url: '/token',
        method: 'DELETE',
        credentials: 'include'
    }),
    invalidatesTags: ['Account']
}),


export const {
    useLogoutMutation,
}
