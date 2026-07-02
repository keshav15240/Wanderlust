import Listing from "../models/listing.js";
export const index = async (req, res) => {
  const alllistings = await Listing.find({});
   const groupedListings = {};

  alllistings.forEach((listing) => {

    if (!groupedListings[listing.location]) {
      groupedListings[listing.location] = [];
    }

    groupedListings[listing.location].push(listing);

  });

  res.render("listing/index.ejs", {
    groupedListings,
  });

};

export const showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  .populate("owner")
  .populate({
  path: "reviews",
   options: { sort: { createdAt: -1 } }, // newest reviews first
  populate: {
    path: "author",
  },
});

  if (!listing) {
    req.flash("error", "Cannot find that listing");
    return res.redirect("/listing");
  }

  res.render("listing/show.ejs", { listing });
};

export const showNewForm = (req, res) => {
  res.render("listing/new.ejs");
};
  

export const createListing = async (req, res) => {
  const newListing = new Listing(req.body.listing);
newListing.amenities = [
  "Garden View",
  "Beach Access",
  "Kitchen",
  "WiFi",
  "Dedicated Workspace",
  "Free Parking",
  "Swimming Pool",
  "Exterior Security Cameras",
  "Carbon Monoxide Alarm",
  "Smoke Alarm",
  "Air Conditioning",
  "Hot Water",
  "TV",
  "Washing Machine",
  "Iron",
  "Hair Dryer",
  "Microwave",
  "Refrigerator",
  "Coffee Maker",
  "Balcony"
];
let url = req.file.path;
  let filename = req.file.filename;
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listing");
};

export const showEditForm = async (req, res) => {
  let { id } = req.params;
  const listingData = await Listing.findById(id);

  if (!listingData) {
    req.flash("error", "Cannot find that listing");
    return res.redirect("/listing");
  }
  let originalimageurl = listingData.image.url;
originalimageurl = originalimageurl.replace("/upload", "/upload/w_300,h_200,c_fill");
  res.render("listing/edit.ejs", { listing: listingData, originalimageurl });
};

export const updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  }, { new : true});


  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing updated!");
  res.redirect(`/listing/${id}`);
};

export const deleteListing = async (req, res) => {
  let { id } = req.params;

  await Listing.findByIdAndDelete(id);

  req.flash("success", "Listing deleted!");
  res.redirect("/listing");
};