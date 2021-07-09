const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
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

connectDB();
