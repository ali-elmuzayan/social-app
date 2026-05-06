import express from "express";
import authRoutes from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import cors from "cors";
import { globalErrorHandler } from "./middleware/errorMiddleware";

export const createApp = () => {
  const app = express();

  // Middleware setup
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true, // allow credentials (cookies)
    }),
  );

  // Routes
  app.use("/api/v1/auth", authRoutes);

  // Global error middleware (must come after routes)
  app.use(globalErrorHandler);

  return app;
};
