import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  confirmPassword: { type: String, required: true, select: false },

  // for resetting password
  resetPasswordToken: { type: String, select: false },
  resetPasswordExpires: { type: Date, select: false },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
});

export const User = model<User>("User", UserSchema);
