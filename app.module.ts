import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NiggerModule } from './monkey/worker/nigger.module';
import { PlantationModule } from './monkey/worker/plantation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/plantation'),
    NiggerModule,
    PlantationModule,
  ],
})
export class AppModule {}