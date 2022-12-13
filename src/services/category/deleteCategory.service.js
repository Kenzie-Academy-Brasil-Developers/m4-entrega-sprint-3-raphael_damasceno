import { database } from "../../database"
import AppError from "../../errors/App.Error";

const deleteCategoryService = async (id) => {
  
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
    
      if (!findCategory.rowCount > 0) {
        throw new AppError("Category not found", 404);
      }

    const queryResponse = database.query(
        `
        DELETE FROM 
            categories
        WHERE
            id = $1;
        `, 
        [id]
    )
    return {}
}

export default deleteCategoryService