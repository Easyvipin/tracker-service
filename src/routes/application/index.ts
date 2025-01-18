import { getApplication } from "@controllers/application.controllers";
import express from "express";

const applicationRouter = express.Router();

applicationRouter.get("/:id", getApplication);

export default applicationRouter;
