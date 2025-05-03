import enquiryModel from "../Model/enquiry.js";
import nodemailer from 'nodemailer'
import { Dotenv } from "dotenv";
Dotenv.config()
const transporter = nodemailer.createTransport({
  service  : 'gmail',
  auth : {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
})
export const submitEnquiry = async (req , res) => {

    try {
        const { date , name , gender , dob , fatherName , motherName , college , address , phone1 , phone2 , email , enquiryFor , batchPreferred , comeToknow } = req.body;
        const data = await enquiryModel.create({
            date,
            name,
            gender,
            dob,
            fatherName,
            motherName,
            college,
            address,
            phone1,
            phone2,
            email,
            enquiryFor,
            batchPreferred,
            comeToknow
           
        });
        await data.save();
        const sendmessage = {
          from : 'sishpreet135@gmail',
          to : email,
          subject : "enquiry recieved",
          text :`hey ${name} , your enquiry recieved`
        };
        await transporter.sendMail(sendmessage);
       
        res.status(201).json({
            success: true,
            message: "Message sended",
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to send message: " + error.message,
    })
}
}

export const getAllenquiries = async ( req , res) =>{
    try {
      const enquiry = await enquiryModel.find().sort({Date : 1});
      res.status(201).json({
        success: true,
        message: "all enquiry getted",
        data: enquiry
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch: " + error.message,
      });
    }
}

