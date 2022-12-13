import AppError from "../errors/App.Error";
import { database } from "../database";
import { listCategoryProductSchema } from "../schemas/categoryProduct.schemas";

const listProductCategoryService = async (id) => {
  const findProductCategories = await database.query(
    `SELECT 
        *
    FROM 
        categories
    WHERE 
        id = $1;
    `,
    [id]
  );

  if (findProductCategories.rowCount === 0) {
    throw new AppError("Category not found", 404);
  }

  const queryResponse = await database.query(
    `
    SELECT 
        p."name",
        p.price,
        c."name" category
    FROM 
        categories c
    JOIN
        products p on c.id = p.category_id
    WHERE 
        p.category_id = $1;
    `,
    [id]
  );
  console.log(queryResponse.rows);
  const listAllProductsByCategory = await listCategoryProductSchema.validate(
    queryResponse.rows
  );

  return listAllProductsByCategory;
};

export default listProductCategoryService;
