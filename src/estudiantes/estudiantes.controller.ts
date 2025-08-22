import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}
  //registrar nuevo estudiante
  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto): Estudiante {
    return this.estudiantesService.create(createEstudianteDto);
  }

  //obtener todos los estudiantes
  @Get()
  findAll() {
    return this.estudiantesService.findAll();
  }

 // obtener estudiante segun id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudiantesService.findOne(+id);
  }
  
 //modificar estudiante
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudiantesService.update(+id, updateEstudianteDto);
  }
 // eliminar estudiante
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiantesService.remove(+id);
  }
}
