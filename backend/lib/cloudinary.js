import { v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv" 
import fs from 'fs'
dotenv.config() 

    // CLOUDINARY_CLOUD_NAME
    // CLOUDINARY_API_KEY_SECRET 
    // CLOUDINARY_API_KEY

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET,

})
const uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log("upload clodinary called ")
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: "products" ,
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}
export default uploadOnCloudinary ; 