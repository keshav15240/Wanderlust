import express from "express";
import User from "../models/user.js";
import wrapAsync from "../utils/wrapAsync.js";
import passport from "passport";
import * as usercontroller from "../controllers/user.js";

const router = express.Router();

router.get("/logout", usercontroller.logout);

router.route("/signup")
  .get(usercontroller.showSignupForm)
  .post(wrapAsync(usercontroller.signup));

router.route("/login")
  .get(usercontroller.login)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usercontroller.loginSuccess
  );
export default router;