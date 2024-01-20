const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const {Admin,Course} = require('../db');

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    await Admin.create({
        username:req.body.username,
        password:req.body.password
    });

    res.json({
        msg:"Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const course = Course.create({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        imageLink:req.body.imageLink
    });

    res.json({
        msg:"Course added successfully",
        courseId: course._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const data = Course.findall({});

    res.json({
        courses:data
    })
});

module.exports = router;