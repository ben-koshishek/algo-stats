import { z } from 'zod';

export const AlgorithmConfigInputSchema = z.object({
  name: z.string(),
  id: z.number(),
  args: z.object({
    Arguments: z.object({
      namingRule: z.object({
        value: z.string(),
      }),
      symbol: z.object({
        value: z.string(),
      }),
    }),
  }),
  // Define other properties as needed
});

export type AlgorithmConfigInput = z.infer<typeof AlgorithmConfigInputSchema>;
