const express = require("express");
const route = express.Router();
const data = [{
        id: 1,
        name: "prakash",
        city: "tirupur",
        age: "22",
    },

    {
        id: 1,
        name: "prakash",
        city: "tirupur",
        age: "22",
    },

    {
        id: 1,
        name: "prakash",
        city: "tirupur",
        age: "22",
    },

];
router.get("/", function(req, res, next) {
    res.json(data);
});

module.exports = route;