const express = require("express");
const { connectDB } = require("../config/database");

const app = express();

connectDB().then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
}).catch((error) => {
    console.log("Error for connecting to the database", error);
});

