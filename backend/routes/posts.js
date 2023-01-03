
const express = require("express");

const Post = require("../models/postModel")
const {createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postController")
const requireAuth = require("../middleware/requireAuth") // I'm only going to use middleware of selected POST routes
const router = express.Router();


// GET all blogs
router.get("/", getPosts)
// GET a single blog
router.get("/:id", getPost)

// POST a new blog
router.post("/", requireAuth, createPost)
// DELETE a blog
router.delete("/:id", requireAuth, deletePost)
// UPDATE a new blog
router.patch("/:id", requireAuth, updatePost)

module.exports = router;    