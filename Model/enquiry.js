import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    date: { type : String },
    name: { type : String},
    gender: { type : String},
    dob: { type : String},
    fatherName: { type : String},
    motherName: {type :String},
    college: { type : String},
    address: { type : String},
    phone1: { type : String},
    phone2: { type : String},
    email: { type : String},
    enquiryFor: { type : String},
    batchPreferred: { type : String},
    comeToknow:{ type : String}
})

const enquiryModel = mongoose.model('Enquiry',enquirySchema)

export default enquiryModel