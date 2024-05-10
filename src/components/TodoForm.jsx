import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo,setTodo]= useState("")
    const {addTodo}=useTodo()
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return 
        addTodo({id:Date.now(),todo,completed:false})
        setTodo("")
    }
    return (
        <form onSubmit={add} className="flex text-black ">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/20 dark:border-black/80 shadow-sm shadow-[#627f7f] dark:shadow-black/50 rounded-l-lg px-3 outline-none duration-150 bg-[#d5e4e4] py-1.5"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="border border-black/10 dark:border-black/40 shadow-sm shadow-[#627f7f] dark:shadow-black/50  w-24 rounded-r-lg px-3 py-1 bg-[#63a3a4] dark:bg-[#3b6161] dark:text-white/90 text-black shrink-0  hover:dark:bg-[#599393]">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

