import Listing from "../models/listing.js";
export const index = async (req, res) => {
  const alllistings = await Listing.find().lean();
   const groupedListings = {};

  alllistings.forEach((listing) => {

    if (!groupedListings[listing.location]) {
      groupedListings[listing.location] = [];
    }

    groupedListings[listing.location].push(listing);

  });

  res.render("listing/index", {
    groupedListings,
  });

};

export const showListing = async (req, res) => {
  const { id } = req.params;
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
    req.flash("error", "Cannot find that listing.");
    return res.redirect("/");
  }

  res.render("listing/show", { listing });
};

export const showNewForm = (req, res) => {
  res.render("listing/new");
};
  
export const createListing = async (req, res) => {
  console.log(">>> NEW createListing controller is running <<<");

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  await newListing.save();

  req.flash("success", "New Listing Created!");

  console.log("Redirecting to /");

  res.redirect("/");
};

export const showEditForm = async (req, res) => {
  const { id } = req.params;
  const listingData = await Listing.findById(id);

  if (!listingData) {
    req.flash("error", "Cannot find that listing");
    return res.redirect("/");
  }
  let originalimageurl = listingData.image.url;
originalimageurl = originalimageurl.replace("/upload", "/upload/w_300,h_200,c_fill");
  res.render("listing/edit", { listing: listingData, originalimageurl });
};

export const updateListing = async (req, res) => {
  const { id } = req.params;

 const listing = await Listing.findByIdAndUpdate(
  id,
  req.body.listing,
  {
    new: true,
    runValidators: true,
  }
);


  if (req.file) {
    listing.image = {
  url: req.file.path,
  filename: req.file.filename,
};
    await listing.save();
  }

  req.flash("success", "Listing updated!");
  res.redirect(`/${id}`);
};

export const deleteListing = async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndDelete(id);

  req.flash("success", "Listing deleted!");
  res.redirect("/");
};
