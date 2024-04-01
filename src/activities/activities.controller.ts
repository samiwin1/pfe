// activities.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.interface/activity.interface.interface'; 
import { CreateActivityDto } from './dto/create-activity.dto/create-activity.dto' 
import {UpdateActivityDto} from './dto/update-activity.dto/update-activity.dto'

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  async findAll(): Promise<Activity[]> {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Activity> {
    return this.activitiesService.findOne(id);
  }

  @Post()
  async create(@Body() createActivityDto: CreateActivityDto): Promise<Activity> {
    return this.activitiesService.create(createActivityDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto): Promise<Activity> {
    return this.activitiesService.update(id, updateActivityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Activity> {
    return this.activitiesService.remove(id);
  }
}
