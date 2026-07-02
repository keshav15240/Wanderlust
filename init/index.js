import mongoose from "mongoose";
import data from "./data.js";
import Listing from "../models/listing.js"

const MONGOURL = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => {
    console.log("connections is established");
}).catch ((err) =>{
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGOURL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data);
  console.log("data was initialized");
}

initDB();