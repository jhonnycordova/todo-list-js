const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, index: true, unique: true, lowercase: true,
  },
  password: String,
  todos: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'ToDo' },
  ],
}, { timestamps: { } });

UserSchema.pre('save', function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password') && !user.isNew) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (saltError, salt) => {
    if (saltError) {
      next(saltError);
    } else {
      bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) return next(hashError);
        user.password = hash;
        return next();
      });
    }
  });
  return true;
});

UserSchema.methods.comparePassword = function checkIsEqual(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
