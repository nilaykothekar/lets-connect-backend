const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://nilaykothekar:Nilay%401234@matrimony-app.kotxnoi.mongodb.net/matrimony-app");
};

module.exports = { connectDB };
