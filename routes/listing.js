import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import ExpressError from "../utils/expresserror.js";
import { isLoggedIn , isOwner} from "../middleware.js";
import {listingSchema}  from "../schema.js";
import * as listingcontroller from "../controllers/listing.js";
import { storage } from "../cloudconfig.js";
import multer from "multer";
const router = express.Router();
const upload = multer({ storage });
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errmsg);
  }

  next();
};

router.get("/new", isLoggedIn, listingcontroller.showNewForm);

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingcontroller.showEditForm)
);

router
  .route("/")
  .get(wrapAsync(listingcontroller.index))
  .post(
    isLoggedIn,
    upload.single("image"),
    validateListing,
    wrapAsync(listingcontroller.createListing)
  );

router
  .route("/:id")
  .get(wrapAsync(listingcontroller.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    validateListing,
    wrapAsync(listingcontroller.updateListing)
  )
  .delete(isLoggedIn, isOwner ,wrapAsync(listingcontroller.deleteListing));

export default router;