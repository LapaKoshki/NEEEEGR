import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Nigger extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 0 })
  balance: number;
}

export const NiggerSchema = SchemaFactory.createForClass(Nigger);