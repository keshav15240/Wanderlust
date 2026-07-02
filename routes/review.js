import express from "express";
const router = express.Router({ mergeParams: true });

import Listing from "../models/listing.js";
import Review from "../models/review.js";
import wrapAsync from "../utils/wrapAsync.js";
import ExpressError from "../utils/expresserror.js";
import { reviewSchema } from "../schema.js";
import { isLoggedIn, isReviewAuthor } from "../middleware.js";

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errmsg);
  }

  next();
};

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {

    console.log("===== REVIEW ROUTE HIT =====");
    console.log(req.params);
    console.log(req.body);
    console.log(req.user);

    let listing = await Listing.findById(req.params.id);

    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("review sabed")
    req.flash("success", "New review added!");
    res.redirect(`/listing/${listing._id}`);
  })
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });

    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted!");
    res.redirect(`/listing/${id}`);
  })
);

export default router;