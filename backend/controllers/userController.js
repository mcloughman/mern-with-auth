const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {  //making a reusable function that generates tokens
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// login user
const loginUser = async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id)
        console.log(token)
        res.status(200).json({email, token})
    } catch(error) {
        res.status(400).json({error: error.message})
        console.log(error)
    }
}

// signup user
const signupUser = async(req, res) => {
    const {email, password} = req.body;
     try {
        const user = await User.signup(email, password);

        // we use the id of the user we just created to createt the token
        const token = createToken(user._id)

        // instead of responding with the user object, we will respond 
        res.status(200).json({email, token})
     } catch(error) {
        res.status(400).json({error: error.message})
     }
    
}

module.exports = {
    loginUser,
    signupUser
}