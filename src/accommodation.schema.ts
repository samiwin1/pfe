// accommodation.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccommodationDocument = Accommodation & Document;

@Schema()
export class Accommodation {
  @Prop()
  name: string;

  @Prop()
  description: string;

  // Define other properties as needed
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);