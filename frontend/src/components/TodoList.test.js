import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

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
  const { queryByDisplayValue } = render(<TodoList toDoList={toDoList} />);
  expect(queryByDisplayValue(/task1/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/task2/i)).toBeInTheDocument();
});
