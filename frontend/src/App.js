import React, { useState } from 'react';
import TodoList from './components/TodoList';
import data from './data.json';

function App() {
  const [todoList, setTodoList] = useState(data);

  return (
    // setTodoList();
    <div className="App">
      <h1>ToDo List</h1>
      <TodoList toDoList={todoList} />
    </div>
  );
}

export default App;
