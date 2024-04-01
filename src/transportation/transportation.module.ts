// transportation.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportationService } from './transportation.service';
import { TransportationController } from './transportation.controller';
import { Transportation, TransportationSchema } from './transportation.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Transportation.name, schema: TransportationSchema }])],
    controllers: [TransportationController],
    providers: [TransportationService],
})
export class TransportationModule {}
