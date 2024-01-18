/* eslint-disable */
import React, { useState } from 'react';
import {
  Box, Menu, MenuButton, MenuList, MenuItem, Button, Checkbox, FormControl, FormLabel, Input, Flex,
} from '@chakra-ui/react';
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
    
    const updatedTodos = todos.map((todo) => { todo.id === id ? { ...todo, checked: !todo.checked } : todo });
    console.log(updatedTodos);
    setTodos(updatedTodos);

  }


  return (
    <>
      <FormControl>
        <FormLabel>Todoを入力してください</FormLabel>
        <Input value={input} onChange={(e) => { setInput(e.target.value) }} />
        <Button colorScheme="green" onClick={handleAddTodo}>Add</Button>
      </FormControl>


      {todos.map((todo) => (
        <Box key={todo.id}>
          <Flex>
            <Checkbox onChange={() =>{onClickChecked(todo.id)}} isChecked={todo.checked}></Checkbox>
            <Box>{todo.title}</Box>
            

          </Flex>
        </Box>
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
