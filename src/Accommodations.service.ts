import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accommodation } from './accommodation.schema'; 
import { CreateAccommodationDto } from './dto/reate-accommodation.dto'; 
import { UpdateAccommodationDto } from './dto/update-accommodation.dto'; 



@Injectable()
export class AccommodationsService {
  constructor(@InjectModel('Accommodation') private readonly accommodationModel: Model<Accommodation>) {}

  async create(accommodation: CreateAccommodationDto): Promise<Accommodation> {
    const createdAccommodation = new this.accommodationModel(accommodation);
    return await createdAccommodation.save();
  }

  async findAll(): Promise<Accommodation[]> {
    return await this.accommodationModel.find().exec();
  }

  async findOne(id: string): Promise<Accommodation> {
    return await this.accommodationModel.findById(id).exec();
  }

  async update(id: string, updateAccommodationDto: UpdateAccommodationDto): Promise<Accommodation> {
    return await this.accommodationModel.findByIdAndUpdate(id, updateAccommodationDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Accommodation> {
    return await this.accommodationModel.findByIdAndDelete(id).exec();
  }
}