import { postRouter } from "~/server/api/routers/post";
import { quotesRouter } from "~/server/api/routers/quotes";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  quotes:quotesRouter,
  post: postRouter,

});

// export type definition of API
export type AppRouter = typeof appRouter;
