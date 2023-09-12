import { z } from "zod";

export const userSchema = z.object({
    name: z.string().max(50).optional(),
    email: z.string().email(),
    hash: z.string().min(6).max(100),
    isVerified: z.boolean().optional().default(false),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export type UserSchemaType = z.infer<typeof userSchema>;
