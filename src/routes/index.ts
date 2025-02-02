import express from "express";
import applicationRouter from "./application";
import authRouter from "./auth";

const router = express.Router();

router.use("/application", applicationRouter);
router.use("/auth", authRouter);

export default router;
