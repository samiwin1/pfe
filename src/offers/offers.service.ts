import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from './offer.interface';
import { OfferDocument } from './offer.interface'; 

@Injectable()
export class OffersService {
  constructor(@InjectModel('Offer') private readonly offerModel: Model<OfferDocument>) {}

  async create(offer: Offer): Promise<Offer> {
    const createdOffer = new this.offerModel(offer);
    return createdOffer.save();
  }

  async findAll(): Promise<Offer[]> {
    return this.offerModel.find().exec();
  }

  async findOne(id: string): Promise<Offer> {
    return this.offerModel.findById(id).exec();
  }

  async update(id: string, updatedOffer: Offer): Promise<Offer> {
    return this.offerModel.findByIdAndUpdate(id, updatedOffer, { new: true }).exec();
  }

  async delete(id: string): Promise<Offer> {
    return this.offerModel.findByIdAndDelete(id).exec();
  }
}
