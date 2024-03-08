import React from "react";
import { Box, Checkbox, Flex, Button } from '@chakra-ui/react';

// propsの値渡しについて分割代入を使用した以下の書き方も覚えておきましょう！
const Todos = ({ todos, onClickChecked, onClickDelete, onClickEdit, }) => {

    // const { todos, onClickChecked, onClickDelete, onClickEdit, } = props;

    return (
        <>
            {todos.map((todo) => (
                <Box key={todo.id}>
                    <Flex height="30px" align='center'>
                        <Checkbox onChange={() => { onClickChecked(todo.id) }} isChecked={todo.checked}></Checkbox>
                        {todo.checked ? (<Box padding={5} fontSize='1xl' as="del">{todo.title}</Box>) : (<Box fontSize='1xl' padding={5}>{todo.title}</Box>)}
                        <Box>
                            <Button height="25px" mr="10px" colorScheme="blue" onClick={() => { onClickEdit(todo) }}>Edit</Button>
                            <Button height="25px" colorScheme="red" onClick={() => { onClickDelete(todo.id) }}>Delete</Button>
                        </Box>
                    </Flex>
                </Box>
            ))}

        </>
    )
}

export default Todos;