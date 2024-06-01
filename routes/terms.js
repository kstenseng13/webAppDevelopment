const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    console.log("Terms");
    res.render('terms');
})

module.exports = router