import { NestFactory } from '@nestjs/core';
import { AccommodationsModule  } from './Accommodations.module';

async function bootstrap() {
  const app = await NestFactory.create(AccommodationsModule );
  await app.listen(3000);
}
bootstrap();
