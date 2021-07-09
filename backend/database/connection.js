const mongoose = require('mongoose');

const { config } = require('../config/config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    /* eslint-disable */
    console.log('MongoDB connected!');
    /* eslint-enable */
  } catch (err) {
    /* eslint-disable */
    console.log('Failed to connect to MongoDB ', err);
    /* eslint-enable */
  }
};

module.exports = connectDB;
