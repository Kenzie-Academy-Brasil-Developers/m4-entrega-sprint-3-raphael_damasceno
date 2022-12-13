import AppError from "../errors/App.Error";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err.message);
  }
  console.error(err);
  return res.status(500).json({message: "Internal server error"}) 
};
