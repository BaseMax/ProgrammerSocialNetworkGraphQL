import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { Prisma } from "@prisma/client";
import { DeveloperFilterInput } from "src/graphql";
import { UpdateDeveloperInput } from "./dto/update-developer.input";

@Injectable()
export class DevelopersService {
  constructor(private prisma: PrismaService) {}
  create(createDeveloperInput: Prisma.DeveloperCreateInput) {
    return this.prisma.developer.create({
      data: createDeveloperInput,
    });
  }

  findAll() {
    return this.prisma.developer.findMany();
  }

  findByFilter(filter?: DeveloperFilterInput) {
    return this.prisma.developer.findMany({
      where: {
        skills: {
          some: {
            language: filter?.language,
            framework: filter?.framework,
          },
        },
      },
    });
  }

  update(id: number, updateDeveloperInput: UpdateDeveloperInput) {
    return `This action updates a #${id} developer`;
  }

  remove(id: number) {
    return `This action removes a #${id} developer`;
  }
}
