import express from "express" 
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/products.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
dotenv.config({
    path:"./.env"
}) ;
const app = express() ; 
const PORT = process.env.PORT || 5000 ;
app.use(express.json()) // allows you to parse json
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)

app.listen(PORT , ()=>{
    console.log("server running on http://localhost:" + 5000) ;
    connectDB() ;
})
