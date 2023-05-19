import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const john = await prisma.developer.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
      skills: [
        { language: "Typescript", framework: "NestJS" },
        { language: "Javascript", framework: "React" },
      ],
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
