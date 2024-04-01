// activities.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from './activity.interface/activity.interface.interface'; 
import {UpdateActivityDto} from './dto/update-activity.dto/update-activity.dto'
import { CreateActivityDto } from './dto/create-activity.dto/create-activity.dto' 

@Injectable()
export class ActivitiesService {
  constructor(@InjectModel('Activity') private readonly activityModel: Model<Activity>) {}

  async findAll(): Promise<Activity[]> {
    return this.activityModel.find().exec();
  }

  async findOne(id: string): Promise<Activity> {
    return this.activityModel.findById(id).exec();
  }

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const createdActivity = new this.activityModel(createActivityDto);
    return createdActivity.save();
  }

  async update(id: string, updateActivityDto: UpdateActivityDto): Promise<Activity> {
    return this.activityModel.findByIdAndUpdate(id, updateActivityDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Activity> {
    return this.activityModel.findByIdAndDelete(id).exec();
  }
}
