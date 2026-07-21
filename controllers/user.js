import User from "../models/user.js";

export const showSignupForm = (req, res) => {
  res.render("user/signup");
};

export const signup = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    const newUser = new User({
      email,
      username,
    });

    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);

      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

export const login = (req, res) => {
  res.render("user/login");
};

export const loginSuccess = (req, res) => {
  req.flash("success", "Welcome back to Wanderlust!");
  res.redirect("/");
};

export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.flash("success", "Logged out successfully.");
    res.redirect("/");
  });
};

export const helpCenter = (req, res) => {
  res.render("help/helpcenter");
};

// Support controllers
export const getHelpWithSafetyIssue = (req, res) => {
  res.render("help/get-help-with-safety-issue");
};

export const airCover = (req, res) => {
  res.render("hosts/aircover");
};

export const antiDiscrimination = (req, res) => {
  res.render("legal/anti-discrimination");
};

export const disabilitySupport = (req, res) => {
  res.render("help/disability-support");
};

export const cancellationOptions = (req, res) => {
  res.render("help/cancellation-options");
};

export const reportNeighbourhoodConcern = (req, res) => {
  res.render("help/report-neighbourhood-concern");
};

// Hosting controllers
export const hostYourHome = (req, res) => {
  res.render("hosts/host-your-home");
};

export const hostAnExperience = (req, res) => {
  res.render("hosts/host-an-experience");
};

export const hostAService = (req, res) => {
  res.render("hosts/host-a-service");
};

export const airCoverForHosts = (req, res) => {
  res.render("hosts/aircover-for-hosts");
};

export const hostingResources = (req, res) => {
  res.render("hosts/hosting-resources");
};

export const communityForum = (req, res) => {
  res.render("community/community-forum");
};

export const hostingResponsibly = (req, res) => {
  res.render("hosts/hosting-responsibly");
};

export const joinHostingClass = (req, res) => {
  res.render("hosts/join-hosting-class");
};

export const findCohost = (req, res) => {
  res.render("hosts/find-cohost");
};

// Wanderlust controllers
export const summerRelease2026 = (req, res) => {
  res.render("company/summer-release-2026");
};

export const newsroom = (req, res) => {
  res.render("company/newsroom");
};

export const careers = (req, res) => {
  res.render("company/careers");
};

export const investors = (req, res) => {
  res.render("company/investors");
};

export const emergencyStays = (req, res) => {
  res.render("help/emergency-stays");
};

// Footer bottom controllers
export const privacy = (req, res) => {
  res.render("legal/privacy");
};

export const terms = (req, res) => {
  res.render("legal/terms");
};

export const companyDetails = (req, res) => {
  res.render("company/company-details");
};
