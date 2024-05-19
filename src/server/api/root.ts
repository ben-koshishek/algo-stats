import { algorithmRouter } from '~/server/api/routers/algorithm';
import { createCallerFactory, createTRPCRouter } from '~/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  algorithm: algorithmRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.algorithm.all();
 *       ^? Algorithm[]
 */
export const createCaller = createCallerFactory(appRouter);
