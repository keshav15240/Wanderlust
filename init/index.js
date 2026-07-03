import "dotenv/config";
import mongoose from "mongoose";
import data from "./data.js";
import Listing from "../models/listing.js"

main()
  .then(() => {
    console.log("connections is established");
}).catch ((err) =>{
    console.log(err);
});

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data);
  console.log("data was initialized");
}

initDB();