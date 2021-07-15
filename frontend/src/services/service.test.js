import axios from 'axios';
import {
  getTodos, createToDo, updateToDo, deleteToDo,
} from './service';

const API_URL = process.env.REACT_APP_API_URL;
const todo = { text: 'Work in Globant' };

describe('Get todo list', () => {
  it('Success response', async () => {
    const data = [
      {
        id: 'djigfuig589648',
        task: 'Go to Store',
        isCompleted: true,
      }, {
        id: 'dfjfkd48954',
        task: 'Fill gas tank',
        isCompleted: false,
      },
    ];

    jest.spyOn(axios, 'get').mockResolvedValue(data);
    await expect(getTodos()).resolves.toEqual(data);
  });
});

describe('Create todo', () => {
  let spy;

  beforeEach(() => {
    const savedToDo = { ...todo, id: 'ID-1234' };
    spy = jest.spyOn(axios, 'post').mockResolvedValue(savedToDo);
  });

  it('Create todo with text should success', async () => {
    const savedToDo = { ...todo, id: 'ID-1234' };
    await expect(createToDo(todo)).resolves.toEqual(savedToDo);
    expect(spy).toHaveBeenCalled();
  });

  it('Create empty todo should fail', async () => {
    await expect(createToDo()).rejects.toThrow('The todo is mandatory');
    await expect(createToDo({ text: '' })).rejects.toThrow('The todo is mandatory');

    expect(spy).not.toHaveBeenCalled();
  });
});

describe('Update todo', () => {
  let spy;

  beforeEach(() => {
    const savedToDo = { ...todo, id: 'ID-1234' };
    spy = jest.spyOn(axios, 'put').mockResolvedValue(savedToDo);
  });

  it('Update todo with text and id should success', async () => {
    todo.id = 'ID-1234';
    await expect(updateToDo(todo)).resolves.toEqual(todo);
    expect(spy).toHaveBeenCalledWith(`${API_URL}/todo/${todo.id}`, todo);
  });

  it('Update empty todo should fail', async () => {
    await expect(updateToDo()).rejects.toThrow('The todo is mandatory');
    await expect(updateToDo({ text: '' })).rejects.toThrow('The todo is mandatory');
    await expect(updateToDo({ text: '', id: 'ID-123' })).rejects.toThrow('The todo is mandatory');
    await expect(updateToDo({ text: 'Work in Globant' })).rejects.toThrow('The todo is mandatory');

    expect(spy).not.toHaveBeenCalled();
  });
});

describe('Delete todo', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(axios, 'delete').mockResolvedValue('');
  });

  it('Delete todo with id should success', async () => {
    const todoId = 'ID-1234';

    await expect(deleteToDo(todoId)).resolves.toEqual('');
    expect(spy).toHaveBeenCalledWith(`${API_URL}/todo/${todoId}`);
  });

  it('Delete empty id todo should fail', async () => {
    await expect(deleteToDo()).rejects.toThrow('The id todo is mandatory');
    await expect(deleteToDo('')).rejects.toThrow('The id todo is mandatory');

    expect(spy).not.toHaveBeenCalled();
  });
});
