import React from 'react';
import { MenuButton, MenuList, MenuItem, Button, Menu } from '@chakra-ui/react';

const Menus = (props) => {
    const { onClickEdit } = props;

    return (
        <>
            <Menu>
                <MenuButton as={Button}>
                    メニュー
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={onClickEdit}>編集</MenuItem>
                    
                </MenuList>
            </Menu>
            
        </>
    )

}
export default Menus;
