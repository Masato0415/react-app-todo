import React, { useState } from 'react';
import {
  Box, Menu, MenuButton, MenuList, MenuItem, Button, Checkbox,FormControl,FormLabel,FormHelperText,Input} from '@chakra-ui/react';
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
      <header>
        <p>Todoアプリ(仮)</p>
      </header>

      <FormControl>
        <FormLabel></FormLabel>
        <Input value={input} onChange={(e) => { setInput(e.target.value) }} />
        <FormHelperText></FormHelperText>
        <Button colorScheme="green" onClick={handleAddTodo} _hover={{ fontWeight: "bold" }}>Add</Button>
      </FormControl>


        {todos.map((todo) => (
          <div key={todo.id} style={{ display: "flex" }}>
            <Checkbox></Checkbox>
            <Box >Hello</Box>
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
      

    </>




  );


}

export default App;
