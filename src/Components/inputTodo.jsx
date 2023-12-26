export const InputTodo = () =>{
    return (
    <>
        <div class="flex justify-center">
        <input class="bg-green-50 border border-green-500  rounded-md w-[500px]" type="text" placeholder='Todoを入力してください(20文字以内)'></input>
        <button class="bg-green-500 text-white   hover:bg-green-400 min-w-[50px]">入力</button>
        </div>
        </>
    )
}