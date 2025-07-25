import User from "../model/User.js";
import bcrypt from "bcryptjs";

import UserModel from "../model/User.js";

const updateUserController = async (req, res) => {
  try {
      const { email, firstName, lastName, phoneNumber } = req.body;

      if (!email || !firstName || !lastName || !phoneNumber) {
          return res.status(400).json({
              success: false,
              message: "All fields are required"
          });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          return res.status(400).json({
              success: false,
              message: "Invalid email format"
          });
      }

      if (!req.user?.userId) {
          return res.status(401).json({
              success: false,
              message: "Unauthorized: User ID is required"
          });
      }

      const user = await UserModel.findById(req.user.userId);
      if (!user) {
          return res.status(404).json({
              success: false,
              message: "User not found"
          });
      }

      // Update user details
      user.email = email;
      user.firstName = firstName;
      user.lastName = lastName;
      user.phoneNumber = phoneNumber;
      await user.save();

      // Generate new JWT
      const token = await user.createJwt();

      res.status(200).json({
          success: true,
          message: "User updated successfully",
          user,
          token
      });
  } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({
          success: false,
          message: "Internal Server Error",
          error: error.message
      });
  }
};

export default updateUserController;


export const  getUserController = async(req ,res)=>{
    
  try {
    // Use the userId from the decoded JWT
    const user = await User.findById(req.user.userId).select('-password'); // Exclude password from the response

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};


