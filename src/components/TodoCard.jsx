import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

const TodoCard = ({todo}) => {
    const {id, todo_msg, isCompleted} = todo
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(todo_msg);
    const {deleteTodo, updateTodo, toggleComplete} = useTodo();

    const handleEditTodo = (e) => {
      e.preventDefault();
      if(isCompleted) return;
      if(editable) {
        updateTodo(id, { todo_msg : todo});
        setEditable(!editable)
      }
    }

    const handleToggleCompleted = () => {
      // e.preventDefault();
      toggleComplete(id)
    }
  return (
    <div className={`w-[280px] py-2 px-4 rounded-md gap-y-2 flex flex-col justify-center items-center ${isCompleted ? 'bg-[#04537e]' : 'bg-[#1196f4]'} `} >
    <input className={`${isCompleted ? 'line-through' : ''} w-full text-wrap ${editable ? ' border-[2px]' :'outline-none'} } text-[#100723] text-center font-bold text-[24px] bg-transparent `} value={text} onChange={(e) => setText(e.target.value)} readOnly={!editable} />
    <p className='text-white'>{Date(id)}</p>
        <div className='flex flex-row justify-center items-center gap-x-2' >
            <p className={`${isCompleted ? 'text-green-500' : 'text-black'}`}> Complete </p>
            <input className='accent-[#0d032c] text-[18px] h-4 w-4 ' type="checkbox" checked={isCompleted} onChange={handleToggleCompleted} name="complete" id="" />
        </div>
        <div className='flex flex-row justify-between gap-x-4'>
            <button onClick={handleEditTodo} className='bg-blue-900 text-white py-1 px-8 rounded-sm'>{editable ? 'Save' : 'Edit'}</button>
            <button onClick={() => deleteTodo(id)} className='bg-red-600 text-white py-1 px-8 rounded-sm'>Delete</button>
        </div>
    </div>
  )
}

export default TodoCard