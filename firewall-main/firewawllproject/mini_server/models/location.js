import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  _id: { type: String },
  Request: { type: String },
  Body: { type: String },
  Cookie: { type: String },
  User_Agent: { type: String },
  Accept_Encoding: { type: String },
  Accept_Language: { type: String },
});

const Location = mongoose.model("location", locationSchema);

export default Location;
