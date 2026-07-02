
import joi from "joi";

const listingSchema = joi.object({
  listing: joi.object({
    title: joi.string().required(),
    description: joi.string().required(),

    image: joi.object({
      url: joi.string().allow("", null),
    }),

    price: joi.number().min(0).required(),
    location: joi.string().required(),
    country: joi.string().required(),
  }).required(),
});

const reviewSchema = joi.object({
  review: joi.object({
    comment: joi.string().min(10).max(200).required(),
    rating: joi.number().min(1).max(5).required(),
  }).required(),
});

export { reviewSchema };
export default listingSchema;
