import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();
async function main() {
  for (let i = 0; i <= 100; i += 1) {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const image = faker.image.avatar();
    const publicVal = Math.random() < 0.5;
    const emailDate = faker.date.past({ years: 1 });
    const checkCount = Math.floor(Math.random() * 6) + 1;
    const userChecks = [];

    for (let i = 0; i <= checkCount; i += 1) {
      userChecks.push({
        title: faker.lorem.word({
          length: { min: 5, max: 7 },
          strategy: "fail",
        }),
        context: faker.lorem.word({
          length: { min: 5, max: 20 },
          strategy: "fail",
        }),
        public: publicVal,
      });
    }

    const user = await prisma.user.upsert({
      where: { email: "alice@prisma.io" },
      update: {},
      create: {
        email: email,
        emailVerified: emailDate,
        name: name,
        image: image,
        public: publicVal,
        checks: {
          create: userChecks,
        },
      },
    });
    console.log(user);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
