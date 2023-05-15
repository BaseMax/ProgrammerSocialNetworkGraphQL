import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersResolver } from './developers.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, DevelopersResolver, DevelopersService]
})
export class DevelopersModule {}
