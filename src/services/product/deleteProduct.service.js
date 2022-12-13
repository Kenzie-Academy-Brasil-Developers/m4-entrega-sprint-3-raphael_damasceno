import { database } from "../../database";
import AppError from "../../errors/App.Error";

const deleteProductsService = async (id) => {
  const findCategory = await database.query(
    `
     SELECT 
        *
     FROM 
        products
      WHERE 
        id = $1
    `,
    [id]
  );

  if (!findCategory.rowCount > 0) {
    throw new AppError("Category not found", 404);
  }

  const queryResponse = await database.query(
    `
    DELETE FROM 
    products
    WHERE 
    id = $1;
    `,
    [id]
  );

  return {};
};

export default deleteProductsService;
