import { Module } from '@nestjs/common';
import { ArchitectureService } from './architecture.service';
import { ArchitectureController } from './architecture.controller';

@Module({
  controllers: [ArchitectureController],
  providers: [ArchitectureService]
})
export class ArchitectureModule {}
