const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

const apiRoutes = require("./app/routing/apiRoutes.js");
app.use("/", apiRoutes);

const publicHome = require("./app/routing/htmlRoutes.js");
app.use("/", publicHome);

const publicSurvey = require("./app/routing/htmlRoutes");

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
