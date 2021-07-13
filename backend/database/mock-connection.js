const mongoose = require('mongoose');
const { config } = require('../config/config');

module.exports.connect = async () => {
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
  await mongoose.connect(`${config.connectionStringTest}`, connectionOptions);
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
  await mongoose.disconnect();
};

module.exports.clearDatabase = () => {
  const { collections } = mongoose.connection;
  Object.keys(collections).forEach((collectionName) => {
    const collection = collections[collectionName];
    collection.deleteMany();
  });
};
