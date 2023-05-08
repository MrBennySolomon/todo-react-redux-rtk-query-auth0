import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emojiAPI = createApi({
    reducerPath: 'emojiApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://emojihub.yurace.pro/api/random' }),
    endpoints: (builder) => ({
        getEmoji: builder.query({
            query: () => '/'
        })
    })
});

export const { useGetEmojiQuery, useLazyGetEmojiQuery } = emojiAPI;