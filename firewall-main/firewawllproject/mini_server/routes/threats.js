import express from "express";
const router=express.Router();
import Threat from "../models/threats.js";

router.get("/threats",async(req,res)=>
{       const threats=await Threat.find();
        const xssThreats=await Threat.find({threat_type:"xss"}).count();
        const valid=await Threat.find({threat_type:"valid"}).count();
        const paramter=await Threat.find({threat_type:"parameter-tampering"}).count();
        const cmdiThreats=await Threat.find({threat_type:"cmdi"}).count();
        const sqli=await Threat.find({threat_type:"sqli"}).count();
        const pathTraversl=await Threat.find({threat_type:"path-traversal"}).count();
        const data=
            [{name:"xssThreats",value:xssThreats},
            {name:"valid",value:valid},
            {name:"parmeters",value:paramter},
            {name:"cmdi",value:cmdiThreats},
            {name:"pathTraversl",value:pathTraversl},
            {name:"sqli",value:sqli},]
        ;

       
       



try{
    res.status(200).json({threats,data});
    
}
catch(err){
    res.json(err.message)
}
    

});

router.get("/reqlocations",async(req,res)=>{

    const requests=await Threat.find({location:"Request"}).count();
    const server=await Threat.find({location:"send to server"}).count();
    const body=await Threat.find({location:"Body"}).count();
    const data=
        [{name:"requests",value:requests},
        {name:"send to server",value:server},
        {name:"send to body",value:body}]
    ;

    res.status(200).json({data})







})

export default router;