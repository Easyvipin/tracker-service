import {
  addApplication,
  getApplication,
} from "@controllers/application.controllers";
import express from "express";

const applicationRouter = express.Router();

applicationRouter.get("/:id", getApplication);
applicationRouter.post("/add", addApplication);

export default applicationRouter;
