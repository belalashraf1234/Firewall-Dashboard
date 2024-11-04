import express from "express";
const router = express.Router();
import Threat from "../models/threats.js";
import Logs from "../models/logs.js";


router.get('/stats', async (req, res) => {
    const logs = await Logs.find({}).count();
    const gets = await Logs.find({ method: "GET" }).count();
    const posts = await Logs.find({ method: "POST" }).count();

    const postAvg = Math.round((posts / logs) * 100);
    const getAvg = Math.round((posts / logs) * 100);



    const threats = await Threat.find({}).count();
    const xssThreats = await Threat.find({ threat_type: "xss" }).count();
    const valid = await Threat.find({ threat_type: "valid" }).count();
    const paramter = await Threat.find({ threat_type: "parameter-tampering" }).count();
    const cmdiThreats = await Threat.find({ threat_type: "cmdi" }).count();
    const sqli = await Threat.find({ threat_type: "sqli" }).count();
    const pathTraversl = await Threat.find({ threat_type: "path-traversal" }).count();

    const xssAvg = Math.round((xssThreats / threats) * 100);
    const validAvg = Math.round((valid / threats) * 100);
    const paramterAvg = Math.round((paramter / threats) * 100);
    const cmdiAvg = Math.round((cmdiThreats / threats) * 100);
    const sqliAvg = Math.round((sqli / threats) * 100);
    const pathAvg = Math.round((pathTraversl / threats) * 100);


    const requests = await Threat.find({ location: "Request" }).count();
    const server = await Threat.find({ location: "send to server" }).count();
    const body = await Threat.find({ location: "Body" }).count();

    const requestAvg = Math.round((requests / threats) * 100);
    const serverAvg = Math.round((server / threats) * 100);
    const bodyAvg = Math.round((body / threats) * 100);

    


    const data = [

            { name: "cmdiAvg", value: cmdiAvg },
            { name: "validAvg", value: validAvg },
             { name: "xssAvg", value: xssAvg },
            { name: "paramterAvg", value: paramterAvg },
            { name: "sqliAvg", value: sqliAvg },
            { name: "pathAvg", value: pathAvg }
        ];



    
    

try{
    res.status(200).json(data);
}
catch(err){
    res.status(400).json(err.data);
}


})



export default router;