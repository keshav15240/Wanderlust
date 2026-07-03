import mongoose from "mongoose";
import Review from "./review.js";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      url: {
        type: String,
        required: true,
      },
      filename: {
        type: String,
        required: true,
      },
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    amenities: {
      type: [String],
      default: [
        "Garden View",
        "Beach Access",
        "Kitchen",
        "WiFi",
        "Dedicated Workspace",
        "Free Parking",
        "Swimming Pool",
        "Exterior Security Cameras",
        "Carbon Monoxide Alarm",
        "Smoke Alarm",
        "Air Conditioning",
        "Hot Water",
        "TV",
        "Washing Machine",
        "Iron",
        "Hair Dryer",
        "Microwave",
        "Refrigerator",
        "Coffee Maker",
        "Balcony",
      ],
    },

    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

listingSchema.index({
  location: 1,
  country: 1,
});

listingSchema.post("findOneAndDelete", async function (doc) {
  if (!doc) return;

  await Review.deleteMany({
    _id: {
      $in: doc.reviews,
    },
  });
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;