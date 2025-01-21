import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes";
import AppDataSource from "./db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.error(error.message);
  });

app.use("/", router);

app.listen(port, () => {
  console.log("Server up and running");
});
