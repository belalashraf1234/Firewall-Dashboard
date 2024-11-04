import mongoose from "mongoose";

const Schema = mongoose.Schema;


const logsSchema = new Schema(
  {
   _id:{type:String},
   timestamp:{type:Date},
   origin:{type:String},
   host:{type:String},
   methoh:{type:String},
  },
  
);

const Logs = mongoose.model("logs", logsSchema);

export default Logs;