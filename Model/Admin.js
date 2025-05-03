import mongoose from "mongoose"

const AdminSchema = new mongoose.Schema({
    adminEmail :{ type : String },
    password : { type : String},
})

const AdminModel = mongoose.model('register',AdminSchema);

export default AdminModel