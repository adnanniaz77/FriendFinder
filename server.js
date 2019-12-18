const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there,");
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
