import mongoose from "mongoose";

const Schema = mongoose.Schema;


const threatSchema = new Schema(
  {
   _id:{type:String},
   threat_type:{type:String},
   location:{type:String},
   threateCounts:{type:String}
  },
  
);

const Threat = mongoose.model("threats", threatSchema);

export default Threat;