import { database } from "../database";
import AppError from "../errors/App.Error";

const validateIdProductsMiddleware = async (req, res, next) => {
  const id = req.params.id;
  if(id.length > 35) {

    const findId = await database.query(
      `
            SELECT 
                *
            FROM 
              products           
               WHERE 
                id = $1;
            `,
            [id]
    );
    console.log(findId.rows[0]);
    if (findId.rows.length) {
      return next();
    } else {
      throw new AppError("Product not found", 404);
    }
  }
  throw new AppError("Product not found", 404);
};

export default validateIdProductsMiddleware;
