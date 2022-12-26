const express = require("express");
const router = express.Router();

// GET all blogs
router.get("/", (req, res) => {
    res.json({msg: "Get all workouts"})
})
// GET a single blog
router.get("/:id", (req, res) => 
res.json({msg: "Get a single workout"}))

// POST a new blog
router.post("/:id", (req, res) => {
    res.json({msg: "Post a new blog"})
})
// DELETE a new blog
router.delete("/:id", (req, res) => {
    res.json({msg: "DELETE a    blog"})
})
// UPDATE a new blog
router.patch("/:id", (req, res) => {
    res.json({msg: "Update a blog"})
})

module.exports = router;    