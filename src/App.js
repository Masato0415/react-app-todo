import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
//import { ChevronDownIcon } from '@chakra-ui/icons';

function App() {

  return (
    <>

      <header>
        <p className="bg-lime-400 p-2 text-center text-slate-100">Todoアプリ(仮)</p>
      </header>

      <div className="flex justify-center">
        <input className="bg-green-50 border border-green-500  rounded-md w-[500px]" type="text" placeholder='Todoを入力してください(20文字以内)'></input>
        <button className="bg-green-500 text-white   hover:bg-green-400 min-w-[50px]">入力</button>
      </div>
      {/*リスト一覧画面*/}
      <div id="todoList" className="bg-lime-400 min-h-[650px] m-[10px] rounded-lg p-[20px]">
        <ul>
          <li className="flex mb-[10px]">
            <input id="checkbox" type="checkbox" className="w-5 h-5 cursor-pointer mr-3"></input>
            <p className="text-1xl">カレーの食材を買う</p>
          </li>

          <li className="flex mb-[10px]">
            <input id="checkbox" type="checkbox" className="w-5 h-5 cursor-pointer mr-3"></input>
            <p className="text-1xl">カレーを作る</p>

          </li>
          <li className="flex mb-[10px] ">
            <input id="checkbox" type="checkbox" className="w-5 h-5 cursor-pointer mr-3"></input>
            <p className="text-1xl">カレーを食べる</p>
          </li>

        </ul>
        <Menu>
          <MenuButton as={Button}>
            メニュー
          </MenuButton>
          <MenuList>
            <MenuItem>編集</MenuItem>
            <MenuItem>削除</MenuItem>
            <MenuItem>終了</MenuItem>
          </MenuList>
        </Menu>

      </div>


    </>

  );

}

export default App;

