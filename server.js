// Dependencies
// =============================================================
const express = require("express");
const mongoose = require("mongoose");

// Sets up the Express App

const app = express();
// ALWAYS check to see if the Port number is being used!!!
const PORT = process.env.PORT || 3050;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// Routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});