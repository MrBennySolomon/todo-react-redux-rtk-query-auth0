import { configureStore } from "@reduxjs/toolkit";
import toDoItemsSlice from "./toDoItemsSlice";
import { apiSlice } from "../Api/apiSlice";

const store = configureStore({
  reducer: {
    items: toDoItemsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export default store;
