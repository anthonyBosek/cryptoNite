const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

// CONFIGURATIONS
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// MONGOOSE SETUP
// console.log(process.env.MONGO_URI);
mongoose.set("strictQuery", false); // not to show deprecation warning
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB/cryptonite connected"))
  .catch((err) => console.log(`${err} did not connect`));

// LISTEN
module.exports = app;
