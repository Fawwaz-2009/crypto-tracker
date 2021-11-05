import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_COINS = [
    {id:"bitcoin", name:"bitcoin"},
    {id:"ethereum", name:"ethereum"},
    {id:"tether", name:"tether"},
    {id:"usd-coin", name:"usd coin"},
    {id:"shiba-inu", name:"shiba inu"},
]

const initialState = { trackedCoinsList: DEFAULT_COINS };

const coinsSlice = createSlice({
  name: "coinsSlice",
  initialState,
  reducers: {
    appendTrackedCoinsList(state, { payload }) {
      const isCoinExist = !!state.trackedCoinsList.find(({ id }) => id === payload.id);
      if (isCoinExist) return;
      state.trackedCoinsList.push(payload);
    },
  },
});

export const { appendTrackedCoinsList } = coinsSlice.actions;
export default coinsSlice.reducer;
