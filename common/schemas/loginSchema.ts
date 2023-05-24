import { z } from 'zod';

export const loginSchema = z.object({
  emailOrPhoneNumber: z.string().min(1, 'Email or phone number required'),
});

export type ILogin = z.infer<typeof loginSchema>;
