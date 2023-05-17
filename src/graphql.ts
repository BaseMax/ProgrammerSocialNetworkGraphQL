
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SkillInput {
    language: string;
    framework: string;
}

export class DeveloperFilterInput {
    language: string;
    framework: string;
}

export class CreateDeveloperInput {
    firstName: string;
    lastName: string;
    email: string;
    skills: SkillInput[];
}

export class UpdateDeveloperInput {
    id: number;
}

export class Developer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    skills: Skill[];
}

export class Skill {
    language: string;
    framework: string;
}

export abstract class IQuery {
    abstract developers(): Nullable<Developer>[] | Promise<Nullable<Developer>[]>;

    abstract developersWithFilter(filter?: Nullable<DeveloperFilterInput>): Nullable<Developer>[] | Promise<Nullable<Developer>[]>;
}

export abstract class IMutation {
    abstract createDeveloper(createDeveloperInput: CreateDeveloperInput): Developer | Promise<Developer>;

    abstract updateDeveloper(updateDeveloperInput: UpdateDeveloperInput): Developer | Promise<Developer>;

    abstract removeDeveloper(id: number): Nullable<Developer> | Promise<Nullable<Developer>>;
}

type Nullable<T> = T | null;
