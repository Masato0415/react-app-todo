/* eslint-disable */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import Menus from "./Components/Menus";
import Edit from "./Components/Edit";


function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);


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

  const onClickDelete = () => {
    const incompleteTodos = todos.filter((todo) => todo.checked === false)

    setTodos(incompleteTodos);

  }

  const onClickEdit = () => {
    let editCount = todos.filter(todo => todo.checked === true);
    editCount.length === 1 ? setEdit(true) : (function () { setEdit(false), alert("1つのみ選択してください") }())

  }

  const handleTodoEdit = () => {
    const editTodos = todos.map((todo) => todo.checked === true ? { ...todo, title: input, checked: false } : todo);
    setEdit(false);
    setInput("");
    setTodos(editTodos);
  }

  return (
    <>
      {edit ? (< Edit input={input} setInput={setInput} handleTodoEdit={handleTodoEdit} />) :
        (< Form input={input} setInput={setInput} handleAddTodo={handleAddTodo} />)}

      < Todos todos={todos} onClickChecked={onClickChecked} />

      < Menus onClickDelete={onClickDelete} onClickEdit={onClickEdit} />


    </>
  )
}
export default App;
