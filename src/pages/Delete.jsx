import { useSelector, useDispatch } from "react-redux";
import * as toDoActions from "../Redux/toDoItemsSlice";
import { useMutation } from "@reduxjs/toolkit/query";
import { apiSlice } from "../Api/apiSlice";

function Delete() {
  const dispatch = useDispatch();
  const [deleteTodo] = useMutation(apiSlice.endpoints.deleteTodo);

  // Get currentToDoItem from the store
  const currentToDoItem = useSelector((state) => state.items.currentToDoItem);

  async function handleDelete() {
    dispatch(toDoActions.deleteToDoItem(currentToDoItem.id));
    await deleteTodo(currentToDoItem).unwrap(); // call the addTodo endpoint with the todo data
  }

  return (
    <div>
      To-Do`s You Would like to Delete
      <p>{currentToDoItem.id}</p>
      {currentToDoItem.content}
      <div>
        <button onClick={handleDelete}>Yes i want to delete this item</button>
      </div>
    </div>
  );
}

export default Delete;
