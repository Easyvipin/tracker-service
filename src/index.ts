import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import router from "./routes";
import AppDataSource from "./db";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swaggerConfig";

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
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", router);

app.listen(port, () => {
  console.log("Server up and running");
});
