import "dotenv/config";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import flash from "connect-flash";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import ExpressError from "./utils/expresserror.js";
import listingRoutes from "./routes/listing.js";
import userRoutes from "./routes/user.js";
import reviewsRoutes from "./routes/review.js";
import User from "./models/user.js";
import MongoStore from "connect-mongo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// ======================
// Database Connection
// ======================
mongoose.set("strictQuery", true);

async function connectDB() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.ATLASDB_URL, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
    process.exit(1);
  }
}
connectDB();

// ======================
// Session Configuration
// ======================
const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.error("Mongo Session Store Error:", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
};

// ======================
// View Engine
// ======================
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================
// Middlewares
// ======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// ======================
// Passport Configuration
// ======================
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ======================
// Global Variables
// ======================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// ======================
// Routes
// ======================
app.use("/", userRoutes);
app.use("/:id/reviews", reviewsRoutes);
app.use("/", listingRoutes);


// ======================
// 404 Handler
// ======================
app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// ======================
// Error Handler
// ======================
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  res.status(statusCode).render("listing/error", { err });
});

// ======================
// Start Server
// ======================
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});