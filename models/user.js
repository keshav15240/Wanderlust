import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(passportLocalMongoose.default, {
  usernameLowerCase: true,
});

const User = mongoose.model("User", userSchema);

export default User;