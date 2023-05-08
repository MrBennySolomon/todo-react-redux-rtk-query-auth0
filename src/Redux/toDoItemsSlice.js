import { createSlice } from "@reduxjs/toolkit";

export const toDoItemsSlice = createSlice({
  name: "items",
  initialState: {
    allToDoItems: [],
    currentToDoItem: {},
  },
  reducers: {
    setAllToDoItems: (state, action) => {
      state.allToDoItems = action.payload;
    },
    setCurrentToDoItem: (state, action) => {
      state.currentToDoItem = action.payload;
    },
  },
});

export const deleteToDoItem = (idToDelete) => (dispatch, getState) => {
  const state = getState();
  const allItems = state.items.allToDoItems;
  const allItemsFiltered = allItems.filter((item) => item.id !== idToDelete);

  dispatch(setAllToDoItems(allItemsFiltered));
  dispatch(setCurrentToDoItem({}));
};

export const { setAllToDoItems, setCurrentToDoItem } = toDoItemsSlice.actions;

export default toDoItemsSlice.reducer;
