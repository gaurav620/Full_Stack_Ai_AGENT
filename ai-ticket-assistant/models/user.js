import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String,rqquired: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: "user",enum: ["user",
        "moderator", "admin"]},
    skills:[String],
    createAt: {type: Date, default: Date.now},   
});

export default mongoose.model("User", userSchema);