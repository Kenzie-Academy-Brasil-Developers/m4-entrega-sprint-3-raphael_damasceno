import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  listAllCategoriesController,
  listCategoryByIdController,
  updateCategoryController,
} from "../controllers/category.controller";
import validateSchemaMiddleware from "../middlewares/validateCategory.middleware";
import validateIdCategoryMiddleware from "../middlewares/validateIdCategory.middleware";
import { createCategorySchema } from "../schemas/category.validate";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  validateSchemaMiddleware(createCategorySchema),
  createCategoryController
);
categoriesRoutes.get("", listAllCategoriesController);
categoriesRoutes.get("/:id", validateIdCategoryMiddleware, listCategoryByIdController);
categoriesRoutes.patch("/:id", validateIdCategoryMiddleware, updateCategoryController);
categoriesRoutes.delete("/:id", validateIdCategoryMiddleware, deleteCategoryController);

export default categoriesRoutes;
