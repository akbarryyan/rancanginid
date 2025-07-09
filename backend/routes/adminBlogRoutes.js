import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/adminBlogController.js";

const router = express.Router();

// GET all blogs
router.get("/", getAllBlogs);
// GET single blog
router.get("/:id", getBlogById);
// CREATE blog
router.post("/", createBlog);
// UPDATE blog
router.put("/:id", updateBlog);
// DELETE blog
router.delete("/:id", deleteBlog);

export default router;
