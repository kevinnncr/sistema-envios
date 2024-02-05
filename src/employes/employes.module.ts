import { Module } from '@nestjs/common';
import { EmployesService } from './employes.service';
import { EmployesController } from './employes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EmployesController],
  providers: [EmployesService],
  imports:[PrismaModule]
})
export class EmployesModule {}
