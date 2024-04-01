// activity.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Activity extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
