

import React from "react";

import { Button, FormControl, FormLabel, Input, } from '@chakra-ui/react';

const EditForm = (props) => {
    const { input, setInput, handleTodoEdit, } = props;

    return (
        <>
            <FormControl>
                <FormLabel>編集してください</FormLabel>
                <Input value={input} onChange={(e) => { setInput(e.target.value) }} />
                
                <Button colorScheme="blue" onClick={() => { window.location.reload() }}>cancel</Button>
            </FormControl>
        </>
    )
}

export default EditForm;