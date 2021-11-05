import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { coinsAPi } from "../features/coins";

const store = configureStore({
  reducer: combineReducers({
    [coinsAPi.reducerPath]: coinsAPi.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinsAPi.middleware),
  devTools: true,
});

export default store;
