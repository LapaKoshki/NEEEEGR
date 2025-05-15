import { Controller, Get, Post, Body } from '@nestjs/common';
import { NiggerService } from './nigger.service';
import { CreateNiggerDto } from './dto/create-nigger.dto';
import { Nigger } from './nigger.schema';
import { PlantationService } from './plantation.service';
import { Patch, Param,} from '@nestjs/common';

@Controller('niggers')
export class NiggerController {
  constructor(
  private readonly NiggerService: NiggerService,
  private readonly plantationService: PlantationService, 
) {}

  @Post()
  async create(@Body() dto: CreateNiggerDto): Promise<Nigger> {
    return this.NiggerService.create(dto);
  }

  @Get()
  async findAll(): Promise<Nigger[]> {
    return this.NiggerService.findAll();
  }
  @Post('payday')
async payday(): Promise<{ message: string }> {
  await this.plantationService.payday();
  return { message: 'Payday 2 nahui complete' };
}
@Patch(':id/pay')
async addPayment(
  @Param('id') id: string,
  @Body() body: { amount: number }
) {
  return this.NiggerService.addPayment(id, body.amount);
}

}