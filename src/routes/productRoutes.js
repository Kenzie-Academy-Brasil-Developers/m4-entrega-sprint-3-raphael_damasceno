import { Router } from "express";
import {
  createProductController,
  deleteProductsController,
  listAllProductsController,
  listProductByIdController,
  updateProductsController,
} from "../controllers/products.controller";
import validateSchemaMiddleware from "../middlewares/validateCategory.middleware";
import validateIdProductsMiddleware from "../middlewares/validateIdProduct.middleware ";
import { createProductsSchema } from "../schemas/product.schema";

const productsRoutes = Router();

productsRoutes.post(
  "",
  validateSchemaMiddleware(createProductsSchema),
  createProductController
);
productsRoutes.get("", listAllProductsController);
productsRoutes.get(
  "/:id",
  validateIdProductsMiddleware,
  listProductByIdController
);
productsRoutes.patch(
  "/:id",
  validateIdProductsMiddleware,
  updateProductsController
);
productsRoutes.delete(
  "/:id",
  validateIdProductsMiddleware,
  deleteProductsController
);

export default productsRoutes;
