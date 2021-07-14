const User = require('../database/schemas/User');

const login = async ({ email, password }) => {
  const user = await User.findOne({ email }, 'email name');
  if (!user) {
    throw new Error('wrong credentials');
  }

  const isChecked = await user.comparePassword(password);
  if (!isChecked) {
    throw new Error('wrong credentials');
  }

  return user.lean();
};

const signup = async ({ name, email, password }) => {
  const user = new User({ name, email, password });
  await user.save();
  return { name: user.name, email: user.email };
};

module.exports = {
  login,
  signup,
};
