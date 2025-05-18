import express from "express";
import dontenv from "dotenv";
import {connectDB} from "./config/db.js";


const app = express();
dontenv.config();




app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
