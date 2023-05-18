import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { Developer, Prisma } from "@prisma/client";
import { DeveloperFilterInput } from "src/graphql";
import { UpdateDeveloperInput } from "./dto/update-developer.input";

@Injectable()
export class DevelopersService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.DeveloperCreateInput): Promise<Developer> {
    return this.prisma.developer.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.developer.findMany();
  }

  async findByFilter(filter?: DeveloperFilterInput) {
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

  async update(id: number, updateDeveloperInput: UpdateDeveloperInput) {
    return `This action updates a #${id} developer`;
  }

  async remove(id: number) {
    return `This action removes a #${id} developer`;
  }
}
