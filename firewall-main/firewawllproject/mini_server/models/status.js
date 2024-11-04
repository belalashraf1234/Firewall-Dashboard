import mongoose from "mongoose";

const Schema = mongoose.Schema;


const statusSchema = new Schema(
  {
  threats:
    {
        threat_type:{type:String},
        threats_count:{type:Number,default:0},

    }
  },
  
);

const status = mongoose.model("status", statusSchema);

export default status;