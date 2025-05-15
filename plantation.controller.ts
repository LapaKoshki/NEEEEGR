import { Controller, Get } from '@nestjs/common';
import { PlantationService } from './plantation.service';

@Controller('plantation')
export class PlantationController {
  constructor(private readonly plantationService: PlantationService) {}

  @Get()
  async get() {
    return this.plantationService.get();
  }
}