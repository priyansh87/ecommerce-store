import { Router } from "express";
import { getAllProducts , getFeaturedProducts , createProduct , deleteProduct, getRecommendedProducts ,getProductsByCategory ,toggleFeaturedProduct} from "../controllers/products.controller.js";
import { protectRoute , adminRoute } from "../middleware/auth.middleware.js"
const route = Router() ; 

route.get('/', protectRoute , adminRoute ,  getAllProducts);
route.get('/featured', getFeaturedProducts );
route.post('/create-product', protectRoute , adminRoute ,  createProduct);
route.delete('/:id', protectRoute , adminRoute ,  deleteProduct);
route.patch('/:id', protectRoute , adminRoute ,  toggleFeaturedProduct);
route.get("/recommendations" , getRecommendedProducts) ;
route.get("/category/:category" , getProductsByCategory) ; 



export default route ; 


