import Joi from "joi";

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string()
      .trim()
      .max(100)
      .required(),

    description: Joi.string()
      .trim()
      .required(),

    price: Joi.number()
      .min(0)
      .required(),

    location: Joi.string()
      .trim()
      .required(),

    country: Joi.string()
      .trim()
      .required(),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string()
      .trim()
      .min(10)
      .max(200)
      .required(),

    rating: Joi.number()
      .integer()
      .min(1)
      .max(5)
      .required(),
  }).required(),
});

export { listingSchema, reviewSchema };