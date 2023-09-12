import { client } from "@/utils/database";
import { createMessage } from "@/utils/message";
import { phoneValidation } from "@/utils/middleware/phone";
import type { NextApiRequest, NextApiResponse } from "next";
import { customAlphabet } from "nanoid";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        try {
            const { phone } = req.body;
            if (!phone) {
                return res
                    .status(404)
                    .json({ success: false, error: "Phone number missing" });
            }
            const nanoid = customAlphabet("0987654321", 6);
            const otp = nanoid();
            if (!phoneValidation({ phone })) {
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid phone number" });
            }
            createMessage(otp, "+91" + phone);
            const collection = client.db().collection("users");
            const user = collection.findOneAndUpdate(
                {
                    phone,
                },
                {
                    $set: {
                        otp,
                        updatedAt: new Date(),
                    },
                },
            );
            res.status(200).json({
                success: true,
                phone,
                message: "OTP sent successfully",
            });
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }
}
