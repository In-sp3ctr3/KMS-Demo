import dotenv from "dotenv";
dotenv.config();

export default {
    DATABASE_URL: process.env.DATABASE_URL || "postgres://localhost:5432/mydb",
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || "mysecret",
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME || "1h",
  };