/* eslint-disable */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from "./Components/Form";
import Todos from "./Components/Todos";

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [holder, setHolder] = useState("");


  const handleAddTodo = () => {

    if (input === "") {
      return;
    }

    function formatDate(date) {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }

    const today = new Date();

    const formattedDate = formatDate(today);

    const newTodo = { id: uuidv4(), title: input, checked: false, created: formattedDate };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setInput("");
  }


  const onClickChecked = (id) => {

    const updatedTodos = todos.map((todo) => { return todo.id === id ? { ...todo, checked: !todo.checked } : todo });

    setTodos(updatedTodos);
  }

  const onClickDelete = (id) => {
    const incompleteTodos = todos.filter((todo) => !(todo.id === id && todo.checked === true))
    setTodos(incompleteTodos);

  }

  const onClickEdit = (todo) => {
    localStorage.setItem('title', todo.title);
    const title = localStorage.getItem("title");
    setHolder(title);

    localStorage.setItem('id', todo.id);
    setEdit(true);

  }

  const handleTodoEdit = () => {
    if (input === "") {
      return;
    }

    const id = localStorage.getItem('id');

    const editTodos = todos.map((todo) => todo.id === id ? { ...todo, title: input, checked: false } : todo);
    setEdit(false);
    setTodos(editTodos);
    setInput("");
    localStorage.removeItem("title");
    localStorage.removeItem('id');

  }

  return (
    <>
      {edit ? (< Form message={"編集してください"} input={input} setInput={setInput} handleTodo={handleTodoEdit} buttonColor={"blue"} button={"Edit"} edit={edit} holder={holder} />)
        : (< Form message={"todoを追加してください"} input={input} setInput={setInput} handleTodo={handleAddTodo} buttonColor={"green"} button={"Add"} />)}

      < Todos todos={todos} onClickChecked={onClickChecked} onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
    </>
  )
}
export default App;
