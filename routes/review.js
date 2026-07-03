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
    const errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errmsg);
  }
  next();
};

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
if (!listing) {
    req.flash("error", "Listing not found.");
    return res.redirect("/");
}
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New review added!");
    res.redirect(`/${listing._id}`);
  })
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });

    const review = await Review.findByIdAndDelete(reviewId);
if (!review) {
    req.flash("error", "Review not found.");
    return res.redirect(`/${id}`);
}
    req.flash("success", "Review deleted!");
    res.redirect(`/${id}`);
  })
);
export default router;