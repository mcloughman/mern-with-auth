
const express = require("express");

const Post = require("../models/postModel")
const {createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postController")
const router = express.Router();

// GET all blogs
router.get("/", getPosts)
// GET a single blog
router.get("/:id", getPost)

// POST a new blog
router.post("/", createPost)
// DELETE a blog
router.delete("/:id", deletePost)
// UPDATE a new blog
router.patch("/:id", updatePost)

module.exports = router;    