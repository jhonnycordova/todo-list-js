const User = require('../database/schemas/User');

const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email }, 'email name password', (err, user) => {
      if (err) return reject(new Error('login error'));
      if (!user) return reject(new Error('wrong credentials'));
      user.comparePassword(password, (error, isMatch) => {
        if (error) return reject(new Error('wrong credentials'));
        if (isMatch !== true) return reject(new Error('wrong credentials'));
        resolve({ name: user.name, email: user.email });
      });
    });
  });
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
