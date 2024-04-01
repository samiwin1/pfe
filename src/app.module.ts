import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user management/user/user.module';

@Module({
  imports: [
    OffersModule,
    UsersModule, // Import the UsersModule
    MongooseModule.forRoot('mongodb+srv://sam:GWliJTLJ8zJSLUjP@cluster0.7ir6kpe.mongodb.net/PFE', {
      // Add other options if needed
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
