import { CreateDeveloperInput } from './create-developer.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDeveloperInput extends PartialType(CreateDeveloperInput) {
  id: number;
}
