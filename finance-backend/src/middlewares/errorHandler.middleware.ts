import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError } from "../utils/app-error";

export const errorHandler: ErrorRequestHandler = (err, req, res, next): any => {
  console.log(`😡 Erreur est intervenue dans le chemin : ${req.path}`);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Erreur interne du serveur",
    error: err?.messsage || "Erreur inconnue",
  });
};
