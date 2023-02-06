const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const config = require("./index");

let mongoDB = null; // * placeholder for our mock DB instance

const connectDB = async () => {
  try {
    let dbUrl = config.MONGO_URI; //* store our uri to var that we'll use to connect with

    //* if our runtime env is testing then we'll change our connection strategy
    if (config.NODE_ENV === "test") {
      //* create a temp mock mongo server in runtime
      mongoDB = await MongoMemoryServer.create();

      //* fetch mock mongo uri and reassign to
      dbUrl = mongoDB.getUri();
    }
    mongoose.set("strictQuery", true); //* upcoming deprecation warning in future release, set strictQuery to true before connecting

    /**
     * @function import('mongoose').connect - connection promise
     * @param {string} uri - uri to connect to - required
     * @param {object} [options] - connection options - optional
     * @param {Function} [callback] - callback function - optional
     * @returns {Promise<void>}
     */
    console.log(dbUrl)
    console.log(config.NODE_ENV)
    const conn = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //* log connection info if not in test env
    if (config.NODE_ENV !== "test")
      console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    //* log error if not in test env else throw error
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
