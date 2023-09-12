import { client } from "@/utils/database";
import { createMessage } from "@/utils/message";
import { phoneValidation } from "@/utils/middleware/phone";
import type { NextApiRequest, NextApiResponse } from "next";
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

        const { phone } = req.body;
        const nanoid = customAlphabet("0987654321", 6);
        const otp = nanoid();
        if (!phoneValidation({ phone })) {
            return res
                .status(400)
                .json({ success: false, error: "Invalid phone number" });
        }
        createMessage(otp, "+91" + phone);
        const collection = client.db().collection("otp");
        collection.insertOne({ phone, otp });
        res.status(200).json({
            success: true,
            phone,
            message: "OTP sent successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
}
