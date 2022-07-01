import express from "express";

const router = express.Router();

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/timeline/all", getPosts);

export default router;
