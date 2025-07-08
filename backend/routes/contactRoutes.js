import express from "express";
import { createMessage } from "../controllers/contactController.js";
const router = express.Router();

// POST /api/contact
router.post("/", createMessage);

export default router;
