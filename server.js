const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// GET Route for feedback page
require('./routes/noteRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});