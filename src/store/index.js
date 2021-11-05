import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { coinsAPi, coinsSliceReducer } from "../features/coins";

const store = configureStore({
  reducer: combineReducers({
    [coinsAPi.reducerPath]: coinsAPi.reducer,
    coinsSlice: coinsSliceReducer
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinsAPi.middleware),
  devTools: true,
});

export default store;
