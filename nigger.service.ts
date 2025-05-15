import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nigger } from './nigger.schema';
import { CreateNiggerDto } from './dto/create-nigger.dto';

@Injectable()
export class NiggerService {
  constructor(
    @InjectModel(Nigger.name) private NiggerModel: Model<Nigger>,
  ) {}

  async create(dto: CreateNiggerDto): Promise<Nigger> {
    const created = new this.NiggerModel(dto);
    return created.save();
  }

  async findAll(): Promise<Nigger[]> {
    return this.NiggerModel.find().exec();
  }

  async addPayment(id: string, amount: number) {
  return this.NiggerModel.findByIdAndUpdate(
    id,
    { $inc: { balance: amount } },
    { new: true }
  );
}
}