import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COINS_TAG_TYPE = "coins";
export const coinsAPi = createApi({
  reducerPath: "consApi",
  tagTypes: [COINS_TAG_TYPE],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  endpoints: (builder) => ({
    getCoinsList: builder.query({
      query: () => `coins/list`,
      providesTags: [{ type: COINS_TAG_TYPE, id: "LIST" }],
    }),
    getCoinMarketData: builder.query({
      query: ({ id, timeRange, vsCurrency }) => `coins/${id}/market_chart?vs_currency=${vsCurrency}&days=${timeRange}`,
      providesTags: [{ type: COINS_TAG_TYPE, id: "LIST" }],
      providesTags: (result, err, arg) => {
        return [{ type: COINS_TAG_TYPE, id: arg.id }];
      },
    }),
  }),
});

export const { useGetCoinsListQuery, useGetCoinMarketDataQuery } = coinsAPi;
