import mongoose from "mongoose";
import Listing from "./models/listing.js";
import Review from "./models/review.js";
mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");

const USER_ID = "6a45ebdca9a57b49e545bdb3"; // Replace with your user's ObjectId

const starts = [
    "Amazing stay.",
    "Fantastic experience.",
    "Absolutely loved this place.",
    "Highly recommended.",
    "Wonderful property.",
    "Beautiful home.",
    "Perfect vacation rental.",
    "Excellent stay.",
    "Great experience overall.",
    "One of the best places we've stayed."
];

const middles = [
    "The host was extremely friendly and responsive.",
    "Everything was exactly as shown in the photos.",
    "The apartment was spotless and well maintained.",
    "Check-in was smooth and hassle-free.",
    "The location was perfect for exploring the city.",
    "The rooms were spacious and comfortable.",
    "The kitchen was fully equipped.",
    "The beds were very comfortable.",
    "The WiFi worked perfectly throughout the stay.",
    "The swimming pool was clean and relaxing.",
    "Parking was convenient.",
    "The neighborhood felt very safe.",
    "The house had every amenity we needed.",
    "The balcony offered an amazing view.",
    "Everything exceeded our expectations.",
    "Communication with the host was excellent.",
    "The property was quiet and peaceful.",
    "It was very clean and smelled fresh.",
    "The bathrooms were spotless.",
    "We enjoyed every moment of our stay."
];

const endings = [
    "Would definitely stay again.",
    "Looking forward to visiting again.",
    "Five stars!",
    "Worth every penny.",
    "Perfect for families.",
    "Would recommend to everyone.",
    "Can't wait to come back.",
    "Excellent value for money.",
    "Truly unforgettable.",
    "Thank you for a wonderful experience."
];

function randomComment() {
    return `${starts[Math.floor(Math.random()*starts.length)]} ${
        middles[Math.floor(Math.random()*middles.length)]
    } ${
        endings[Math.floor(Math.random()*endings.length)]
    }`;
}

// Mostly 4★ and 5★ ratings
function randomRating() {
    const ratings = [5,5,5,5,5,4,4,4,4,3,2];
    return ratings[Math.floor(Math.random()*ratings.length)];
}

function randomDate() {
    const start = new Date(2024,0,1).getTime();
    const end = Date.now();

    return new Date(start + Math.random() * (end-start));
}

async function seedReviews() {

    const listings = await Listing.find();

    console.log(`Found ${listings.length} listings`);

    for(const listing of listings){

        const reviewIds=[];

        for(let i=0;i<50;i++){

            const review = await Review.create({

                comment: randomComment(),

                rating: randomRating(),

                author: USER_ID,

                createdAt: randomDate(),

                updatedAt: randomDate()

            });

            reviewIds.push(review._id);
        }

        listing.reviews.push(...reviewIds);

        await listing.save();

        console.log(`${listing.title} ✔`);
    }

    console.log("Finished Successfully");

    mongoose.connection.close();
}

seedReviews();