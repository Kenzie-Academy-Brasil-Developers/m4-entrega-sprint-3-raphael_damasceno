import { database } from "../database";
import AppError from "../errors/App.Error";

const validateIdCategoryMiddleware = async (req, res, next) => {
  const id = req.params.id;
  if (id == +id) {
    console.log(id);

    const findId = await database.query(
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
    console.log(findId.rows[0]);
    if (findId.rows.length) {
      return next();
    } else {
      throw new AppError("Category not found", 404);
    }
  }
  throw new AppError("Category not found", 404);
};

export default validateIdCategoryMiddleware;
