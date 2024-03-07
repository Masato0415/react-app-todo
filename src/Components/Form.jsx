import React from "react";

import { Button, FormControl, FormLabel, Input, } from '@chakra-ui/react';

const Form = (props) => {
    const { message, input, setInput, handleTodo, buttonColor, button, edit, holder } = props;

    return (
        <>
            <FormControl>

                {(() => {
                    if (edit) {
                        return (
                            <>
                                <FormLabel>{message}</FormLabel>
                                <Input value={input} onChange={(e) => { setInput(e.target.value) }} placeholder={holder} />
                                <Button colorScheme={buttonColor} onClick={handleTodo}>{button}</Button>
                                <Button colorScheme="green" onClick={() => { window.location.reload() }}>cancel</Button>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <FormLabel>{message}</FormLabel>
                                <Input value={input} onChange={(e) => { setInput(e.target.value) }} placeholder={holder} />
                                <Button colorScheme={buttonColor} onClick={handleTodo}>{button}</Button>
                            </>
                        )
                    }
                })()}

            </FormControl>
        </>
    )
}

export default Form;