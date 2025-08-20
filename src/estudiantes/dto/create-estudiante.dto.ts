import { ApiProperty } from "@nestjs/swagger";

export class CreateEstudianteDto {

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

}
