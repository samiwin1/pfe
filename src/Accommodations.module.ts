// accommodations.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccommodationsController } from './accommodations.controller';
import { AccommodationsService } from './accommodations.service'; // Correct import path
import { AccommodationSchema } from './accommodation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Accommodation', schema: AccommodationSchema }]),
  ],
  controllers: [AccommodationsController],
  providers: [AccommodationsService], // Use the correct service
})
export class AccommodationsModule {}
