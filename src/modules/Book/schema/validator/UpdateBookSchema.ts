import { z, object, AnyZodObject } from 'zod';

export const UpdateBookSchema: AnyZodObject = object({
  title: z.string().optional(),
  author: z.string().optional(),
  genre: z.string().optional(),
  img: z.string().optional(),
  synopsis: z.string().optional(),
  systemEntryDate: z.string().optional(),
  isActive: z.boolean().optional(),
  isLent: z.boolean().optional(),
  description: z.string().optional(),
});
