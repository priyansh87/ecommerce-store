import express from "express";
import { Router } from "express";
import  { login, logout, signup , refreshtoken} from "../controllers/auth.controllers.js"
const router = Router() ; 

router.post("/signup" , signup)

router.post("/login" , login )

router.post("/logout" , logout)

router.post('/refresh-token' , refreshtoken) 

export default router ; 
