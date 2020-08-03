const express = require("express");
const burgerData = require("../models/model")

const router = express.Router();

router.get("/", (req, res) => {
    burgerData.showBurgers(data => {
        const burgerObj = {
            burger: data,
        }
        console.log("BURGER TEST: ", burgerObj)
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burgerData.insertBurgers(req.body, data => {
        if(!data.affectedRows) {
            res.status(500).end();
        }
        res.json({
            id: data.insertId
        });
    });
});


module.exports = router;