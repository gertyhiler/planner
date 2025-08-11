import { z } from "zod";

export const AuthRequestSchema = z.object({
  email: z
    .string()
    .email("Некорректный email"),
  password: z
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов"),
});

export const UserResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const AuthResponseSchema = z.object({
  token: z.string(),
  user: UserResponseSchema,
});

export type AuthRequest = z.infer<typeof AuthRequestSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
