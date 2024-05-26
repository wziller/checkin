import prisma from "@/utils/db";
import { Prisma, PrismaClient } from "@prisma/client";

interface Context {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>}

interface CheckInput {
    title: string
    word: string
    description: string
    body: string
    trigger: string
    reaction: string
    response: string
    physical: string
    thoughts: string
    action: string
    grateful: string
    public: boolean
    userId: string
}

export const resolvers = {
  Query: {
    allUsers: () => {
      const users = prisma.user.findMany({
        include: {
          checks: true,
        },
      });
      return users;
    },
    user: (id: string) => {
      const user = prisma.user.findFirst({
        where: {
          id: id,
        },
        include: {
          checks: true,
        },
      });
      return user;
    },
  },
  Mutation: {
    createCheck: async (parent:any,  input:CheckInput , context:Context) => {
      if (!input) {
        throw new Error("The 'input' argument is required.");
      }
      const check = await prisma.check.create({
        data: input,
      });
      return check;
    },
    },
};
