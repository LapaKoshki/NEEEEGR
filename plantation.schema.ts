import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Plantation extends Document {
  @Prop({ default: 0 })
  balance: number;
}

export const PlantationSchema = SchemaFactory.createForClass(Plantation);