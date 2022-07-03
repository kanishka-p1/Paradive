import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/posts.js";
import Post from "../models/Post.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"


const router = express.Router();

router.post("/", verifyUser, createPost);
router.put("/:id", verifyUser, updatePost);
router.delete("/:id", verifyUser, deletePost);
router.get("/find/:id", getPost);
router.get("/", getPosts);

export default router;
