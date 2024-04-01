// offer.model.ts

import { Document } from 'mongoose';

export interface OfferDocument extends Document {
  name: string;
  description: string;
  price: number;
  // Other properties if needed
}
