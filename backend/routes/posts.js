
const express = require("express");

const Post = require("../models/postModel")
const {createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postController")
const requireAuth = require("../middleware/requireAuth")
const router = express.Router();
router.use(requireAuth) // this will fire the middleware before the controller functions are called as we need authentication for all routes. If the user is authenticated, we now have req.user from the requireAuth middleware

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