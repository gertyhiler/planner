import { z } from "zod";
export declare const AuthRequestSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const UserResponseSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const AuthResponseSchema: z.ZodObject<{
    token: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AuthRequest = z.infer<typeof AuthRequestSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
//# sourceMappingURL=auth.d.ts.map