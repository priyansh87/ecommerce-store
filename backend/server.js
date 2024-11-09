import express from "express" 
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/products.route.js"
import cartRoutes from "./routes/cart.route.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import analyticsRoutes from "./routes/analytics.route.js"
import  cors from "cors"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
dotenv.config({
    path:"./.env"
}) ;
const app = express() ; 
const PORT = process.env.PORT || 5000 ;
app.use(cors({
  origin: "http://localhost:5173", // replace with your frontend URL
  credentials: true,
}));
app.use(express.json({limit:'10mb'})) // allows you to parse json
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use( express.static("public")) 
app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart" , cartRoutes)
app.use("/api/coupon" , couponRoutes)
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(PORT , ()=>{
    console.log("server running on http://localhost:" + 5000) ;
    connectDB() ;
})
