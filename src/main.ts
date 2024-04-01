// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/PFE');

  // Handle deprecation warnings
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  await app.listen(3001);
}
bootstrap();
