import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders todo title', () => {
  render(<TodoList />);
  const title = screen.getByText(/To Do List/i);
  expect(title).toBeInTheDocument();
});

test('renders toDos children', () => {
  const toDoList = [
    { id: 1, task: 'task1 ', isCompleted: false },
    { id: 2, task: 'task2 ', isCompleted: true },
  ];
  const { queryAllByDisplayValue } = render(<TodoList toDos={toDoList} />);
  expect(queryAllByDisplayValue(/task1/i)[0]).toBeInTheDocument(); // Draggable others element with value "task"..
  expect(queryAllByDisplayValue(/task2/i)[0]).toBeInTheDocument();
});

test('show message when list doesnt have toDos', () => {
  const toDoList = [];
  render(<TodoList toDos={toDoList} />);

  expect(screen.getByText(/Nothing to show/i)).toBeInTheDocument();
});
