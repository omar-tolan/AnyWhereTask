import connectDB from "./config/db";
import path from "path";
import logger from "./config/logger";
import dotenv from "dotenv";
import {app} from "./app";

const startServer = async () => {
  dotenv.config({ path: path.join(__dirname, "..", "dev.env") });
  await connectDB();

  const port = Number(process.env.PORT) || 5000;

  app.listen(port, "0.0.0.0", () => {
    logger.info(`Server is listening at http://0.0.0.0:${port}`);
  });

  process.on("uncaughtException", (err) => {
    logger.error("Uncaught Exception:", err);
  });

  process.on("unhandledRejection", (reason) => {
    logger.error("Unhandled Rejection:", reason);
  });
};

startServer().catch((error) => {
  logger.error("Failed to start server: ", error);
  process.exit(1);
});
