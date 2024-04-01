// transportation.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transportation extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;
}

export const TransportationSchema = SchemaFactory.createForClass(Transportation);
