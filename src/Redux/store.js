import { configureStore } from "@reduxjs/toolkit";
import toDoItemsSlice from "./toDoItemsSlice";
import { emojiApi } from "../Api/apiSlice";

const store = configureStore({
  reducer: {
    items: toDoItemsSlice,
    [emojiApi.reducerPath]: emojiApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(emojiApi.middleware);
  },
});

export default store;
