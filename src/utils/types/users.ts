import { z } from "zod";

export const userSchema = z.object({
    name: z.string().max(50).optional(),
    phone: z.string().max(10).optional(),
    isVerified: z.boolean().optional().default(false),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export type UserSchemaType = z.infer<typeof userSchema>;
