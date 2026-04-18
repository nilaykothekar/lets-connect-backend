const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
    const userObj = {
        firstName: "Sachin",
        lastName: "Tendulkar",
        email: "sachintendulkar@gmail.com",
        password: "Sachin@1234",
        age: 34,
        gender: "Male"
    };

    const user = new User(userObj);

    try {
        await user.save();
        res.send("User added successfully");
    } catch (error) {
        console.error("Error adding user:", error);
        return res.status(400).send("Bad Request");
    }
});

connectDB().then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
}).catch((error) => {
    console.log("Error for connecting to the database", error);
});

