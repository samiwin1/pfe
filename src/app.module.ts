import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user management/user/user.module';
import { DestinationsModule } from './destinations/destinations.module';
import { AccommodationsModule } from './accommodations/accommodations.module';
import { ActivitiesModule } from './activities/activities.module';
import { TransportationModule } from './transportation/transportation.module';

@Module({
  imports: [
    OffersModule,
    UsersModule, // Import the UsersModule
    MongooseModule.forRoot('mongodb+srv://sam:GWliJTLJ8zJSLUjP@cluster0.7ir6kpe.mongodb.net/PFE', {
      // Add other options if needed
    }), DestinationsModule, AccommodationsModule, ActivitiesModule, TransportationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
