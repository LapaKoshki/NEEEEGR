import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantationService } from './plantation.service';
import { PlantationController } from './plantation.controller';
import { Plantation, PlantationSchema } from './plantation.schema';
import { Nigger, NiggerSchema } from './nigger.schema';
import { NiggerModule } from './nigger.module'; // 

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Plantation.name, schema: PlantationSchema },
      { name: Nigger.name, schema: NiggerSchema },
    ]),
    forwardRef(() => NiggerModule), // 
  ],
  controllers: [PlantationController],
  providers: [PlantationService],
  exports: [PlantationService], // 
})
export class PlantationModule {}