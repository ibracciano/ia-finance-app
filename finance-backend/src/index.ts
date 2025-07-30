import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { Env } from "./config/env.config";
import cors from "cors";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import {
  BadRequestException,
  InternalServerException,
} from "./utils/app-error";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";

const app = express();
const BASE_PATH = Env.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.get(
  "/",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    // throw new InternalServerException("Erreur Test", "INTERNAL_SERVER_ERROR");

    res.status(HTTPSTATUS.OK).json({
      message: "Bienvenue dans notre api backend",
      //   version: Env.VERSION,
    });
  })
);

app.use(errorHandler);

app.listen(Env.PORT, () => {
  console.log(`Serveur demarre au port ${Env.PORT} en mode ${Env.NODE_ENV}`);
});
