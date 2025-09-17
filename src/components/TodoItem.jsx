export const TodoItem = ({ todo, todos, setTodos }) => {
  return (
    <div
      key={todo.id}
      onClick={() => {
        const newTodos = todos.map((oneTodo) => {
          if (oneTodo.id === todo.id) {
            oneTodo.isDone = !oneTodo.isDone
          }
          return oneTodo
        })

        setTodos(newTodos)
      }}
    >
      {todo.text}
      <span>{todo.isDone ? "✅" : "🟩"}</span>
    </div>
  )
}
