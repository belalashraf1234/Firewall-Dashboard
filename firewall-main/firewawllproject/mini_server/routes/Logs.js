import express from "express";
const router=express.Router();
import Logs from "../models/logs.js";

router.get("/logs",async(req,res)=>
{       const data=await Logs.find();
        const post=await Logs.find({method: "POST"}).count();
        const get=await Logs.find({method: "GET"}).count();
        const postTime=await Logs.find({method: "POST"});

       
        
        const logs=[

            {name:"post",value:post},
            {name:"gets",value:get},
        ];
    
try{
    res.status(200).json({data,logs});
    console.log(data);
}
catch(err){
    res.json(err.message)
}
    

})

export default router;