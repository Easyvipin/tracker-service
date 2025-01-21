import express from "express";
import applicationRouter from "./application";

const router = express.Router();

router.use("/application", applicationRouter);

export default router;
