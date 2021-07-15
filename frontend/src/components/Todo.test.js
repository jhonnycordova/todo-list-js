import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from '../components/Todo';
import userEvent from '@testing-library/user-event';

test('call right function when user click on delete', () => {
  const toDo = { id: 1, task: 'task1 ', isCompleted: false };
  const onDeleteToDoMock = jest.fn();
  const { getByRole } = render(<Todo toDo={toDo} onDeleteToDo={onDeleteToDoMock} />);
  const deleteButton = getByRole('button');
  userEvent.click(deleteButton);
  expect(onDeleteToDoMock).toBeCalled();
});

test('call right function when user click on checkbox to toggle todo status', () => {
  const toDo = { id: 1, task: 'task1 ', isCompleted: false };
  const onHandleToggleMock = jest.fn();
  const { getByRole } = render(<Todo toDo={toDo} onHandleToggle={onHandleToggleMock} />);
  const checkbox = getByRole('checkbox');
  userEvent.click(checkbox);
  expect(onHandleToggleMock).toBeCalled();
});
