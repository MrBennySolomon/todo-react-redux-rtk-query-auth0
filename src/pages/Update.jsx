import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as toDoActions from "../Redux/toDoItemsSlice";
import { useGetRandomEmojiQuery } from "../Api/apiSlice";

function Update() {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const { data, refetch } = useGetRandomEmojiQuery();

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
      id: currentToDoItem.id,
      content,
      emoji: data.htmlCode,
    };

    const itemToUpdateIndex = allToDoItems.findIndex(
      (item) => item.id === updatedItem.id
    );

    const allItemsUpdated = [...allToDoItems];

    allItemsUpdated[itemToUpdateIndex] = updatedItem;

    dispatch(toDoActions.setAllToDoItems(allItemsUpdated));
    dispatch(toDoActions.setCurrentToDoItem({}));

    refetch();
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
