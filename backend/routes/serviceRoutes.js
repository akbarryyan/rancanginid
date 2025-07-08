import express from "express";
const router = express.Router();
import { db } from "../config/db.js";
import { getAllServices } from "../controllers/serviceController.js";

router.get("/", getAllServices);

export default router;
