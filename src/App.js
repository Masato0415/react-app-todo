import React, { useState } from 'react';
import {
  Box, Menu, MenuButton, MenuList, MenuItem, Button, Checkbox, FormControl, FormLabel, Input, Flex,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';


//import { ChevronDownIcon } from '@chakra-ui/icons';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(true);

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


    const newTodos = [...todos];
    newTodos.push({ id: uuidv4(), todo: input, checked: checked, created: formattedDate });
    setTodos(newTodos);
    setInput("");
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
            <Checkbox onChange={() => { setChecked((checked => !checked)) }} isChecked={todo.checked}></Checkbox>
            <Box>{todo.todo}</Box>
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
