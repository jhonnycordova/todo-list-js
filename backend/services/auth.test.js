const authService = require('./auth');
const { connect, closeDatabase } = require('../database/mock-connection');

describe('Auth Service', () => {
  beforeAll(async () => connect());
  afterAll(async () => closeDatabase());

  it('should create a new user', async () => {
    const createdUser = await authService.signup({
      name: 'Peter',
      email: 'peter@gmail.com',
      password: 'Peter123.',
    });

    expect(createdUser.name).toBe('Peter');
    expect(createdUser.email).toBe('peter@gmail.com');
    expect(createdUser.password).toBeUndefined();
  });

  it('should login created user', async () => {
    const user = await authService.login({
      email: 'peter@gmail.com',
      password: 'Peter123.',
    });

    expect(user.name).toBe('Peter');
    expect(user.email).toBe('peter@gmail.com');
    expect(user.password).toBeUndefined();
  });

  it('should login with invalid password', async () => {
    expect.assertions(1);
    return authService.login({
      email: 'peter@gmail.com',
      password: 'incorrect_password',
    })
      .catch((error) => {
        expect(error.message).toBe('wrong credentials');
      });
  });
});
