import express from "express";
import { executeTest } from "../controllers/testController.js";

const router = express.Router();

router.post("/execute-test", executeTest);

export default router;
