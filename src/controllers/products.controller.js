import createProductService from "../services/product/createProducts.service";
import deleteProductsService from "../services/product/deleteProduct.service";
import listAllProductsService from "../services/product/listAllProducts.service";
import listProductByIdService from "../services/product/listProductById.service";
import updateProductsService from "../services/product/updateProducts.service";

const createProductController = async (req, res) => {
  const data = req.body;
  const product = await createProductService(data);
  return res.status(201).json(product);
};

const listAllProductsController = async (req, res) => {
  const listProducts = await listAllProductsService();
  return res.status(200).json(listProducts);
};

const listProductByIdController = async (req, res) => {
  const id = req.params.id;
  const product = await listProductByIdService(id);
  return res.status(200).json(product);
};

const updateProductsController = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const updateProduct = await updateProductsService(id, update);
  return res.status(200).json(updateProduct);
};

const deleteProductsController = async (req, res) => {
  const data = await deleteProductsService(req.params.id);
  return res.status(204).json(data);
};

export {
  createProductController,
  listAllProductsController,
  listProductByIdController,
  updateProductsController,
  deleteProductsController,
};
