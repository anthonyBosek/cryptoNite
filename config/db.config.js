const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const config = require("./index");

let mongoDB = null;

const connectDB = async () => {
  try {
    let dbUrl = config.MONGO_URI;

    if (config.NODE_ENV === "test") {
      mongoDB = await MongoMemoryServer.create();
      dbUrl = mongoDB.getUri();
    }
    mongoose.set("strictQuery", true);

    const conn = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (config.NODE_ENV !== "test")
      console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    if (config.NODE_ENV !== "test") {
      console.error(err);
      process.exit(1);
    } else throw err;
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongoDB) {
      await mongoDB.stop();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { connectDB, disconnectDB };
