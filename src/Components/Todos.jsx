import React from "react";
import { Box, Checkbox, Flex,} from '@chakra-ui/react';

const Todos = (props) => {

    const { todos, onClickChecked, } = props;
    
    return (
        <>
            {todos.map((todo) => (
                <Box key={todo.id}>
                    <Flex>
                        <Checkbox onChange={() => { onClickChecked(todo.id) }} isChecked={todo.checked}></Checkbox>
                        {todo.checked ? (<Box as="del">{todo.title}</Box>) : (<Box>{todo.title}</Box>)}
                    </Flex>
                </Box>
            ))}
        </>
    )
}

export default Todos;