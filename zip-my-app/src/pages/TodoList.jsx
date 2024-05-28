import React, { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  function handleValue(e) {
    const val = e.target.value;
    setValue(val);
  }

  useEffect(() => {
    const myTodos = localStorage.getItem("todos");
    if (myTodos) {
      const parsedTodos = JSON.parse(myTodos);
      setTodos(parsedTodos);
    }
  }, []);

  function addTodo() {
    if (!value) return;
    if (!isEdit) {
      let parsedTodos = [];
      const myTodos = localStorage.getItem("todos");
      if (myTodos) {
        parsedTodos = JSON.parse(myTodos);
        if (myTodos.includes(value.trim())) {
          alert("Todo Already Exist");
          return;
        }
      }
      parsedTodos.push(value);
      const stringTodo = JSON.stringify(parsedTodos);
      localStorage.setItem("todos", stringTodo);
      setTodos(parsedTodos);
      setValue("");
    } else {
        alert('edit case')
    }
  }

  function deleteTodo(index) {
    let parsedTodos = [];
    const myTodos = localStorage.getItem("todos");
    if (myTodos) {
      parsedTodos = JSON.parse(myTodos);
    }
    parsedTodos.splice(index, 1);
    const stringTodo = JSON.stringify(parsedTodos);
    localStorage.setItem("todos", stringTodo);
    setTodos(parsedTodos);
  }

  function editTodo(index, value) {
    setIsEdit(true);
    setValue(value);
  }

  return (
    <div>
      <h4>My To do List</h4>
      <div className="flex">
        <input
          value={value}
          className="form-control w-25"
          onChange={(e) => handleValue(e)}
        />
        <button disabled={!value} className="btn btn-success" onClick={addTodo}>
          {isEdit ? "Edit" : "Add"} Todo
        </button>
        <ul></ul>
        {todos.map((todo, key) => (
          <li className="py-1">
            {todo}{" "}
            <button className="btn btn-danger" onClick={() => deleteTodo(key)}>
              Delete
            </button>
            <button
              className="btn btn-info mx-3"
              onClick={() => editTodo(key, todo)}
            >
              Edit
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
