import { useSelector, useDispatch } from "react-redux";
import * as toDoActions from "../Redux/toDoItemsSlice";

function Delete() {
  const dispatch = useDispatch();

  // Get currentToDoItem from the store
  const currentToDoItem = useSelector((state) => state.items.currentToDoItem);

  function handleDelete() {
    dispatch(toDoActions.deleteToDoItem(currentToDoItem.id));
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
