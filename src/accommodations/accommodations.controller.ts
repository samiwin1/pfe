// accommodations.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AccommodationsService } from './accommodations.service';
import { CreateAccommodationDto } from './dto/create-accommodation.dto/create-accommodation.dto' 
import {UpdateAccommodationDto} from './dto/update-accommodation.dto/update-accommodation.dto'
@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @Get()
  async findAll() {
    return this.accommodationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.accommodationsService.findOne(id);
  }

  @Post()
  async create(@Body() createAccommodationDto: CreateAccommodationDto) {
    return this.accommodationsService.create(createAccommodationDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAccommodationDto: UpdateAccommodationDto) {
    return this.accommodationsService.update(id, updateAccommodationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.accommodationsService.remove(id);
  }
}
