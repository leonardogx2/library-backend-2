import { z, object, AnyZodObject } from 'zod';

export const CreateBookSchema: AnyZodObject = object({
  title: z.string().trim().min(1, { message: 'Título é obrigatório' }),
  author: z.string().trim().min(1, { message: 'Autor é obrigatório' }),
  genre: z.string().trim().min(1, { message: 'Gênero é obrigatório' }),
  img: z.string().trim().min(1, { message: 'Imagem é obrigatória' }),
  synopsis: z.string().trim().min(1, { message: 'Sinopse é obrigatória' }),
  systemEntryDate: z.string(),
});
