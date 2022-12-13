import AppError from "../../errors/App.Error";
import { database } from "../../database";
import { returnProductSchema } from "../../schemas/product.schema";

const updateProductsService = async (id, update) => {
  try {
    let query = `UPDATE products SET `;
    const keys = Object.keys(update);
    const values = Object.values(update);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const queryResponse = await database.query(query, [...values, id]);
    if (queryResponse.rowCount === 0) {
      throw new AppError("Product not found", 404);
    }

    console.log(queryResponse.rows[0]);
    const productValidate = await returnProductSchema.validate(
      queryResponse.rows[0]
    );
    return productValidate;
  } catch (error) {
    throw new AppError(error);
  }
};

export default updateProductsService;
