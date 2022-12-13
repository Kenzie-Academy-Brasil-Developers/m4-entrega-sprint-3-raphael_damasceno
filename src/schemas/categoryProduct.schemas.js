import * as yup from "yup";

const categoryProductSchema = yup.object().shape({
    name: yup.string(),
    price: yup.number(),
    category: yup.string()
})

const listCategoryProductSchema = yup.array(categoryProductSchema)

export {categoryProductSchema,listCategoryProductSchema}