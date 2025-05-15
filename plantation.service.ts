import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plantation } from './plantation.schema';
import { Nigger } from './nigger.schema';

@Injectable()
export class PlantationService {
  constructor(
    @InjectModel(Plantation.name) private plantationModel: Model<Plantation>,
    @InjectModel(Nigger.name) private NiggerModel: Model<Nigger>,
  ) {}
async payday() {
  const plantation = await this.plantationModel.findOne();
  if (!plantation) return;

  const niggers = await this.NiggerModel.find();
  if (niggers.length === 0) return;

  let totalToPlantation = 0;

  await Promise.all(
    niggers.map(async (nigger) => {
      const total = nigger.balance;
      const keep = total * 0.001;
      const toPlantation = total * 0.999;

      totalToPlantation += toPlantation;

      await this.NiggerModel.findByIdAndUpdate(nigger._id, {
        balance: keep,
      });
    })
  );

  plantation.balance += totalToPlantation;
  await plantation.save();

  console.log(`Payday complete. Plantation +${totalToPlantation.toFixed(2)}`);
}
async get() {
  const plantation = await this.plantationModel.findOne();

  if (!plantation) {
    const newPlantation = new this.plantationModel({ balance: 0 });
    await newPlantation.save();
    return newPlantation;
  }

  return plantation;
}
}