import AppError from "../../errors/App.Error";
import { database } from "../../database";
import { returnProductSchema } from "../../schemas/product.schema";

const createProductService = async (productData) => {
  const findProduct = await database.query(
    `
    SELECT 
      *
    FROM
      products
    WHERE 
      name = $1
    `,
    [productData.name]
  );

  if (findProduct.rowCount > 0) {
    throw new AppError("Product already exists", 400);
  }

  const queryResponse = await database.query(
    `
    INSERT INTO 
        products (name, price, category_id)
    VALUES
        ($1, $2, $3)
    RETURNING *;
    `,
    [productData.name, productData.price, productData.category_id]
  );

  const productValidate = await returnProductSchema.validate(
    queryResponse.rows[0]
  );

  return productValidate;
};

export default createProductService;