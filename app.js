// * Node Modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


// * Local Modules
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const { connectDB } = require('./config/db.config');
const config = require("./config/index");

// * Vars
const app = express();

// * Middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

/** 
 * TODO: uninstall node module "body-parser"
 * @param {import("body-parser")} bodyParser.json
 * @param {import("body-parser")} bodyParser.urlEncoded
 * @deprecated as of express 4.x {@link https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json}
 * @replaced by built in feature add to express 4.x 
 * FROM: @param {import("express")} express.json
 * FROM: @param {import("express")} express.urlencoded
 * app.use(bodyParser.json({ limit: "30mb", extended: true })); 
 * app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
* */

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

/** 
 * * Endpoint is used for continuos integration testing
 * ! removing will cause the workflow action to fail
 * @route GET /
 * @request body - none
 * @response 200 - success
 */
app.get("/", (req, res) => res.status(200).json({ message: "Server is up and running" }));

/**
 * * initialize database connection service if runtime environment is not 'test'
 * @func connectDB  connects to database service
 * @returns {Promise<void>}
 * @see @param {import("./config/db.config")}
 */
if (config.NODE_ENV !== "test") connectDB(); // with this condition we are ensuring that we don't have any issues with lingering database connection during CI pipeline


// LISTEN
module.exports = app;
