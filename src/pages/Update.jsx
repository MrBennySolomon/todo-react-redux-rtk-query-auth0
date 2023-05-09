/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@reduxjs/toolkit/query";
import { apiSlice } from "../Api/apiSlice";
import * as toDoActions from "../Redux/toDoItemsSlice";

function Update() {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [updateTodo] = useMutation(apiSlice.endpoints.updateTodo);

  // Get currentToDoItem from the store
  const currentToDoItem = useSelector((state) => state.items.currentToDoItem);

  const allToDoItems = useSelector((state) => {
    return state.items.allToDoItems;
  });

  useEffect(() => {
    setContent(currentToDoItem.content);
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setContent(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedItem = {
      name: currentToDoItem.name,
      isDone: currentToDoItem.isDone
    };

    const itemToUpdateIndex = allToDoItems.findIndex(
      (item) => item.id === updatedItem.id
    );

    const allItemsUpdated = [...allToDoItems];

    allItemsUpdated[itemToUpdateIndex] = updatedItem;

    dispatch(toDoActions.editToDoItems(allItemsUpdated));
    dispatch(toDoActions.setCurrentToDoItem({}));
    await updateTodo(updatedItem).unwrap(); // call the addTodo endpoint with the todo data

    setContent("");
  };

  return (
    <div>
      To-Do`s You Would like to Update
      <p>{currentToDoItem.id}</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={content} />
        <button>Update my ToDo</button>
      </form>
    </div>
  );
}

export default Update;
