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

router.put("/api/burgers/:id", (req, res) => {
    console.log("id test", req)
    const burgerId = req.params;
    console.log("burger ID test", burgerId);
    burgerData.updateBurgers({ devoured: 1 }, id = burgerId, data => {
        if (!data.changedRows) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;