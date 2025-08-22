import { Test, TestingModule } from '@nestjs/testing';
import { OfertaLaboralService } from './oferta-laboral.service';

describe('OfertaLaboralService', () => {
  let service: OfertaLaboralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfertaLaboralService],
    }).compile();

    service = module.get<OfertaLaboralService>(OfertaLaboralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
