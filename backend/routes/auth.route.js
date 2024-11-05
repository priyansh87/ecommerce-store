import express from "express";
import { Router } from "express";
import  { login, logout, signup , refreshtoken , getProfile} from "../controllers/auth.controllers.js"
import { protectRoute } from "../middleware/auth.middleware.js"
const router = Router() ; 

router.post("/signup" , signup)

router.post("/login" , login )

router.post("/logout" , logout)

router.post('/refresh-token' , refreshtoken) 

router.get("/profile", protectRoute, getProfile);

export default router ; 
