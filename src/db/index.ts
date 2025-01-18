import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Application } from "src/entity/Application";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: parseInt(process.env.POSTGRES_PORT!) || 5433,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Application],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
