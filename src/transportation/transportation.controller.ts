// transportation.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { CreateTransportationDto } from './dto/create-transportation.dto/create-transportation.dto'; 
import { UpdateTransportationDto } from './dto/update-transportation.dto/update-transportation.dto';
@Controller('transportation')
export class TransportationController {
    constructor(private readonly transportationService: TransportationService) {}

    @Get()
    async findAll() {
        return this.transportationService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.transportationService.findOne(id);
    }

    @Post()
    async create(@Body() createTransportationDto: CreateTransportationDto) {
        return this.transportationService.create(createTransportationDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTransportationDto: UpdateTransportationDto) {
        return this.transportationService.update(id, updateTransportationDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.transportationService.remove(id);
    }
}
