import { Test, TestingModule } from '@nestjs/testing';
import { OfertaLaboralController } from './oferta-laboral.controller';
import { OfertaLaboralService } from './oferta-laboral.service';

describe('OfertaLaboralController', () => {
  let controller: OfertaLaboralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertaLaboralController],
      providers: [OfertaLaboralService],
    }).compile();

    controller = module.get<OfertaLaboralController>(OfertaLaboralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
