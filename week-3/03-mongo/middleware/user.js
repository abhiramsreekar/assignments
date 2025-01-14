const {User} = require('../db');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    await User.find({
        username:req.headers.username,
        password:req.headers.password
    })
    .then(function(data){
        if(data){
            next();
        }
        else{
            res.status(403).json({
                msg:"User not found"
            });
        }
    });
}

module.exports = userMiddleware;