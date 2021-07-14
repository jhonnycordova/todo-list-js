import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import TodoList from './components/TodoList';
import data from './data.json';
import Theme from './components/Theme';

function App() {
  const [todoList, setToDoList] = useState(data);

  const onHandleToggle = (id) => {
    // I need to call a service to update todo in mongoDB
    /* eslint-disable */
    const mapped = todoList.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : { ...task };
    });
    setToDoList(mapped);
    /* eslint-enable */
  };

  const onDeleteToDo = (id) => {
    // I need to call a service to update todo in mongoDB
    const filtered = todoList.filter((task) => task.id !== id);
    setToDoList(filtered);
  };

  return (
    <Theme>
      <div className="App">
        <h1>Welcome </h1>
        <FormControl>
          <Select value="" displayEmpty>
            <MenuItem value="">
              <em>Estado de la tarea</em>
            </MenuItem>
            <MenuItem value="completed">Completada</MenuItem>
            <MenuItem value="not_completed">Por completar</MenuItem>
          </Select>
        </FormControl>
        <TodoList toDoList={todoList} onHandleToggle={onHandleToggle} onDeleteToDo={onDeleteToDo} />
      </div>
    </Theme>
  );
}

export default App;
