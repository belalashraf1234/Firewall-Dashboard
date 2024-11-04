import express, { Router } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import logsrouter from "./routes/Logs.js"
import threateRouter from "./routes/threats.js"
import statusRouter from "./routes/stats.js"
import ResponsRouter from "./routes/location.js"

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use("/log",logsrouter);
app.use("/threat",threateRouter);
app.use("/state",statusRouter);
app.use("/location",ResponsRouter);





/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;
mongoose
  .connect("mongodb+srv://MohamedAshour:Mohamed1234@cluster0.kzdaicu.mongodb.net/Web_Application_Firewall", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
   
   
   

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
     //KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));
