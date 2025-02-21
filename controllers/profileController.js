import connectDB from "../config/db.js";
import User from "../models/user.js";

export const userProfile = async (req, res) => {
  try {
    connectDB();
    const user = await User.findById(req.user.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
