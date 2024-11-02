import express from "express" 
import { addtoCart , removeAllFromCart , updateQuantity , getCartProducts} from "../controllers/cart.controllers.js"
import { protectRoute } from "../middleware/auth.middleware";


const route = express.Router() 

// protected route adds user to the body 

route.get("/" ,protectRoute, getCartProducts ) ; 
route.post("/" ,protectRoute, addtoCart) ; 
route.delete("/" , protectRoute , removeAllFromCart) ; 
route.put("/:id" , protectRoute , updateQuantity) ; 



export default route ; 