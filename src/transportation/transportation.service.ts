// transportation.service.ts
import { CreateTransportationDto } from './dto/create-transportation.dto/create-transportation.dto'; 
import { UpdateTransportationDto } from './dto/update-transportation.dto/update-transportation.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transportation } from './transportation.schema';

@Injectable()
export class TransportationService {
    constructor(@InjectModel('Transportation') private readonly transportationModel: Model<Transportation>) {}

    async create(createTransportationDto: CreateTransportationDto): Promise<Transportation> {
        const createdTransportation = new this.transportationModel(createTransportationDto);
        return await createdTransportation.save();
    }

    async findAll(): Promise<Transportation[]> {
        return await this.transportationModel.find().exec();
    }

    async findOne(id: string): Promise<Transportation> {
        return await this.transportationModel.findById(id).exec();
    }

    async update(id: string, updateTransportationDto: UpdateTransportationDto): Promise<Transportation> {
        return await this.transportationModel.findByIdAndUpdate(id, updateTransportationDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Transportation> {
        return await this.transportationModel.findByIdAndDelete(id).exec();
    }
}



