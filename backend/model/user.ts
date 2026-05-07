import bcrypt from "bcryptjs";
import { Document } from "mongoose";
import { Schema, model, Model } from "mongoose";
import validator from "validator";

// Plain data interface — do NOT extend Document here (Mongoose handles that)
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

// Instance methods live in their own interface
interface IUserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Combined model type so model<>() is fully typed
type UserModel = Model<IUser, {}, IUserMethods>;

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email",
    },
  },
  // `select: false` means password is NEVER returned unless explicitly requested
  password: { type: String, required: true, select: false },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value: string) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },

  // for resetting password
  resetPasswordToken: { type: String, select: false },
  resetPasswordExpires: { type: Date, select: false },
});

// Hash password before saving (only when it has been modified)
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

// Instance method: compare a plain-text candidate against the stored hash
UserSchema.methods.comparePassword = function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = model<IUser, UserModel>("User", UserSchema);
