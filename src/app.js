import "dotenv/config";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import categoriesRoutes from "./routes/categoriesRoutes";
import listProductCategoryRoutes from "./routes/listProductCategoryRoutes";
import productsRoutes from "./routes/productRoutes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/products/category", listProductCategoryRoutes);

app.use(errorHandler);

export default app;
