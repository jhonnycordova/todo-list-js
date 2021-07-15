const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);
describe('Create todo', () => {
  it('POST /todo', async () => {
    const todoData = { text: 'My todo list', order: 1 };
    const response = await request.post('/todo').send(todoData);

    expect(response.status).toBe(200);
    expect(response.body.text).toBe(todoData.text);
  });

  it('POST /todo without data', async () => {
    const response = await request.post('/todo').send({});

    expect(response.status).toBe(422);
  });

  it('POST /todo without text', async () => {
    const todoData = { order: 1 };
    let response = await request.post('/todo').send(todoData);
    expect(response.status).toBe(422);
    expect(response.error.text).toMatch(/(?<=text).*(?=required).*/g);

    todoData.text = '';
    response = await request.post('/todo').send(todoData);
    expect(response.status).toBe(422);
    expect(response.error.text).toMatch(/(?<=text).*(?=empty).*/g);
  });

  it('POST /todo with invalid name', async () => {
    const todoData = { text: 'x', order: 1 };
    let response = await request.post('/todo').send(todoData);
    expect(response.status).toBe(422);

    todoData.text = { x: 'Invalid name' };
    response = await request.post('/todo').send(todoData);
    expect(response.status).toBe(422);
  });

  it('POST /todo with invalid order', async () => {
    const todoData = { text: 'My todo list', order: -1 };
    let response = await request.post('/todo').send(todoData);
    expect(response.status).toBe(422);

    todoData.order = 'x';
    response = await request.post('/todo').send(todoData);
    expect(response.status).toBe(422);
  });
});

describe('Read all todos', () => {
  it('GET /todo', async () => {
    const response = await request.get('/todo');

    expect(response.status).toBe(200);
    expect(response.body.todos).toBeDefined();
  });
});

describe('Update todo', () => {
  it('PUT /todo/idTodo', async () => {
    const todoData = { text: 'My todo list', order: 1, isCompleted: true };
    const response = await request.put('/todo/idTodo').send(todoData);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe('idTodo');
    expect(response.body.text).toBe(todoData.text);
    expect(response.body.isCompleted).toBe(todoData.isCompleted);
  });

  it('PUT /todo without data', async () => {
    const todoData = { text: 'My todo list', order: 1, isCompleted: true };
    let response = await request.put('/todo').send(todoData);
    expect(response.status).toBe(404);

    response = await request.put('/todo/idTodo').send({});
    expect(response.status).toBe(422);
  });

  it('PUT /todo without text', async () => {
    const todoData = { order: 1, isCompleted: true };
    let response = await request.put('/todo/idTodo').send(todoData);
    expect(response.status).toBe(422);

    todoData.text = '';
    response = await request.put('/todo/idTodo').send(todoData);
    expect(response.status).toBe(422);
  });

  it('PUT /todo with invalid name', async () => {
    const todoData = { text: 'x', order: 1 };
    let response = await request.put('/todo/idTodo').send(todoData);
    expect(response.status).toBe(422);

    todoData.text = { x: 'Invalid name' };
    response = await request.put('/todo/idTodo').send(todoData);
    expect(response.status).toBe(422);
  });

  it('PUT /todo with invalid order', async () => {
    const todoData = { text: 'My todo list', order: -1 };
    let response = await request.put('/todo/idTodo').send(todoData);
    expect(response.status).toBe(422);

    todoData.order = 'x';
    response = await request.put('/todo/idTodo').send(todoData);
    expect(response.status).toBe(422);
  });
});


describe('Delete todo', () => {
  it('DELETE /todo/idTodo', async () => {
    const response = await request.delete('/todo/idTodo');
    expect(response.status).toBe(204);
  });

  it('DELETE /todo without data', async () => {
    const todoData = { text: 'My todo list', order: 1, isCompleted: true };
    let response = await request.delete('/todo').send(todoData);
    expect(response.status).toBe(404);
    expect(response.body.text).toBeUndefined()
  });
});