import express from "express" 
import { addToCart , removeAllFromCart , updateQuantity , getCartProducts} from "../controllers/cart.controllers.js"
import { protectRoute } from "../middleware/auth.middleware.js";


const route = express.Router() 

// protected route adds user to the body 

route.get("/" ,protectRoute, getCartProducts ) ; 
route.post("/" ,protectRoute, addToCart) ; 
route.delete("/" , protectRoute , removeAllFromCart) ; 
route.put("/:id" , protectRoute , updateQuantity) ; 



export default route ; 