import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NiggerController } from './nigger.controller';
import { NiggerService } from './nigger.service';
import { Nigger, NiggerSchema } from './nigger.schema';
import { PlantationModule } from './plantation.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Nigger.name, schema: NiggerSchema }]),
    forwardRef(() => PlantationModule), // 
  ],
  controllers: [NiggerController],
  providers: [NiggerService],
})
export class NiggerModule {}