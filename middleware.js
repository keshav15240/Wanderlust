import Review from "./models/review.js";
import Listing from "./models/listing.js";
export const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in first!");
        return res.redirect("/login");
    }
    next();
};
export const isReviewAuthor = async (req, res, next) => {
    let { reviewId, id } = req.params;

    const review = await Review.findById(reviewId);

    if (!review) {
        req.flash("error", "Review not found.");
        return res.redirect(`/listing/${id}`);
    }

    if (!review.author || !review.author.equals(req.user._id)) {
        req.flash("error", "You are not authorized to delete this review.");
        return res.redirect(`/listing/${id}`);
    }

    next();
};
export const isOwner = async (req, res, next) => {
    let { id } = req.params;

    console.log("isOwner middleware called");

    const listing = await Listing.findById(id);

    console.log("Listing owner:", listing.owner);
    console.log("Current user:", req.user._id);

    if (!listing.owner || !listing.owner.equals(req.user._id)) {
        console.log("Not owner");
        req.flash("error", "You are not the owner of this listing.");
        return res.redirect(`/listing/${id}`);
    }

    console.log("Owner verified");
    next();
};