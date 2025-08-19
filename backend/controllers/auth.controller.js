import { User } from "../models/user.model.js";
//import { generateTokenAndSetCookie } from "../utils/auth.utils.js";
import bcryptjs from 'bcryptjs';


export const signup = async(req, res) => {
  const { username, email, password } = req.body;
 try {
    if(!email || !password || !username) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await user.findOne({ email });
    if(userAlreadyExists) {
      return res.status(400).json({ success:false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationcToken = Math.floor(100000 + Math.random() * 900000).toString(); 

    const user = new User ({
      email, 
      password: hashedPassword,
      username, 
      verificationcToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    });

    await user.save();

    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({ 
      success: true, 
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined, 
      }
    });
  
 } catch (error) {
  res.status(400).json({success: false, message: error.message});
 }
}

export const login = async(req, res) => {
  res.send("login Page");
}

export const logout = async(req, res) => {
  res.send("logout Page");
}