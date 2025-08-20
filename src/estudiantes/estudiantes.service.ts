import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {

  estudiantes: Estudiante[] = [];
  constructor() {
    this.estudiantes = [
      new Estudiante(1, "Valentina", "Villanueva", 26, "Trabajadora Social", "val@gmail.com"),
      new Estudiante(2, "Constanza", "Ortiz", 24, "Trabajadora", "Constanza@gmail.com")
    ]
  }

  //crear nuevo estudiante (el id se debe realizar solo)
  //si existe un estudiante con el correo, devolver un 400
  create(createEstudianteDto: CreateEstudianteDto): Estudiante {
    const estudianteEncontrado = this.estudiantes.find(
      (estudiante: Estudiante) =>
        estudiante.email === createEstudianteDto.email
    );
    if (estudianteEncontrado) {
      throw new BadRequestException(`Ya existe un estudiante con este correo`)
    }
    const nuevoEstudiante = new Estudiante(
      this.estudiantes.length + 1,
      createEstudianteDto.nombre,
      createEstudianteDto.apellidos,
      createEstudianteDto.edad,
      createEstudianteDto.profesion,
      createEstudianteDto.email
    );
    this.estudiantes.push(nuevoEstudiante);
    return nuevoEstudiante
  }


  //obtener todos los estudiantes
  findAll() {
    return this.estudiantes;
  }


  //obtener estudiante segun id
  // si es que no se encuentra el id, devolver un 400
  findOne(id: number) {
    const estudianteEncontrado = this.estudiantes.find(
      (estudiante: Estudiante) =>
        estudiante.id === id
    );
    if (!estudianteEncontrado) {
      throw new NotFoundException(`No existe estudiante con id ${id}`)
    };
    return estudianteEncontrado
  }


  // modificar estudiante
  //utilizar DTO
  update(id: number, dto: UpdateEstudianteDto) {
    const estudianteEncontrado = this.estudiantes.find(estudiante => estudiante.id === id);
    if (!estudianteEncontrado) {
      throw new NotFoundException(`Estduainte con  id = ${id} no existe`)
    };
    if (dto.nombre !== undefined) estudianteEncontrado.nombre = dto.nombre;
    if (dto.apellidos !== undefined) estudianteEncontrado.apellidos = dto.apellidos;
    if (dto.edad !== undefined) estudianteEncontrado.edad = dto.edad;
    if (dto.profesion !== undefined) estudianteEncontrado.profesion = dto.profesion;
    return (`Estudiante ${id} actualizado`)

  }

  // eliminar estudiante+
  // si no se encuentra el id, devolver un 404
  remove(id: number) {
    const eliminado = this.estudiantes.find(estudiante => estudiante.id === id);
    if (!eliminado) {
      throw new NotFoundException(`Estduainte con  id = ${id} no existe`)
    }
    this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id);

    return `Estudiante id ${id}  ha sido eliminado`;
  }
}

