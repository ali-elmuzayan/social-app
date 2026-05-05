import express from "express";
import authRoutes from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./middleware/errorMiddleware";

export const createApp = () => {
  const app = express();

  // Middleware setup
  app.use(express.json());
  app.use(cookieParser());

  // Routes
  app.use("/api/v1/auth", authRoutes);

  // Global error middleware (must come after routes)
  app.use(globalErrorHandler);

  return app;
};
