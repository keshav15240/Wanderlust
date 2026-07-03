import express from "express";
import passport from "passport";

import wrapAsync from "../utils/wrapAsync.js";
import * as userController from "../controllers/user.js";

const router = express.Router();

router.get("/logout", userController.logout);

router
  .route("/signup")
  .get(userController.showSignupForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.login)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginSuccess
  );

export default router;