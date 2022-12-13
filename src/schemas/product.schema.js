import * as yup from "yup";

const createProductsSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.number().required(),
});

const returnProductSchema = yup.object().shape({
  id: yup.string().default(() => v4()),
  name: yup.string(),
  price: yup.number(),
  category_id: yup.number(),
});

const listProductsSchema = yup.array(returnProductSchema);

export { createProductsSchema, returnProductSchema, listProductsSchema };
