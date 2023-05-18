import { Prisma } from "@prisma/client";
import { DeveloperFilterInput } from "src/graphql";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DevelopersService } from "./developers.service";
import { UpdateDeveloperInput } from "./dto/update-developer.input";


@Resolver("Developer")
export class DevelopersResolver {
  constructor(private readonly developersService: DevelopersService) {}

  @Mutation("createDeveloper")
  create(
    @Args("createDeveloperInput")
    createDeveloperInput: Prisma.DeveloperCreateInput
  ) {
    return this.developersService.create(createDeveloperInput);
  }

  @Query("developers")
  findAll() {
    return this.developersService.findAll();
  }

  @Query("developersWithFilter")
  findByFilter(@Args("filter") filter: DeveloperFilterInput) {
    return this.developersService.findByFilter(filter);
  }

  @Mutation("updateDeveloper")
  update(
    @Args("updateDeveloperInput") updateDeveloperInput: UpdateDeveloperInput
  ) {
    return this.developersService.update(
      updateDeveloperInput.id,
      updateDeveloperInput
    );
  }

  @Mutation("removeDeveloper")
  remove(@Args("id") id: number) {
    return this.developersService.remove(id);
  }
}
