/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  Box, Menu, MenuButton, MenuList, MenuItem, Button, Checkbox, FormControl, FormLabel, Input, Flex,Text
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';


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

    const updatedTodos = todos.map((todo) => { return todo.id === id ? { ...todo, checked: !todo.checked } : todo });

    setTodos(updatedTodos);


  }

  const onClickDelete = () => {
    const incompleteTodos = todos.filter((todo) => todo.checked === false)
    
    setTodos(incompleteTodos);

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
            <Checkbox onChange={() => { onClickChecked(todo.id) }} ></Checkbox>
            <Box as={todo.checked === false ? "":"del"}>{todo.title}</Box>
            {console.log(todo.checked)}
          </Flex>
        </Box>
      ))}

      <Menu>
        <MenuButton as={Button}>
          メニュー
        </MenuButton>
        <MenuList>
          <MenuItem>編集</MenuItem>
          <MenuItem onClick={onClickDelete}>削除</MenuItem>
        </MenuList>
      </Menu>
      

    </>
  );

}

export default App;
