import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArchitectureService } from './architecture.service';
import { CreateArchitectureDto } from './dto/create-architecture.dto';
import { UpdateArchitectureDto } from './dto/update-architecture.dto';

@Controller('architecture')
export class ArchitectureController {
  constructor(private readonly architectureService: ArchitectureService) {}

  @Post()
  create(@Body() createArchitectureDto: CreateArchitectureDto) {
    return this.architectureService.create(createArchitectureDto);
  }

  @Get()
  findAll() {
    return this.architectureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.architectureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArchitectureDto: UpdateArchitectureDto) {
    return this.architectureService.update(+id, updateArchitectureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.architectureService.remove(+id);
  }
}
