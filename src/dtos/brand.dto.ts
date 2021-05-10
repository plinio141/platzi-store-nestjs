import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
