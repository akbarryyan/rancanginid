import express from "express";
import { loginAdmin } from "../controllers/authAdminController.js";
const router = express.Router();

// POST /api/admin/login
router.post("/login", loginAdmin);

export default router;
