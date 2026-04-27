import { Router } from 'express';
import { 
    createCategory, 
    deleteCategory, 
    getAllCategories, 
    updateCategory 
} from '../controllers/category.controller';


const router: Router = Router();


router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/", getAllCategories);


export default router;