import { Injectable } from '@nestjs/common';
import { CreateArchitectureDto } from './dto/create-architecture.dto';
import { UpdateArchitectureDto } from './dto/update-architecture.dto';

@Injectable()
export class ArchitectureService {
  create(createArchitectureDto: CreateArchitectureDto) {
    return 'This action adds a new architecture';
  }

  findAll() {
    return `This action returns all architecture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} architecture`;
  }

  update(id: number, updateArchitectureDto: UpdateArchitectureDto) {
    return `This action updates a #${id} architecture`;
  }

  remove(id: number) {
    return `This action removes a #${id} architecture`;
  }
}
