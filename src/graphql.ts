
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SkillInput {
    language?: Nullable<string>;
    framework?: Nullable<string>;
}

export class DeveloperFilterInput {
    language?: Nullable<string>;
    framework?: Nullable<string>;
}

export class CreateDeveloperInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    skills: SkillInput[];
}

export class UpdateDeveloperInput {
    id: number;
}

export class SortByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class RegisterInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class Developer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    skills: Skill[];
}

export class Skill {
    language?: Nullable<string>;
    framework?: Nullable<string>;
}

export class AuthPayload {
    token: string;
}

export abstract class IQuery {
    abstract developers(sortBy?: Nullable<SortByParams>): Nullable<Developer>[] | Promise<Nullable<Developer>[]>;

    abstract developersWithFilter(filter?: Nullable<DeveloperFilterInput>): Nullable<Developer>[] | Promise<Nullable<Developer>[]>;
}

export abstract class IMutation {
    abstract createDeveloper(createDeveloperInput: CreateDeveloperInput): Developer | Promise<Developer>;

    abstract updateDeveloper(updateDeveloperInput: UpdateDeveloperInput): Developer | Promise<Developer>;

    abstract removeDeveloper(id: number): Nullable<Developer> | Promise<Nullable<Developer>>;

    abstract register(input: RegisterInput): AuthPayload | Promise<AuthPayload>;

    abstract login(input: LoginInput): AuthPayload | Promise<AuthPayload>;
}

type Nullable<T> = T | null;
