
import './App.css';
import { InputTodo } from './inputTodo';

function App() {
  return (
    <>
      <header class>
        <p class="bg-lime-400 p-2 text-center text-slate-100">Todoアプリ(仮)</p>
      </header>

      <div class="flex justify-center">
        <input class="bg-green-50 border border-green-500  rounded-md w-[500px]" type="text" placeholder='Todoを入力してください(20文字以内)'></input>
        <button class="bg-green-500 text-white   hover:bg-green-400 min-w-[50px]">入力</button>
      </div>
    </>
  );
}

export default App;
