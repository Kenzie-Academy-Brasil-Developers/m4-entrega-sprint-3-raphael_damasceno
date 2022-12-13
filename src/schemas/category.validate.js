import * as yup from "yup";

const createCategorySchema = yup.object().shape({
    name: yup.string().required()
})

const returnCategoryCreatedSchema = yup.object().shape({
    id: yup.number(),
    name: yup.string()
})

const listCategoriesSchema = yup.array(returnCategoryCreatedSchema)

export {createCategorySchema, returnCategoryCreatedSchema, listCategoriesSchema}