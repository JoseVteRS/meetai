import { db } from "@/db";
import { agents } from "@/db/schema";
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { agentsInsertSchema } from "../schemas";

export const agentsRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const [existingAgent] = await db
        .select()
        .from(agents)
        .where(eq(agents.id, input.id));

      if (!existingAgent) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Agent not found",
        });
      }

      return existingAgent;
    }),

  getMany: protectedProcedure.query(async () => {
    const data = await db.select().from(agents);
    return data;
  }),

  create: protectedProcedure
    .input(agentsInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const auth = ctx.auth;

      const { data, success } = agentsInsertSchema.safeParse(input);
      if (!success) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid input",
        });
      }

      const [createdAgent] = await db
        .insert(agents)
        .values({
          ...data,
          userId: auth.user.id,
        })
        .returning();

      return createdAgent;
    }),
});
