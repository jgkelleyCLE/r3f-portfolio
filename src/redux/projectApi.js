import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jackkelley.up.railway.app',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001',
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json')
            return headers
          }
     }),
    tagTypes: ['Project'],
    endpoints: (builder) => ({
        getAllProjects: builder.query({
            query: ()=> ({
                url: '/api/projects',
                method: 'GET'
            }),
            providesTags: ['Project']
        }),
        getProjectById: builder.query({
            query: (id) => ({
                url: `/api/projects/${id}`,
                method: 'GET',
            }),
            providesTags: ['Project']
        }),
        getLazyProjects: builder.query({
            query: () => ({
                url: '/api/projects',
                method: 'GET'
            }),
            providesTags: ['Project']
        })
    })
})

export const { useGetAllProjectsQuery, useLazyGetAllProjectsQuery, useGetProjectByIdQuery } = projectApi;