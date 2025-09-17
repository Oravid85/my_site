import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { MyHeader } from "./components/MyHeader"
import { TodoItem } from "./components/TodoItem"

function App() {
  const [todoText, setTodoText] = useState("")

  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([
    {
      text: "תעשה כלים בכיור",
      id: Math.random(),
      IsDone: false,
    },
  ])

  return (
    <>
      <div className="bg-amber-200">
        <h1>TODO APP</h1>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          )
        })}

        <button
          onClick={() => {
            const newTodo = {
              text: todoText,
              id: Math.random(),
              IsDone: false,
            }

            setTodos([...todos, newTodo])
            setTodoText("")
          }}
        >
          הוסף משימה
        </button>
        <input
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />
      </div>
    </>
  )
}

export default App
