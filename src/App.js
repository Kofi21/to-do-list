// import "./styles.css";

export default function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false },
  ];

  return (
    <div>
      <h1>Todo List</h1>

      <TodoList todos={todos} />
      <AddTodo />
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
  // console.log(props);
}

function AddTodo() {
  return (
    <form>
      <input placeholder="Add todo" />
      <button type="submit">Submit</button>
    </form>
  );
}
