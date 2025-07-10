import express from "express";
import {
  getAllMessages,
  markAsRead,
  markAsReplied,
  deleteMessage,
} from "../controllers/adminMessagesController.js";

const router = express.Router();

router.get("/", getAllMessages);
router.put("/:id/read", markAsRead);
router.put("/:id/replied", markAsReplied);
router.delete("/:id", deleteMessage);

export default router;
