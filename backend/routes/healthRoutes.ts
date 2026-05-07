import { Router, Request, Response } from "express";
import { time } from "node:console";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "OK",
    service: "social-app server",
    timestamp: new Date().toISOString(),
  });
});

export default router;
