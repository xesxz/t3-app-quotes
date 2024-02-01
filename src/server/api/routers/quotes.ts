import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const quotesRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),


  getList: publicProcedure.query(({ ctx }) => {
    return ctx.db.quotes.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),


  create: publicProcedure
  .input(z.object({ content: z.string().min(1) }))
  .mutation(async ({ ctx, input }) => {
    // simulate a slow db call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return ctx.db.quotes.create({
      data: {
        content: input.content,
      },
    });
  }),

});
