import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import { userProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/", verifyToken, userProfile);

export default router; // ✅ Use ES6 export
