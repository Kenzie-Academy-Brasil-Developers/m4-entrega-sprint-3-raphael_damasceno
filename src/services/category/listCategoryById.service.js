import { database } from "../../database";
import { returnCategoryCreatedSchema } from "../../schemas/category.validate";

const listCategoryByIdService = async (id) => {
  const queryResponse = await database.query(
    `
    SELECT 
    *
    FROM 
    categories
    WHERE 
    id = $1;
    `,
    [id]
  );

  const validate = await returnCategoryCreatedSchema.validate(
    queryResponse.rows[0]
  );
  console.log(validate);
  return validate;
};

export default listCategoryByIdService;
