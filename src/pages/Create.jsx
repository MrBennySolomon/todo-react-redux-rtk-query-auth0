import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as toDoActions from "../Redux/toDoItemsSlice";
import { useMutation } from "@reduxjs/toolkit/query";
import { apiSlice } from "../Api/apiSlice";

function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [addTodo] = useMutation(apiSlice.endpoints.addTodo);
  const allToDoItems = useSelector((state) => {return state.items.allToDoItems;});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name: userInput,
      isDone: false,
    };

    const updatedItems = [...allToDoItems, newItem];
    dispatch(toDoActions.addToDoItem(updatedItems));

    await addTodo(newItem).unwrap(); // call the addTodo endpoint with the todo data

    setUserInput("");
  };

  function handleChange(e) {
    const value = e.target.value;
    setUserInput(value);
  }

  function handleNavigate() {
    navigate("/read");
  }

  return (
    <div>
      <h2>Please Enter Your Do-To</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={userInput}></input>
        <button>Create</button>
      </form>
      <button onClick={handleNavigate}>To See All Your TO-DO Press Here</button>
    </div>
  );
}

export default Create;
