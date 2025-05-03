import express from 'express'
import {getAllenquiries, submitEnquiry} from "../Controller/enquiry.js"
const enquiryRouter = express.Router()

enquiryRouter.post("/add-enquiry",submitEnquiry)
enquiryRouter.get("/all-enquiries",getAllenquiries)
export default enquiryRouter