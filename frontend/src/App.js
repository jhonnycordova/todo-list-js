import React, { useState } from 'react';
import TodoList from './components/TodoList';
import data from './data.json';

function App() {
  const [todoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    // I need to call a service to update todo in mongoDB
    /* eslint-disable */
    const mapped = todoList.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : { ...task };
    });
    setToDoList(mapped);
    /* eslint-enable */
  };

  const deleteToDo = (id) => {
    // I need to call a service to update todo in mongoDB
    const filtered = todoList.filter((task) => task.id !== id);
    setToDoList(filtered);
  };

  return (
    <div className="App">
      <h1>Welcome </h1>
      <h2>To Do List</h2>
      <TodoList toDoList={todoList} handleToggle={handleToggle} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;
