import mongoose from "mongoose" 
import dotenv from "dotenv" 
dotenv.config()
export const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI) ; 
        console.log( "connected successfully mongoDB host : " ,connectionInstance.connection.host) ;
    } catch (error) {
        console.log("connection to database failed") ; 
        process.exit(1) ;
    }
}