// src/offers/offer.interface.ts

export interface Offer {
    id: string;
    name: string;
    description: string;
    price: number;
    // Add any other properties as needed
  }


import { ObjectId } from 'mongoose';

export interface OfferDocument {
  _id: ObjectId; // MongoDB ObjectID
  id: string; // Unique identifier for the offer
  name: string;
  description: string;
  price: number;
  // Other properties if needed
}
