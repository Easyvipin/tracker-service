import {
  addApplication,
  getApplication,
} from "@controllers/application.controllers";
import express from "express";
import { checkLoggedIn } from "src/middleware/auth";

const applicationRouter = express.Router();
applicationRouter.get("/:id", checkLoggedIn, getApplication);
applicationRouter.post("/add", addApplication);

export default applicationRouter;
