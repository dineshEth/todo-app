import { useContext } from "react";
import { createContext } from "react";

export const TodoContext =  createContext({
    todos:[
        {
            id:1,
            todo_msg:'Reactjs',
            isCompleted:true
        }
        
    ],
    addTodo: (todo)=>{},
    updateTodo:(id, todo) =>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id)=>{}  
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => ( useContext(TodoContext));

