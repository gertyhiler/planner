import { z } from "zod";
import { UserModel } from "../generated/models";
export const AuthRequestSchema = z.object({
    email: z.email("Некорректный email"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});
export const UserResponseSchema = z.object({
    id: UserModel.shape.id,
    email: UserModel.shape.email,
    name: UserModel.shape.name,
    image: UserModel.shape.image,
    createdAt: UserModel.shape.createdAt,
    updatedAt: UserModel.shape.updatedAt,
});
export const AuthResponseSchema = z.object({
    token: z.string(),
    user: UserResponseSchema,
});
//# sourceMappingURL=auth.js.map