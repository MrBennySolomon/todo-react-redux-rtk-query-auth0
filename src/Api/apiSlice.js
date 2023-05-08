import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emojiApi = createApi({
  reducerPath: "emojiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://emojihub.yurace.pro/api/" }),
  endpoints: (builder) => ({
    getRandomEmoji: builder.query({
      query: () => "random",
    }),
  }),
});

export const { useGetRandomEmojiQuery } = emojiApi;
