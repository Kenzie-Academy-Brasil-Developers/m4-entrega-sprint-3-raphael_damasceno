import listProductCategoryService from "../services/product.category.service";

const listProductCategoryController = async (req, res) => {
  const data = req.params.id;
  const listAll = await listProductCategoryService(data);
  return res.status(200).json(listAll);
};

export { listProductCategoryController };
