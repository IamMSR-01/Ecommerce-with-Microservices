import { Request, Response } from "express";
import { prisma, Prisma } from "@repo/db";


export const createCategory = async (req: Request, res: Response) => {
    try {
        const data: Prisma.ProductCreateInput = req.body();

        const product = await prisma.product.create({ data });

        res.status(200).json(product);

    } catch (error: any) {
        console.log(error);
        return res.status(error.status || 500).json({ message: error.message || "Internal server eroor "})
    }
}


export const updateCategory = async (req: Request, res: Response) => {}


export const deleteCategory = async (req: Request, res: Response) => {}


export const getAllCategories = async (req: Request, res: Response) => {}

