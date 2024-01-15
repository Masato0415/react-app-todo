import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Checkbox, } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
//import { ChevronDownIcon } from '@chakra-ui/icons';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {

    if (input === "") {
      return;
    }
    const newTodos = [...todos];
    newTodos.push({ id: uuidv4(), todo: input });
    setTodos(newTodos);
    setInput("");
  }


  return (
    <>
      <header>
        <p>Todoアプリ(仮)</p>
      </header>

      <div id="inputForm">
        <input value={input} onChange={(e) => { setInput(e.target.value) }}></input>
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div>

        {todos.map((todo) => (
          <div style={{ display: "flex" }}>
            <Checkbox> </Checkbox>
            <div key={todo.id}>{todo.todo}</div>
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
    </>




  );


}

export default App;
