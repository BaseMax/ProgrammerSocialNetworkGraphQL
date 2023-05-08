
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDeveloperInput {
    exampleField?: Nullable<number>;
}

export class UpdateDeveloperInput {
    id: number;
}

export class Developer {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract developers(): Nullable<Developer>[] | Promise<Nullable<Developer>[]>;

    abstract developer(id: number): Nullable<Developer> | Promise<Nullable<Developer>>;
}

export abstract class IMutation {
    abstract createDeveloper(createDeveloperInput: CreateDeveloperInput): Developer | Promise<Developer>;

    abstract updateDeveloper(updateDeveloperInput: UpdateDeveloperInput): Developer | Promise<Developer>;

    abstract removeDeveloper(id: number): Nullable<Developer> | Promise<Nullable<Developer>>;
}

type Nullable<T> = T | null;
