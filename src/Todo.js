import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoActions } from "./store";

const Todo = () => {
  const [text, setText] = useState("");
  const todoList = useSelector((todoList) => todoList);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(TodoActions.appends(text));
    setText("");
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(TodoActions.deleteitem(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </form>
      <div>Todo List :-</div>
      <ol style={{ fontSize: "20px" }}>
        {todoList.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span
              style={{ marginLeft: "40px", color: "red" }}
              onClick={(e) => {
                e.preventDefault();
                handleDelete(item.id);
              }}
            >
              Delete
            </span>
            <span
              style={{ marginLeft: "40px", color: "green" }}
              onClick={(e) => {
                e.preventDefault();
                handleDelete(item.id);
              }}
            >
              complete
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
