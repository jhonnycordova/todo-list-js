const authService = require('./auth');

describe('Auth Service', () => {
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
    const promise = authService.login({
      email: 'peter@gmail.com',
      password: 'invalid',
    });

    await expect(promise).toBeRejected();
  });
});
