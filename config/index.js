import dotenv from "dotenv";
dotenv.config();
export default {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
};
