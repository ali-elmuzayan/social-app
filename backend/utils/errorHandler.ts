import { Request, Response, NextFunction } from "express";

// Typed operational error – anything thrown with this will be handled gracefully
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Wraps async route handlers so thrown errors reach the global error middleware
export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>,
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
