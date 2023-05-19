import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { Developer, Prisma } from "@prisma/client";
import {
  AuthPayload,
  DeveloperFilterInput,
  LoginInput,
  RegisterInput,
  SortByParams,
} from "src/graphql";
import { compare, hash } from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class DevelopersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
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

  async register(input: RegisterInput): Promise<AuthPayload> {
    const { firstName, lastName, email, password } = input;

    // Check if the email is already registered
    const existingDeveloper = await this.prisma.developer.findUnique({
      where: { email },
    });

    if (existingDeveloper) {
      throw new UnauthorizedException();
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create the new developer in the database
    const newDeveloper = await this.prisma.developer.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    const payload = { sub: newDeveloper.id, email: newDeveloper.email };
    return { token: await this.jwtService.signAsync(payload) };
  }

  async login(input: LoginInput): Promise<AuthPayload> {
    const { email, password } = input;

    // Find the developer by email
    const developer = await this.prisma.developer.findUnique({
      where: { email },
    });

    if (!developer) {
      throw new UnauthorizedException("Invalid Credential!");
    }

    // Check if the provided password matches the stored hashed password
    const passwordMatch = await compare(password, developer.password);

    if (!passwordMatch) {
      throw new UnauthorizedException("Invalid Credential!");
    }

    const payload = { sub: developer.id, email: developer.email };
    return { token: await this.jwtService.signAsync(payload) };
  }
}
