const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);
describe('Save todo', () => {
    
  it('POST /todo', async () => {
    const todoData = { text: 'My todo list', order: 1 };
    const response = await request.post('/todo').send(todoData);

    expect(response.status).toBe(200);
  });
});
