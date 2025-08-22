import { PartialType } from '@nestjs/swagger';
import { CreateOfertaLaboralDto } from './create-oferta-laboral.dto';

export class UpdateOfertaLaboralDto extends PartialType(CreateOfertaLaboralDto) {}
