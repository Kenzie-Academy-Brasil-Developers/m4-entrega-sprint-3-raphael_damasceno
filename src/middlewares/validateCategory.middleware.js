const validateSchemaMiddleware = (schema) => async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
  
      req.validatedBody = validatedBody;
  
      return next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };
  
  export default validateSchemaMiddleware