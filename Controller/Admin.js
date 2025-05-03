import AdminModel from "../Model/Admin.js";
import bcrypt  from 'bcrypt'
import jwt  from 'jsonwebtoken'

export const registerAdmin = async (req, res) => {
    try {
      const { adminEmail, password } = req.body;
  
      if (!adminEmail || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const existingAdmin = await AdminModel.findOne({ adminEmail });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
      }
  
      const hashpass = await bcrypt.hash(password, 10);
  
      const Admin = await AdminModel.create({
        adminEmail,
        password: hashpass,
      });
  
      res.status(201).json({
        success: true,
        message: "New Admin created successfully",
        data: Admin,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to register Admin: " + error.message,
      });
    }
  };
  
export const loginAdmin = async (req,res) => {
    const {adminEmail,password} = req.body;
    try {
        const Admin = await AdminModel.findOne({ adminEmail})

      const isMatch = await bcrypt.compare(password, Admin.password);
          if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
          }
          const token = jwt.sign({ id: Admin._id }, "secret", { expiresIn: "1h" });
          
              res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}