import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentToDoItem } from "../Redux/toDoItemsSlice";
import { useGetRandomEmojiQuery } from "../Api/apiSlice";
import * as toDoActions from "../Redux/toDoItemsSlice";
import { useState } from "react";

function Read() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState([]);
  const { refetch } = useGetRandomEmojiQuery();

  const allToDoItems = useSelector((state) => {
    return state.items.allToDoItems;
  });

  function setCurrentItem(currentIndex) {
    dispatch(
      setCurrentToDoItem({
        id: allToDoItems[currentIndex].id,
        content: allToDoItems[currentIndex].content,
        emoji: allToDoItems[currentIndex].emoji,
      })
    );
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

    refetch().then((result) => {
      const updatedData = result.data;
      const itemToUpdateIndex = allToDoItems.findIndex(
        (item) => item.id === id
      );

      const allItemsUpdated = [...allToDoItems];
      allItemsUpdated[itemToUpdateIndex] = {
        ...allToDoItems[itemToUpdateIndex],
        emoji: updatedData.htmlCode,
      };

      dispatch(toDoActions.setAllToDoItems(allItemsUpdated));
    });
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
