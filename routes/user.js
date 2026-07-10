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



// Support routes
router.get("/helpcenter", userController.helpCenter);
router.get("/get-help-with-safety-issue", userController.getHelpWithSafetyIssue);
router.get("/aircover", userController.airCover);
router.get("/anti-discrimination", userController.antiDiscrimination);
router.get("/disability-support", userController.disabilitySupport);
router.get("/cancellation-options", userController.cancellationOptions);
router.get("/report-neighbourhood-concern", userController.reportNeighbourhoodConcern);

// Hosting routes
router.get("/host-your-home", userController.hostYourHome);
router.get("/host-an-experience", userController.hostAnExperience);
router.get("/host-a-service", userController.hostAService);
router.get("/aircover-for-hosts", userController.airCoverForHosts);
router.get("/hosting-resources", userController.hostingResources);
router.get("/community-forum", userController.communityForum);
router.get("/hosting-responsibly", userController.hostingResponsibly);
router.get("/join-hosting-class", userController.joinHostingClass);
router.get("/find-cohost", userController.findCohost);

// Wanderlust routes
router.get("/summer-release-2026", userController.summerRelease2026);
router.get("/newsroom", userController.newsroom);
router.get("/careers", userController.careers);
router.get("/investors", userController.investors);
router.get("/emergency-stays", userController.emergencyStays);

// Footer bottom routes
router.get("/privacy", userController.privacy);
router.get("/terms", userController.terms);
router.get("/company-details", userController.companyDetails);

export default router;
