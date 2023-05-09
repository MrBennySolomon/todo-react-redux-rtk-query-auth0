import { createSlice } from "@reduxjs/toolkit";

export const toDoItemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    getAllToDoItems: (state, action) => {
      state.push(action.payload);
    },
    addToDoItem: (state, action) => {
      state.push(action.payload);
    },
    editToDoItems: (state, action) => {
      state.push(action.payload);
    },
    deleteToDoItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { getAllToDoItems, addToDoItem, editToDoItems, deleteToDoItem } = toDoItemsSlice.actions;

export default toDoItemsSlice.reducer;
