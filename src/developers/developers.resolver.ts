import { Developer, Prisma } from "@prisma/client";
import {
  AuthPayload,
  DeveloperFilterInput,
  LoginInput,
  RegisterInput,
  SortByParams,
} from "src/graphql";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DevelopersService } from "./developers.service";

@Resolver("Developer")
export class DevelopersResolver {
  constructor(private readonly developersService: DevelopersService) {}

  @Mutation("createDeveloper")
  async create(
    @Args("createDeveloperInput")
    createDeveloperInput: Prisma.DeveloperCreateInput
  ) {
    const createdDeveloper = await this.developersService.create(
      createDeveloperInput
    );
    const { password, ...rest } = createdDeveloper;
    return rest;
  }

  @Query("developers")
  async findAll(@Args("sortBy") sortBy?: SortByParams): Promise<Developer[]> {
    return await this.developersService.findAll(sortBy);
  }

  @Query("developersWithFilter")
  async findByFilter(@Args("filter") filter: DeveloperFilterInput) {
    return await this.developersService.findByFilter(filter);
  }

  @Mutation("updateDeveloper")
  async updateDeveloper(
    @Args("id") id: string,
    @Args("updateDeveloperInput")
    updateDeveloperInput: Prisma.DeveloperUpdateInput
  ) {
    return await this.developersService.updateDeveloper(
      id,
      updateDeveloperInput
    );
  }

  @Mutation("removeDeveloper")
  async removeDeveloper(@Args("id") id: string) {
    return await this.developersService.removeDeveloper(id);
  }

  @Mutation("register")
  async register(@Args("input") input: RegisterInput): Promise<AuthPayload> {
    return await this.developersService.register(input);
  }

  @Mutation("login")
  async login(@Args("input") input: LoginInput): Promise<AuthPayload> {
    return await this.developersService.login(input);
  }
}
