import { useState, useEffect } from "react";
import { TodoContextProvider, useTodo } from "./context/TodoContext"
import AddTodo from "./components/AddTodo";
import TodoCard from "./components/TodoCard";

function App() {

  const [todos, setTodos] = useState([]);
  const updateTodo = ({id, todo}) => {
    setTodos(todos.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const addTodo = (todo) => {
    if(todos.length > 20) {
      alert ("Delete some");
      return;
    }
    setTodos([{
      id : Date.now(),
      ...todo
    },...todos]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id ? todo : ''));
  }


  const toggleComplete = (id) =>{
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted : !todo.isCompleted}: todo))
  }
  /** LOCAL STORAGE  */ 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  
  return (
    <TodoContextProvider value={{ todos, updateTodo, addTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#0d032c] h-screen flex flex-col justify-start items-center ">
      <h1 className="p-2 my-4 text-[48px] font-extrabold text-blue-900 text-center">Todo app</h1>
      <AddTodo />
      {/* {todos.length > 0 && (<p className="text-start text-blue-900">Todos</p>)} */}
      <div className="flex my-4 max-w-[1080px] flex-row flex-wrap gap-8 justify-center items-center">
          {todos.map((todo)=> {
            return(
              <TodoCard key={todo.id}  todo={todo} />   
            )
          })}  
      </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
