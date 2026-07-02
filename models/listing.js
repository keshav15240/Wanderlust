import mongoose from "mongoose";
import Review from "./review.js";

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  image: {
    url: String,
    filename: String,
  },

  price: Number,

  location: String,

  country: String,

  // NEW
  amenities: [
    {
      type: String,
    },
  ],

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;