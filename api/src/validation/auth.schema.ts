import { z } from 'zod';

export const AuthRegisterSchema = z.object({
  email: z.string().email('Email must be valid'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type AuthRegisterInput = z.infer<typeof AuthRegisterSchema>;

export const AuthLoginSchema = z.object({
  email: z.string().email('Email must be valid'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type AuthLoginInput = z.infer<typeof AuthLoginSchema>;
