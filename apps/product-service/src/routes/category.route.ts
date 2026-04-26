import { Router, Request, Response } from 'express';


const router: Router = Router();

// Define your category routes here
router.get('/', (req: Request, res: Response) => {
    res.send('Get all categories');
});


export default router;