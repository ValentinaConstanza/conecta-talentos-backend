import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {

  empresa: Empresa[] = []
  constructor() {
    this.empresa = [
      new Empresa(1, "La tiendita de Martin", "kjsnfdvkjfdnv", "pequeña"),
    ]
  }

  //Registrar una nueva empresa 
  //si existe una empresa conel mismo nombre sin importan mayusculas o minusculas, devolver un error 
  create(createEmpresaDto: CreateEmpresaDto) {
    const nombre= (createEmpresaDto.nombre).toLowerCase()

    const empresaEncontrada = this.empresa.find(
      (empresa: Empresa) =>
        (empresa.nombre).toLowerCase() === nombre
    );
    if (empresaEncontrada) {
      throw new BadRequestException(`Ya existe una empresa con este nombre`)
    }
    const nuevaEmpresa = new Empresa(
      this.empresa.length + 1,
      createEmpresaDto.nombre,
      createEmpresaDto.sitioWeb,
      createEmpresaDto.tipo
    );
    this.empresa.push(nuevaEmpresa);
    return nuevaEmpresa
  }

  //obtener todos
  findAll() {
    return this.empresa;
  }

 // obtener por di 
  findOne(id: number) {
    const empresaEncontrada = this.empresa.find(
      (empresa: Empresa) =>
        empresa.id === id
    );
    if (!empresaEncontrada) {
      throw new NotFoundException(`No existe empresa con el id ${id}`)
    };
    return empresaEncontrada
  }

 //Eliminar una empresa por id 
  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
