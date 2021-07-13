import React, { useState } from 'react';
import TodoList from './components/TodoList';
import data from './data.json';

function App() {
  const [todoList] = useState(data);

  return (
    // setTodoList();
    <div className="App">
      <h1>Welcome </h1>
      <h2>To Do List</h2>
      <TodoList toDoList={todoList} />
    </div>
  );
}

export default App;
