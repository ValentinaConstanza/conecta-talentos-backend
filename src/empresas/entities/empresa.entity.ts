import { ApiProperty } from "@nestjs/swagger";

export class Empresa {
    @ApiProperty()
    id: number;
    @ApiProperty()
    nombre: string;
    @ApiProperty()
    sitioWeb: string;
    @ApiProperty()
    tipo: "pequeña" | "mediana" | "grande"

    constructor(
        id: number,
        nombre: string,
        sitioWeb: string,
        tipo: "pequeña" | "mediana" | "grande",
    ) {
        this.id = id;
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.tipo = tipo
    }
}
