import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import ExpressError from "./utils/expresserror.js";
import listingRoutes from "./routes/listing.js";
import userRoutes from "./routes/user.js";  
import flash from "connect-flash";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/user.js";
import reviewsRoutes from "./routes/review.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 8080;

const sessionoptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

app.use(express.json());
app.use(session(sessionoptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  console.log("Connecting to MongoDB...");
  console.log(process.env.ATLASDB_URL); 
  await mongoose.connect(process.env.ATLASDB_URL);
  console.log("MongoDB Connected!");
}

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// Configure Passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/listing/:id/reviews", reviewsRoutes);

app.use("/listing", listingRoutes);
app.use("/", userRoutes);

app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listing/error.ejs", { err });
  //res.status(statusCode).send(message);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
