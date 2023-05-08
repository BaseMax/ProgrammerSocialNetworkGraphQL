import { Injectable } from '@nestjs/common';
import { CreateDeveloperInput } from './dto/create-developer.input';
import { UpdateDeveloperInput } from './dto/update-developer.input';

@Injectable()
export class DevelopersService {
  create(createDeveloperInput: CreateDeveloperInput) {
    return 'This action adds a new developer';
  }

  findAll() {
    return `This action returns all developers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} developer`;
  }

  update(id: number, updateDeveloperInput: UpdateDeveloperInput) {
    return `This action updates a #${id} developer`;
  }

  remove(id: number) {
    return `This action removes a #${id} developer`;
  }
}
