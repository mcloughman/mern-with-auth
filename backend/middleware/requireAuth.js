const User = require("../models/userModel")
const jwt = require("jsonwebtoken")


const requireAuth = async (req, res, next) => {

    // verify authentication...there's an authorization property in the request headers

   
     const {authorization} = req.headers
     
   
    if (!authorization) {
        res.status(404).json({error: 'Authorization token required'})
    }
    const token = authorization.split(" ")[1];
    
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id') // now will only return id property
        next()
    } catch(error) {
        console.log(error)
        res.status(401).json({error: "Request is not authorized"})
        
    }


}

module.exports = requireAuth;