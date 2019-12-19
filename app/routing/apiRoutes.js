const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/friends", (req, res) => {
    res.sendFile(path.join(__dirname, "../data/friends.json"));
});

router.post("/survey", (res, req) => {
    res.send;
});

module.exports = router;
