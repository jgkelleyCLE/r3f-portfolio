import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailApi = createApi({
    reducerPath: 'emailApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jackkelley.up.railway.app' }),
    tagTypes: ['Email'],
    endpoints: (builder) => ({
        sendEmail: builder.mutation({
            query: (formData) => ({
                url: '/api/mail/send',
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['Email']
        })
    })
})

export const { useSendEmailMutation } = emailApi;