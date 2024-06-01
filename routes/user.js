const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    console.log("User");
    res.render('user');
})

router.get('/editMenu', (req, res) => {
    res.render('editMenu');
})

module.exports = router