const express = require("express");
const burgerObj = require("../models/model")

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/burgers");
})

router.get("/burgers", (req, res) => {
    //data is a new variable that will reference "data" in the cb functions
    burgerObj.showBurgers(data => {
        console.log("SHOW BURGER DATA TEST: ", data);
        res.end();
    });
    
    // res.render("index");

});



module.exports = router;