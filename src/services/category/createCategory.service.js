import AppError from "../../errors/App.Error";
import { database } from "../../database";
import { returnCategoryCreatedSchema } from "../../schemas/category.validate";

const createCategoryService = async (dataCategory) => {
  const findCategory = await database.query(
    `
     SELECT 
        *
     FROM 
        categories
      WHERE 
        name = $1
    `,
    [dataCategory.name]
  );

  if (findCategory.rowCount > 0) {
    throw new AppError("Category already exists", 400);
  }

  const queryResponse = await database.query(
    `
    INSERT INTO
      categories (name)
    VALUES
      ($1)
    RETURNING *;
    `,
    [dataCategory.name]
  );

  const validate = await returnCategoryCreatedSchema.validate(
    queryResponse.rows[0]
  );

  return validate;
};

export default createCategoryService;