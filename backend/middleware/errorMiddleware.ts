import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errorHandler";

export const globalErrorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // Known operational errors (AppError): send a clean JSON response
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Unknown/programming errors: log and send a generic 500
  console.error("💥 Unexpected error:", err);

  const message =
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    typeof (err as { message?: unknown }).message === "string"
      ? (err as { message: string }).message
      : "Internal Server Error";

  const stack =
    typeof err === "object" && err !== null && "stack" in err
      ? (err as { stack?: unknown }).stack
      : undefined;

  res.status(500).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" && { stack }),
  });
};
