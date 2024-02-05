import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeDto {
    @ApiProperty({example:'Belen'})
    firstName: string;
    @ApiProperty({example: 'Ochoa'})
    lastName: string;
    @ApiProperty({example:'asx@gmail.com'})
    email: string;
    @ApiProperty({example:1235168})
    PhoneNumber: number;



    
    @ApiProperty({example:'kevin'})
    firstName1: string;
    @ApiProperty({example: 'Ochoa'})
    lastName1: string;
    @ApiProperty({example:'asx@gmail.com'})
    email1: string;
    @ApiProperty({example:1235168})
    PhoneNumber1: number;
}
