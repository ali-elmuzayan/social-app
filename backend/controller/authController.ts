import { Request, Response } from "express";
import { User } from "../model/user";
import { catchAsync, AppError } from "../utils/errorHandler";
import { generateAuthToken, setAuthCookie } from "../services/authService";

// ─── Signup ──────────────────────────────────────────────────────────────────

export const signup = catchAsync(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new AppError("username, email, and password are required", 400);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError("An account with that email already exists", 400);
  }

  const user = new User({ username, email, password });
  await user.save(); // bcrypt hashing happens in the pre-save hook

  const token = generateAuthToken(user._id);
  setAuthCookie(res, token);

  res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: {
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    },
  });
});

// ─── Login ───────────────────────────────────────────────────────────────────

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  // Explicitly select password because it has `select: false` on the schema
  const user = await User.findOne({ email }).select("+password");

  // Use the same vague message for both "not found" and "wrong password"
  // to avoid leaking which emails are registered
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateAuthToken(user._id);
  setAuthCookie(res, token);

  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    data: {
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    },
  });
});

// ─── Logout ──────────────────────────────────────────────────────────────────

export const logout = catchAsync(async (_req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
});
