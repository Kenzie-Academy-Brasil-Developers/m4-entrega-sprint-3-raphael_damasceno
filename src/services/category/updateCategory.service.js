import { database } from "../../database";
import AppError from "../../errors/App.Error";
import { returnCategoryCreatedSchema } from "../../schemas/category.validate";

const updateCategoryService = async (id, userdata) => {

  const findCategory = await database.query(
    `
        SELECT
            *
        FROM
            categories
        WHERE
            id = $1
          `,
    [id]
  );

  if(findCategory.rowCount === 0){
    throw new AppError("Category not found", 404)
  }

  const queryResponse = await database.query(
    `
    UPDATE 
        categories
    SET 
        name = $1
    WHERE 
        id = $2
    RETURNING *;
    `,
    [userdata.name, id]
  );
  if (!queryResponse.rows[0]) {
    return [404, { message: "Category not found :(" }];
  }

  const validate = await returnCategoryCreatedSchema.validate(queryResponse.rows[0])
  console.log(queryResponse.rows[0]);
  return validate;
};

export default updateCategoryService;
