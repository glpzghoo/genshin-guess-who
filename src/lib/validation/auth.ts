import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    nickname: z.string().min(2).max(24),
    email: z.email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
export type RegisterSchemaType = z.infer<typeof registerSchema>;
