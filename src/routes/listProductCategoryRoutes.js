import { Router } from "express";
import { listProductCategoryController } from "../controllers/product.category.controller";

const listProductCategoryRoutes = Router();

listProductCategoryRoutes.get("/:id", listProductCategoryController);

export default listProductCategoryRoutes;
