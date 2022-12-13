import { database } from "../../database";
import AppError from "../../errors/App.Error";
import { returnProductSchema } from "../../schemas/product.schema";

const listProductByIdService = async (id) => {
  const queryResponse = await database.query(
    ` 
    SELECT 
    *
    FROM 
    products
    WHERE 
    id = $1;`,
    [id]
  );

  if (queryResponse.rowCount === 0) {
    throw new AppError("Product not found", 404);
  }
  const validateProduct = await returnProductSchema.validate(
    queryResponse.rows[0]
  );
  return validateProduct;
};

export default listProductByIdService;
