import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: combineReducers({
  }),
  devTools: true,
});

export default store;
