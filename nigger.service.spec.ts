import { Test, TestingModule } from '@nestjs/testing';
import { NiggerService } from './nigger.service';

describe('NiggerService', () => {
  let service: NiggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NiggerService],
    }).compile();

    service = module.get<NiggerService>(NiggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
