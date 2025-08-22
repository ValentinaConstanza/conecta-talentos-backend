import { Injectable } from '@nestjs/common';
import { CreateOfertaLaboralDto } from './dto/create-oferta-laboral.dto';
import { UpdateOfertaLaboralDto } from './dto/update-oferta-laboral.dto';

@Injectable()
export class OfertaLaboralService {
  create(createOfertaLaboralDto: CreateOfertaLaboralDto) {
    return 'This action adds a new ofertaLaboral';
  }

  findAll() {
    return `This action returns all ofertaLaboral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ofertaLaboral`;
  }

  update(id: number, updateOfertaLaboralDto: UpdateOfertaLaboralDto) {
    return `This action updates a #${id} ofertaLaboral`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofertaLaboral`;
  }
}
