# Programmer Social Network GraphQL API

This is a GraphQL API for a programmer/developer social network that allows users to view, filter, sort, add, edit, and delete developers based on their programming skills.

## Getting started

To use this API, you'll need to have Node.js and npm installed on your computer.

- Clone this repository to your computer.
- Run `npm install` to install the required dependencies.
- Set up a MongoDB database and configure the connection in `src/config/index.js`.
- Run npm start to start the GraphQL server.
- Open a web browser and go to `http://localhost:4000/graphql` to use the GraphQL interface.

## Technologies Used

This API was built with:

- Node.js
- NestJS
- TypeScript
- GraphQL
- MongoDB

## Usage

### Queries

Get list of developers

```graphql
query {
  developers {
    id
    firstName
    lastName
    email
    skills {
      language
      framework
    }
  }
}
```

Filter developers by skill

```graphql
query {
  developers(filter: { skills: { language: "C#" } }) {
    id
    firstName
    lastName
    email
    skills {
      language
      framework
    }
  }
}
```

Sort developers by name

```graphql
query {
  developers(sortBy: "lastName") {
    id
    firstName
    lastName
    email
    skills {
      language
      framework
    }
  }
}
```

### Mutations

Add a new developer

```graphql
mutation {
  addDeveloper(input: { firstName: "John", lastName: "Doe", email: "johndoe@example.com", password: "password123", skills: [{ language: "C#", framework: "ASP.NET" }] }) {
    id
    firstName
    lastName
    email
    skills {
      language
      framework
    }
  }
}
```

Edit a developer

```graphql
mutation {
  editDeveloper(id: "<developer id>", input: { firstName: "John", lastName: "Doe", email: "johndoe@example.com", skills: [{ language: "C#", framework: "ASP.NET" }, { language: "React", framework: null }] }) {
    id
    firstName
    lastName
    email
    skills {
      language
      framework
    }
  }
}
```

Delete a developer

```graphql
mutation {
  deleteDeveloper(id: "<developer id>") {
    id
  }
}
```

Register a new user

```graphql
mutation {
  register(input: { firstName: "John", lastName: "Doe", email: "johndoe@example.com", password: "password123" }) {
    token
  }
}
```

Login

```graphql
mutation {
  login(input: { email: "johndoe@example.com", password: "password123" }) {
    token
  }
}
```

## Authors

- Amir Hossain
- Max Base

Copyright 2023, Max Base
