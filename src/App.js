import React, { useState } from 'react'
import todo from './atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'

function App() {
  const currentList = useRecoilValue(todo)
  const AddTodoList = useSetRecoilState(todo)
  let [text, setText] = useState("")

  const Text = (e) => {
    setText(e.target.value)
  }
  
  const AddTodo = () => {
    AddTodoList([...currentList, text])
    setText("")
  }

  return (
    <>
      <div className='bg-[#339AFA] w-full h-full'>
        <div className='text-center w-full h-[10%] flex justify-center items-center'>
          <div className='w-fit h-fit'>
            <h1 className='text-[56px] text-white'>TODO LIST</h1>
          </div>
        </div>
        <div className='w-full h-[80%] flex justify-center items-center'>
          <div className='w-[663px] h-[661px] bg-white'>
            <ol className='text-[30px] text-center'>
              {currentList.map(items => {
                return <li key={items.id}>{items}</li>
              })}
            </ol>
          </div>
        </div>
        <div className='w-full h-[10%] flex justify-center relative'>
            <input type="text" onChange={Text} className='w-[663px] h-[50px] rounded-full pl-[20px] text-[30px]' value={text}/>
            <button onClick={AddTodo} className='absolute w-[120px] h-[54px] bg-[#227AFF] right-[26%]'>CREATE</button>
        </div>
      </div>
    </>
  );
}

export default App;
