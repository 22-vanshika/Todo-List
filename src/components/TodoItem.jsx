import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const {updateTodo,addTodo,deleteTodo,toggleComplete}=useTodo()    
    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }
    const toggleCompletedfnc=()=>{
        toggleComplete(todo.id)
    }
    return (
        <div
            className={`flex border border-black/20 dark:border-black/80 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-[#627f7f] dark:shadow-black/50 duration-300 dark:text-white/85 text-black ${
                todo.completed ? "bg-[#c6e9a7] dark:bg-[#99c176]" : "bg-[#aad7d8] dark:bg-[#3b6161] "
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer "
                checked={todo.completed}
                onChange={toggleCompletedfnc}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2 " : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10  justify-center items-center bg-gray-50 hover:bg-gray-200 dark:hover:bg-gray-400 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 dark:hover:bg-gray-400 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;