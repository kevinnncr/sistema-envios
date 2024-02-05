import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Controller('employes')
export class EmployesController {
  constructor(private readonly employesService: EmployesService) {}

  @Post()
  createEmploye(@Body() createEmployeDto: CreateEmployeDto) {
    return this.employesService.CreateEmploye(createEmployeDto);
  }

  @Get()
  getAllCreateEmploye() {
    return this.employesService.getAllCreateEmploye();
  }

  @Get(':id')
  getEmployeByID(@Param('id') employeeid: string) {
    return this.employesService.getEmployeByID(+employeeid);
  }
  @Put(':id')
  updateEmploye(@Param('id') employeid: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employesService.updateEmploye(+employeid, updateEmployeDto);
  }

  @Patch(':id')
  patchEmploye(@Query('id') employeid: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employesService.patchEmploye(+employeid, updateEmployeDto);
  }

  @Delete(':id')
  deleteEmploye(@Param('id') employeid: string) {
    return this.employesService.deleteEmploye(+employeid);
  }
}
