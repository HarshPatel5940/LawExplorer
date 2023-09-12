import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/utils/database";
import type { UserSchemaType } from "@/utils/types/users";
import { createMessage } from "@/utils/message";
import { customAlphabet } from "nanoid";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        if (req.method !== "POST") {
            res.status(400).json({
                success: false,
                message: "Invalid Request Type",
            });
            return;
        }

        const { name, phone } = req.body;

        if (!name || !phone) {
            res.status(403).json({
                success: false,
                message: "Name and Phone are requrired.",
            });
            return;
        }

        const collection = client.db().collection("users");
        const user = await collection.findOne({ phone });

        if (user) {
            res.status(403).json({
                success: false,
                message: "Phone number already taken.",
            });
            return;
        }
        const newUser: UserSchemaType = {
            name,
            phone,
            isVerified: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const nanoid = customAlphabet("0987654321", 6);
        const otp = nanoid();
        createMessage(otp, "+91" + phone);
        const result = await collection.insertOne(newUser);
        const createdUser = await collection.findOneAndUpdate(
            { phone },
            { $set: { otp } },
        );

        if (!result.acknowledged) {
            res.status(500).json({
                success: false,
                message: "Something went wrong.",
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "User created successfully.",
        });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
}
