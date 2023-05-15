import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const john = await prisma.developer.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      skills: {
        "language": "Typescript",
        "framework": "NestJS",
      },
    },
  });

  console.log({ john });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
