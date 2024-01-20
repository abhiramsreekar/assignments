const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {User,Courses} = require('../db')

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    await User.create({
        username:req.body.username,
        password:req.body.password
    });

    res.json({
        msg:"User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const data= await Courses.findAll({});
    res.json({
        data
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router