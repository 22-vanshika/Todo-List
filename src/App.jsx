import { useEffect } from "react";
import { TodoProvider, TodoContext, useTodo } from "./context/TodoContext";
import React, { useState } from "react";
import { TodoForm, TodoItem } from "./components";
import bg from "./components/bg.png";
import Clock from "react-clock";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      const hour = dateObject.getHours();
      const minute = dateObject.getMinutes();
      const second = dateObject.getSeconds();

      const currentTime = hour + " : " + minute + " : " + second;

      setTime(currentTime);
    }, 1000);
  }, []);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="backdrop-blur-2xl bg-no-repeat bg-cover bg-radial-gradient dark:bg-radial-gradient-2">
          {/* 
      <div className="  text-[#20302d] flex justify-center items-center text-center pt-4 ">
        <div className="text-4xl border-4  border-[#96cbe2]  bg-[#c6eaf4] p-8 rounded-3xl">
          {time}
        </div>
      </div> */}

          <div className=" min-h-screen py-8 ">
           
         
            <div className="w-full bg-[rgba(187,207,214,1)]  dark:bg-[rgb(64,80,85)] lg:max-w-4xl md:max-w-2xl max-w-md mx-auto shadow-md rounded-lg px-4 pt-5 pb-5 text-white ">
              <div className="flex flex-row justify-around items-baseline ">
              <h1 className="text-2xl font-bold text-center mb-10  mt-2 text-black dark:text-white/85">
              Streamline Your Day with Todo Lists
              </h1>
              <div >
                <ThemeBtn />
              </div>

              </div>
              <div className="mb-4">
                <TodoForm />
                {/* Todo form goes here */}
              </div>
              <div className="flex flex-wrap gap-y-3">
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))}
                {/*Loop and Add TodoItem here */}
              </div>
            </div>
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
