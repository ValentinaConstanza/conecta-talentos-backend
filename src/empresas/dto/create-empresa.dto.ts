import { ApiProperty } from "@nestjs/swagger";

export class CreateEmpresaDto {

    @ApiProperty()
    nombre: string;
    @ApiProperty()
    sitioWeb: string;
    @ApiProperty()
    tipo: "pequeña" | "mediana" | "grande"

}
