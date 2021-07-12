const ToDo = require('./ToDo')
const { connect, clearDatabase, closeDatabase } = require('../mock-connection');

describe('ToDo Model test ', () => {
    beforeAll(async () => connect());
    afterEach(async () => clearDatabase());
    afterAll(async () => closeDatabase());
  
    it('Create and save success', async () => {        
      const todoData = { text: 'Probando mi todo list' };
      const savedToDo = await new ToDo(todoData).save();
  
      /* eslint-disable */
      expect(savedToDo._id).toBeDefined();
      /* eslint-enable */
      expect(savedToDo.createdAt).toBeDefined();
      expect(savedToDo.text).toBe(todoData.text);
      expect(savedToDo.isCompleted).toBeFalsy();
      
    });

});