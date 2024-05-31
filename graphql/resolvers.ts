import prisma from "@/utils/db";
import { Prisma, PrismaClient } from "@prisma/client";
import { Args } from "@prisma/client/runtime/library";

interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
}

interface CheckInput {
  id: string;
  title: string;
  word: string;
  description: string;
  body: string;
  trigger: string;
  reaction: string;
  response: string;
  physical: string;
  thoughts: string;
  action: string;
  grateful: string;
  public: boolean;
  userId: string;
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
    checkById: async (parent, args, context, info) => {
      const { checkId } = args;

      console.log(`Received userId from GraphQL query: ${checkId}`);

      if (!checkId) {
        throw new Error("checkId is not provided or is undefined");
      }

      try {
        const check = await prisma.check.findUnique({
          where: {
            id: checkId,
          },
          include: {
            user: true,
          },
        });

        // Logging the result to verify the query's correctness
        // console.log(check);

        return check;
      } catch (error) {
        console.error(`Error fetching checks for userId ${checkId}:`, error);
        throw error;
      }
    },
    checksByUserId: async (parent: any, args, context: Context, info) => {
      const { userId } = args;

      // Logging userId to ensure it's being passed correctly
      console.log(`Received userId from GraphQL query: ${userId}`);

      if (!userId) {
        throw new Error("userId is not provided or is undefined");
      }

      try {
        const checks = await prisma.check.findMany({
          where: {
            userId: userId,
          },
          include: {
            user: true,
          },
        });

        // Logging the result to verify the query's correctness
        // console.log(checks);

        return checks;
      } catch (error) {
        console.error(`Error fetching checks for userId ${userId}:`, error);
        throw error;
      }
    },
  },
  Mutation: {
    createCheck: async (
      parent: any,
      args: { input: CheckInput },
      context: Context
    ) => {
      const { input } = args;
      console.log("RESOVLERINPUT", input)
      debugger
      try {
        const newCheck = await prisma.check.create({
          data: { ...input },
        });

        return newCheck;
      } catch (error) {
        console.error(`Error creating check:`, error);
        throw error;
      }
    },
    deleteCheck: async (
      parent: any,
      args: { id: string },
      context: Context
    ) => {
      const { id } = args;

      if (!id) {
        throw new Error("The 'input' argument is required.");
      }

      // Check if the record exists
      const checkExists = await prisma.check.findUnique({
        where: { id: id },
      });

      if (!checkExists) {
        throw new Error("Record to delete does not exist.");
      }

      // Proceed to delete the record
      const check = await prisma.check.delete({
        where: { id: id },
      });

      return check;
    },
    updateCheck: async (
      parent: any,
      args: { input: CheckInput },
      context: Context
    ) => {
      const { input } = args;

      if (!input) {
        throw new Error("The 'input' argument is required.");
      }
      try {
        const check = await prisma.check.update({
          where: {
            id: input.id,
          },
          data: {
            title: input.title,
            word: input.word,
            description: input.description,
            body: input.body,
            trigger: input.trigger,
            reaction: input.reaction,
            response: input.response,
            physical: input.physical,
            thoughts: input.thoughts,
            action: input.action,
            grateful: input.grateful,
            public: input.public,
            userId: input.userId,
          },
        });

        return check;
      } catch (error) {
        console.error(`Error updating checks:`, error);
        throw error;
      }
    },
  },
};
