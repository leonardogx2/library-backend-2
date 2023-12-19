import { z, object, AnyZodObject } from 'zod';

const isValidPassword = (pass: string) => {
  const rg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/;
  return rg.test(pass);
};

export const CreateUserSchema: AnyZodObject = object({
  name: z.string().trim().min(1, { message: 'Nome é obrigatório' }),
  password: z.string().refine(isValidPassword, () => ({
    message:
      'Senha deve ter no mínimo 8 caracteres, ao menos 1 letra maiúscula, ao menos 1 número,  ao menos 1 caractere especial.',
  })),
  email: z.string().email({ message: 'E-mail inválido' }),
});
