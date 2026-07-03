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