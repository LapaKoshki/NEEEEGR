import { Test, TestingModule } from '@nestjs/testing';
import { NiggerController } from './nigger.controller';

describe('NiggerController', () => {
  let controller: NiggerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiggerController],
    }).compile();

    controller = module.get<NiggerController>(NiggerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
