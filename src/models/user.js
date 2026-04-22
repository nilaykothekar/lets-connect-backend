const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 35,
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female", "others"].includes(value.toLowerCase())) {
                throw new Error("Gender is not valid");
            }
        }
    },
    photoUrl: {
        type: String,
    },
    about: {
        type: String,
        default: "Hey there! I am using matrimony app."
    }
},
    {
        timestamps: true,
    });

const User = model("User", userSchema);

module.exports = { User };