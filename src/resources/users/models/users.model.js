import bcrypt from "bcrypt";
import mongoose from "mongoose";

const SALT_WORK_FACTOR = 12;
const userSchema = new mongoose.Schema({
  usuario: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function validatePassword(
  password
) {
  return bcrypt.compare(password, this.password);
};

export const UserModel = new mongoose.model("User", userSchema);
