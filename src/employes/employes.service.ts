import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class EmployesService {
  constructor(private readonly prisma:PrismaService){}
  async CreateEmploye(createEmployeDto:CreateEmployeDto){
    const CreatedEmploye = await this.prisma.employee.create({
      data: createEmployeDto,
    });
    return CreatedEmploye;
  }

  async getAllCreateEmploye() {
    const allEmployes = await this.prisma.employee.findMany();
    return allEmployes;
  }

  async getEmployeByID(employeid: number) {
    const employee = await this.prisma.employee.findUnique({
      where:{id:employeid},
    });
    if(!employee){
    throw new NotFoundException(`Employe with ID "${employeid}" `)
  }
    return  employee;
  }

  async updateEmploye(employeid: number, updateEmployeDto: UpdateEmployeDto) {
    const updateEmploye = await this.prisma.employee.update({
      where:{id: employeid},
      data:updateEmployeDto,
    });
    if(!updateEmploye){
      throw new NotFoundException(`Employe with ID ${employeid} not found`);
    }
    return updateEmploye;
  }
async patchEmploye(employeid: number, updateEmployeDto: UpdateEmployeDto){
  const patchedEmploye = await this.prisma.employee.update({
    where:{id:employeid},
    data: updateEmployeDto
  });
  if(!patchedEmploye){
    throw new NotFoundException(`Employe with ID ${employeid} not found`)
  }
  return patchedEmploye;
 }
  async deleteEmploye(employeid: number) {
    const deleteEmploye = await this.prisma.employee.delete({
      where: {id:employeid},
    });

    if(!deleteEmploye){
      throw new NotFoundException(`Employe with ID  "${employeid}" not Found.`);
    }
      
    return deleteEmploye ;
  }
}
