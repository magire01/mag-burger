const express = require("express");
const burgerData = require("../models/model")

const router = express.Router();

router.get("/", (req, res) => {
    burgerData.showBurgers(data => {
        console.log("PreDevour Test: ", data);
        const burgerObj = {
            burger: data,
        }
        console.log("BURGER TEST: ", burgerObj)
        res.render("index", burgerObj);
    });
});

// router.get("/", (req, res) => {
//     burgerData.filterDev(data => {
//         console.log("SHOW BURGER DATA TEST: ", data);
//         const burgerObjDev = {
//             burgerDev: data
//         }
//         console.log("BURGER TEST: ", burgerObjDev)
//         res.render("index", burgerObjDev)
//     });
// })

router.get("/burgers", (req, res) => {
    //data is a new variable that will reference "data" in the cb functions
    

});



module.exports = router;