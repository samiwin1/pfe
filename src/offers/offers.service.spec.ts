// src/offers/offers.service.ts

import { Injectable } from '@nestjs/common';
import { Offer } from './offer.interface'; 

@Injectable()
export class OffersService {
  private offers: Offer[] = [];

  create(offer: Offer): Offer {
    this.offers.push(offer);
    return offer;
  }

  findAll(): Offer[] {
    return this.offers;
  }

  findOne(id: string): Offer {
    return this.offers.find(offer => offer.id === id);
  }

  update(id: string, updatedOffer: Offer): Offer {
    const index = this.offers.findIndex(offer => offer.id === id);
    if (index !== -1) {
      this.offers[index] = { ...this.offers[index], ...updatedOffer };
      return this.offers[index];
    }
    return null;
  }

  delete(id: string): Offer {
    const index = this.offers.findIndex(offer => offer.id === id);
    if (index !== -1) {
      const deletedOffer = this.offers.splice(index, 1)[0];
      return deletedOffer;
    }
    return null;
  }
}
