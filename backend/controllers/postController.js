const Post = require("../models/postModel")
const mongoose = require("mongoose")

// get workouts
const getPosts = async(req, res) => {
        // const user_id = req.user._id;
        // const posts = await Post.find({user_id}).sort({createdAt: -1}) 
        // All will be allowed to view posts
        const posts = await Post.find({}).sort({createdAt: -1})
       
        res.status(200).json(posts)
    
}

// get single post
const getPost = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({msg: "No such post"})
    }
    const post = await Post.findById(id)
    if (!post) {
        return res.status(404).json({msg: "Post not found"})
    }
    res.status(200).json(post)
        
}

// create new post
const createPost = async(req, res) => {
    const {title,body} = req.body;

    // use empty fields for better error handling
    let emptyFields = []
    if (!title) {
        emptyFields.push("title")
    }
    if (!body) {
        emptyFields.push("body")
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in all fields!", emptyFields})
    }

    // add post to db
    try {
        const user_id = req.user._id
        const post = await Post.create({title, body, user_id})
        res.status(200).json(post)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout

const deletePost = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({msg: "No such post"})
    }
    const post = await Post.findOneAndDelete({_id: id})
    if (!post) {
        return res.status(404).json({msg: "Post not found"})
    }
    res.status(200).json(post)

}

// update a workout
const updatePost = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({msg: "No such post"})
    }
    const post = await Post.findOneAndUpdate({_id: id}, {
        ... req.body
    })
    if (!post) {
        return res.status(404).json({msg: "Post not found"})
    }
    res.status(200).json(post)
}

module.exports = {
    createPost, getPosts, getPost, updatePost, deletePost
}