import { PartialType } from '@nestjs/mapped-types';
import { CreateArchitectureDto } from './create-architecture.dto';

export class UpdateArchitectureDto extends PartialType(CreateArchitectureDto) {}
