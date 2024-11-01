import { Router } from "express";
import { getAllProducts , getFeaturedProducts , createProducts , deleteProduct} from "../controllers/products.controller.js";
import { protectRoute , adminRoute } from "../middleware/auth.middleware.js"
const route = Router() ; 

route.get('/', protectRoute , adminRoute ,  getAllProducts);
route.get('/featured', getFeaturedProducts );
route.post('/create-product', protectRoute , adminRoute ,  createProducts);
route.post('/:id', protectRoute , adminRoute ,  deleteProduct);



export default route ; 


