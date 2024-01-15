import React, { useState } from 'react';
import { ChakraProvider, Menu, MenuButton, MenuList, MenuItem, Button, Checkbox, } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
//import { ChevronDownIcon } from '@chakra-ui/icons';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {

    if (input === "") {
      return;
    }

    function formatDate(date) {
      const year = date.getFullYear();
      console.log(year);
      console.log(date.getMonth())
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }

    const today = new Date();

    const formattedDate = formatDate(today);


    const newTodos = [...todos];
    newTodos.push({ id: uuidv4(), todo: input, checked: false, created: formattedDate });
    setTodos(newTodos);
    setInput("");
  }


  return (
    <>
      <ChakraProvider>
        <header>
          <p>Todoアプリ(仮)</p>
        </header>

        <div id="inputForm">
          <input value={input} onChange={(e) => { setInput(e.target.value) }}></input>
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <div>

          {todos.map((todo) => (
            <div key={todo.id} style={{ display: "flex" }}>
              <Checkbox></Checkbox>
              <div>{todo.todo}</div>
            </div>

          ))}

          <Menu>
            <MenuButton as={Button}>
              メニュー
            </MenuButton>
            <MenuList>
              <MenuItem>編集</MenuItem>
              <MenuItem>削除</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </ChakraProvider>
    </>




  );


}

export default App;
