import { Injectable } from "@nestjs/common";
import { CreateDeveloperInput } from "./dto/create-developer.input";
import { UpdateDeveloperInput } from "./dto/update-developer.input";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class DevelopersService {
  constructor(private  prisma: PrismaService) {}
  create(createDeveloperInput: CreateDeveloperInput) {
    return "This action adds a new developer";
  }

  findAll() {
    return this.prisma.developer.findMany();
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
