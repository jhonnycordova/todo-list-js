import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders todo title', () => {
  render(<TodoList />);
  const title = screen.getByText(/To Do List/i);
  expect(title).toBeInTheDocument();
});
