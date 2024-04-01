// offer.schema.ts

import * as mongoose from 'mongoose';

export const OfferSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  // Add any other properties as needed
});
