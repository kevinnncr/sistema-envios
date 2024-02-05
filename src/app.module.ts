import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmployesModule } from './employes/employes.module';

@Module({
  imports: [PrismaModule, EmployesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
