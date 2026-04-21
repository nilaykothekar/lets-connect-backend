const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.use(express.json());

// Sign Up API
app.post("/signup", async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send("User added successfully");
    } catch (error) {
        console.error("Error adding user:", error);
        return res.status(400).send("Bad Request");
    }
});

// Feed API
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(400).send("Bad Request");
    }
});

// Delete User API
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send("User deleted successfully");
    } catch (error) {
        res.status(400).send("Bad Request");
    }
});

// Update the data of user 
app.patch("/user", async (req, res) => {
    const { userId, ...updateData } = req.body;

    try {
        const user = await User.findByIdAndUpdate(userId, updateData, { returnDocument: "after" });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user); // return updated user
    } catch (error) {
        console.error(error);
        res.status(400).send("Bad Request");
    }
});


// Database connection and server start
connectDB().then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
}).catch((error) => {
    console.log("Error for connecting to the database", error);
});

