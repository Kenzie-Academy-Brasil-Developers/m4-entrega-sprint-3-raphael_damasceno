import { database } from "../../database";

const listAllProductsService = async () => {

  const queryResponse = await database.query(
    `
    SELECT 
        *
    FROM 
        products;
    `
  );

  return queryResponse.rows;
};

export default listAllProductsService;
