import React from "react";

import { Button,  FormControl, FormLabel, Input,} from '@chakra-ui/react';

const Form = (props) => {
    const { input, setInput, handleAddTodo} = props;
    
    return (
        <>
            <FormControl>
                <FormLabel>Todoを入力してください</FormLabel>
                <Input value={input} onChange={(e) => { setInput(e.target.value) }} />
                <Button colorScheme="green" onClick={handleAddTodo}>Add</Button>
            </FormControl>
        </>
    )
}

export default Form;