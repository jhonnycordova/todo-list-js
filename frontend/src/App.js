import React, { useState } from 'react';

import TodoList from './components/TodoList';
import data from './data.json';
import Theme from './components/Theme';
import Filters from './components/Filters';

function App() {
  const [todoList, setToDoList] = useState(data);

  const onHandleToggle = (id) => {
    // I need to call a service to update todo in mongoDB
    /* eslint-disable */
    const mapped = todoList.map((task) => {
      return task.id === id ? { ...task, isCompleted: !task.isCompleted } : { ...task };
    });
    setToDoList(mapped);
    /* eslint-enable */
  };

  const onDeleteToDo = (id) => {
    // I need to call a service to update todo in mongoDB
    const filtered = todoList.filter((task) => task.id !== id);
    setToDoList(filtered);
  };

  const handleFilter = (filter) => {
    /** TEST CODE */
    const COMPLETED = 'completed';
    if (filter === '') {
      setToDoList(data);
      return;
    }

    const isCompleted = filter === COMPLETED;

    const filtered = data.filter((task) => task.isCompleted === isCompleted);
    setToDoList(filtered);
  };

  return (
    <Theme>
      <div className="App">
        <h1>Welcome </h1>
        <Filters onFiltersChanged={handleFilter} />
        <TodoList toDoList={todoList} onHandleToggle={onHandleToggle} onDeleteToDo={onDeleteToDo} />
      </div>
    </Theme>
  );
}

export default App;
