const mongoose = require('mongoose');
const User = require('./User');
const { connect, clearDatabase, closeDatabase } = require('../mock-connection');

const userData = {
  name: 'probando',
  email: 'test@test-1.com',
  password: '123',
};

describe('User Model test ', () => {
  beforeAll(async () => connect());
  afterEach(async () => clearDatabase());
  afterAll(async () => closeDatabase());

  it('Create and save success', async () => {
    const user = new User(userData);
    const savedUser = await user.save();

    /* eslint-disable */
    expect(savedUser._id).toBeDefined();
    /* eslint-enable */
    expect(savedUser.createdAt).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).not.toBe(userData.password);
    savedUser.comparePassword(userData.password, (err, isMatch) => {
      expect(isMatch).toBeTruthy();
    });
  });

  it('Create user and compare with different password', async () => {
    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).not.toBe(userData.password);
    savedUser.comparePassword('RandomDifferentPassword', (err, isMatch) => {
      expect(isMatch).toBeFalsy();
    });
  });

  it('Create user without required email, should failed', async () => {
    let err;
    const userWithoutEmail = new User({ name: 'TekLoon' });
    try {
      await userWithoutEmail.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('Create two users with the same email, should failed', async () => {
    let err;
    const user = new User(userData);
    const savedUser = await user.save();

    /* eslint-disable */
    expect(savedUser._id).toBeDefined();
    /* eslint-enable */
    const userWithSameEmail = new User(userData);
    try {
      await userWithSameEmail.save();
    } catch (error) {
      err = error;
    }

    expect(err.message).toMatch(/duplicate key error collection/);
    expect(err.message).toMatch(/email_1 dup key/);
  });
  
});
