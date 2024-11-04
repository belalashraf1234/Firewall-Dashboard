import express from "express";
import Location from "../models/location.js";
const router=express.Router();




router.get("/locations",async(req,res)=>
{    
    const data=await Location.find();
    
try{
    res.status(200).json(data);
   console.log(data);
}
catch(err){
    res.json(err.message)
}
    

})

export default router;