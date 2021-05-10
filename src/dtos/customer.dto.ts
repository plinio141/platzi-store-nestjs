import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
