import express, {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";
import router from "./routes/index"
import { ApiError, InternalError } from "./core/ApiError";
import logger from "./config/logger";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(router)

app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.info("Route accessed:", {
    method: req.method,
    path: req.path,
    params: req.params,
    query: req.query,
    body: req.body,
    headers: req.headers,
  });
  next();
});
// 
app.get("/", (_req, res) => {
  res.send("API running!");
});

app.use(((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (!(err instanceof ApiError)) {
    const internalError = new InternalError("INTERNAL_ERROR", err.message, {
      originalError: {
        name: err.name,
        message: err.message,
      },
    });
    return ApiError.handle(internalError, res);
  }
  return ApiError.handle(err, res);
}) as ErrorRequestHandler);

app.use((req, res) => {
  logger.error("Route not found:", req.method, req.path);
  res.status(404).json({ message: "Route not found" });
});

