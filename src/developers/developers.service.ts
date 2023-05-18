import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { Developer, Prisma } from "@prisma/client";
import { DeveloperFilterInput, SortByParams } from "src/graphql";

@Injectable()
export class DevelopersService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.DeveloperCreateInput): Promise<Developer> {
    return this.prisma.developer.create({
      data,
    });
  }

  async findAll(sortBy?: SortByParams) {
    const { field = "lastName", direction = "desc" } = sortBy || {};
    return this.prisma.developer.findMany({
      orderBy: { [field]: direction },
    });
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

  async updateDeveloper(
    id: string,
    updateDeveloperInput: Prisma.DeveloperUpdateInput
  ): Promise<Developer> {
    return this.prisma.developer.update({
      where: { id },
      data: updateDeveloperInput,
    });
  }

  async removeDeveloper(id: string) {
    return this.prisma.developer.delete({
      where: { id },
    });
  }
}
