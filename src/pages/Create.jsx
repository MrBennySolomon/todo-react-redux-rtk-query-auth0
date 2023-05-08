import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { useGetRandomEmojiQuery } from "../Api/apiSlice";
import * as toDoActions from "../Redux/toDoItemsSlice";

function Create() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState("");

  const allToDoItems = useSelector((state) => {
    return state.items.allToDoItems;
  });

  const { data, refetch } = useGetRandomEmojiQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      content: userInput,
      emoji: data.htmlCode,
    };

    const updatedItems = [...allToDoItems, newItem];
    dispatch(toDoActions.setAllToDoItems(updatedItems));
    setUserInput("");
    refetch();
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
