import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  // Handle user registration logic here
  res.send("User registered successfully");
});

router.post("/login", (req, res) => {
  // Handle user login logic here
  res.send("User logged in successfully");
});

export default router;
