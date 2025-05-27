import express from "express";
import { dbconnection } from "./database.js";
import cors from "cors";  
import enquiryRouter from "./Routes/enquiry.js";
import adminRouter from "./Routes/Admin.js";
const port = 5000;
const server = express();
server.use(cors({
  origin:["http://localhost:5173/","https://sparkling-snickerdoodle-1cff85.netlify.app/"
  ],
  credentials:true
}))
server.use(express.json())

server.use("/api",enquiryRouter)
server.use("/api",adminRouter)
dbconnection()
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });