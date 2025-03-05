import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scoreApi = createApi({
    reducerPath: 'scoreApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jackkelley.up.railway.app' }),
    tagTypes: ['Score'],
    endpoints: (builder) => ({
        getScores: builder.query({
            query: ()=> ({
                url: '/api/scores',
                method: 'GET'
            }),
            providesTags: ['Score']
        }),
        getLazyScores: builder.query({
            query: ()=> ({
                url: '/api/scores',
                method: 'GET'
            }),
            providesTags: ['Score']
        }),
        postScore: builder.mutation({
            query: ({username, time}) => ({
                url: '/api/scores',
                method: 'POST',
                body: { username, time }
            }),
            invalidatesTags: ['Score']
        })
    })
})

export const { useGetScoresQuery, usePostScoreMutation, useLazyGetScoresQuery } = scoreApi