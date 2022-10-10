import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
name: {type: String, required: true,},
email: {type: String, lowercase:true, unique:true, required: true,},
password: {type:String, required: true,},
img: {data: Buffer, contentType: String,},
notes:[{userId:{type:mongoose.Schema.Types.ObjectId, ref:'notes'},},],
});