import { database } from "../../database";
import { listCategoriesSchema } from "../../schemas/category.validate";

const listAllCategoriesService = async () => {
  const queryResponse = await database.query(
    `
        SELECT 
            *
        FROM 
            categories;
    `
  );
  const listCategories = await listCategoriesSchema.validate(
    queryResponse.rows
  );
  return listCategories;
};

export default listAllCategoriesService;
