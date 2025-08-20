import { ApiProperty } from "@nestjs/swagger";

export class Estudiante {

    @ApiProperty()
    public id: number;

    @ApiProperty()
    public nombre: string;

    @ApiProperty()
    public apellidos: string;

    @ApiProperty()
    public edad: number;

    @ApiProperty()
    public profesion: string;

    @ApiProperty()
    public email: string;

    constructor(
        id: number,
        nombres: string,
        apellidos: string,
        edad: number,
        profesion: string,
        email: string
    ) {
        this.id = id;
        this.nombre = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.profesion = profesion;
        this.email = email
    }

}
