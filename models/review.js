import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 200,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;