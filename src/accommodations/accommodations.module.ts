// accommodations.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccommodationsController } from './accommodations.controller';
import { AccommodationsService } from './accommodations.service';
import { AccommodationSchema } from './accommodation.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Accommodation', schema: AccommodationSchema }]),
  ],
  controllers: [AccommodationsController],
  providers: [AccommodationsService],
})
export class AccommodationsModule {}
