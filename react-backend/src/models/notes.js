import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },
 
  userId: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" } }],
});
