import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const AddTodo = () => {
   const {addTodo} = useTodo();
   const [todo, setTodo] = useState('')
   const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo({todo_msg : todo});
    setTodo('')
   }

  return (
    <div className='px-2 m-2 w-full flex flex-row justify-center '>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='py-2 text-white letter-[2px] px-4 bg-[#f6f6f753] max-w-[800px] w-full outline-none rounded-l-md' type="text" placeholder='New Todo'  />
        <button onClick={todo && handleAddTodo} className='py-2 px-8 text-white bg-blue-900 rounded-r-md'>Add Todo</button>
    </div>
  )
}

export default AddTodo