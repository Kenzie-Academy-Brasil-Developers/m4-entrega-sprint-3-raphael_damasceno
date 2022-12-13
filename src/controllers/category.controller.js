import createCategoryService from "../services/category/createCategory.service";
import deleteCategoryService from "../services/category/deleteCategory.service";
import listAllCategoriesService from "../services/category/listAllCategories.service";
import listCategoryByIdService from "../services/category/listCategoryById.service";
import updateCategoryService from "../services/category/updateCategory.service";

export const createCategoryController = async (req, res) => {
  const data = req.body;
  const category = await createCategoryService(data);
  return res.status(201).json(category);
};

export const listAllCategoriesController = async (req, res) => {
  const data = await listAllCategoriesService();
  return res.status(200).json(data);
};

export const listCategoryByIdController = async (req, res) => {
  const id = req.params.id;
  const category = await listCategoryByIdService(id);
  return res.status(200).json(category);
};

export const updateCategoryController = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const update = await updateCategoryService(id, data);
  return res.status(200).json(update);
};

export const deleteCategoryController = async (req, res) => {
  const data = await deleteCategoryService(req.params.id);
  return res.status(204).json(data);
};
