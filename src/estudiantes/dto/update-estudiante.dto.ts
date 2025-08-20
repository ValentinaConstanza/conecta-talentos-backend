import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateEstudianteDto } from './create-estudiante.dto';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
    @ApiPropertyOptional()
    nombre?: string;

    @ApiPropertyOptional()
    apellidos?: string;

    @ApiPropertyOptional()
    edad?: number;

    @ApiPropertyOptional()
    profesion?: string;
}
