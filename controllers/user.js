import User from "../models/user.js";

export const signup = async (req, res, next) => {
  try {
    let { email, username, password } = req.body;

    const newuser = new User({ email, username });

    const registeredUser = await User.register(newuser, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);

      req.flash("success", "Welcome to Wanderlust");
      res.redirect("/listing");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.flash("success", "Logged out successfully");
    res.redirect("/listing");
  });
};

export const login = (req, res) => {
  res.render("user/login.ejs");
};

export const loginSuccess = (req, res) => {
  req.flash("success", "Welcome back to Wanderlust");
  res.redirect("/listing");
};

export const showSignupForm = (req, res) => {
  res.render("user/signup.ejs");
};