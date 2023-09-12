import { z } from "zod";

export const phoneSchema = z.object({
    phone: z.string().min(10).max(10),
});

export type phoneSchema = z.infer<typeof phoneSchema>;

export const phoneValidation = (phone: phoneSchema) => {
    try {
        phoneSchema.parse(phone);
        return true;
    } catch (error) {
        return false;
    }
};
