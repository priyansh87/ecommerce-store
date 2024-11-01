import Product from "../models/products.model.js"
import { redis } from  "../lib/redis.js"
import cloudinary from "../lib/cloudinary.js";

// this is for the admin only as only the admin should be able to see the all the listed products 
export const getAllProducts = async(req , res )=>{
    try {
        const products = Product.find({}) ; 
        res.status(200).json({products}) ;
    } catch (error) {
        console.log("error in get all products controller " , error.message) ; 
        res.status(500).json({message:"Server error" , error : error.message}) ;
    }
}

// since this featured product will be accessed by everyone it should be saved on redis and mongodb both 
export const getFeaturedProducts = async (req ,res )=>{
    try {
        let featuredProducts = await redis.get("featured_products") ; 
        if(featuredProducts){
            return res.json(JSON.parse(featuredProducts)) ;
        }

        // if not in redis then we have to fetch it from mongo db
        // .lean() is going to return a plain java script object instead of a mongodb document  
        // which is good for performance 
        featuredProducts = await Product.find({isFeatured: true}).lean() ;
        if(!featuredProducts) return res.status(404).json({message : "no featured products found "}) ;

        // store the products in redis for future quick access : 
        await redis.set("featured_products" , JSON.stringify(featuredProducts)) ; 
        res.json(featuredProducts)
    } catch (error) {
        console.log("error in getfeatured products controller " , error.message ) ;
        res.status(401).json({message : "server error "}) ;
    }
}



export const createProduct = async (req, res) => {
	try {
		const { name, description, price, image, category } = req.body;

		let cloudinaryResponse = null;

		if (image) {
			cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
		}

		const product = await Product.create({
			name,
			description,
			price,
			image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
			category,
		});

		res.status(201).json(product);
	} catch (error) {
		console.log("Error in createProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

// delete product from database and image from cloudinary as well 
export const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		if (product.image) {
			const publicId = product.image.split("/").pop().split(".")[0];
			try {
				await cloudinary.uploader.destroy(`products/${publicId}`);
				console.log("deleted image from cloduinary");
			} catch (error) {
				console.log("error deleting image from cloduinary", error);
			}
		}

		await Product.findByIdAndDelete(req.params.id);

		res.json({ message: "Product deleted successfully" });
	} catch (error) {
		console.log("Error in deleteProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};