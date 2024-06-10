import mongoose, { model } from 'mongoose';

const Exam_User_Schema = new mongoose.Schema
({
    Username : String,
    Password:String,
    Email:String,
})

export const Exam_User = mongoose.model("User",Exam_User_Schema)