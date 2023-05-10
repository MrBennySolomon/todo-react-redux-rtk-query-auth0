/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as toDoActions from "../Redux/toDoItemsSlice";
import { useState } from "react";
import { useGetTodosQuery } from "../Api/apiSlice";

function Read() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [getTodos] = useGetTodosQuery();
  const [checkedItems, setCheckedItems] = useState([]);

  const allToDoItems = useSelector((state) => {
    return state.items.allToDoItems;
  });

  async function setCurrentItem(currentIndex) {

    dispatch(toDoActions.getAllToDoItems);

    await getTodos().unwrap(); // call the addTodo endpoint with the todo data
  }

  function handleNavigateDelete(indexToDelete) {
    setCurrentItem(indexToDelete);
    navigate("/delete");
  }

  function handleNavigateUpdate(indexToUpdate) {
    setCurrentItem(indexToUpdate);
    navigate("/update");
  }

  function handleCheckboxChange(id) {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
      dispatch(toDoActions.getAllToDoItems());
  }

  return (
    <div>
      All Your To-Do`s
      <div>
        {allToDoItems?.map((item, index) => (
          <p key={item.id}>
            <span className={checkedItems.includes(item.id) ? "isChecked" : ""}>
              {item.content}
            </span>
            <span dangerouslySetInnerHTML={{ __html: item.emoji }}></span>
            <button onClick={() => handleNavigateDelete(index)}>delete</button>
            <button onClick={() => handleNavigateUpdate(index)}>update</button>
            <input
              type="checkbox"
              checked={checkedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
          </p>
        ))}
      </div>
    </div>
  );
}

export default Read;
