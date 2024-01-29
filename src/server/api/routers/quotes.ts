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
});
