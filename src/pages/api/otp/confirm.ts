import { client } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method == "POST") {
        try {
            const { phone } = req.query;
            const { otp } = req.body;
            const collection = client.db().collection("users");
            const validity: any = await collection.findOne({
                phone,
            });
            if (!validity) {
                return res.status(400).json({
                    success: false,
                    error: "Signup using the correct method!",
                });
            }
            if (otp != validity.otp) {
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid OTP" });
            }
            collection.updateOne(
                {
                    otp,
                },
                {
                    $set: {
                        updatedAt: new Date(),
                        isVerified: true,
                        otp: null,
                    },
                },
            );
            const token = jwt.sign(
                {
                    phone: phone,
                },
                process.env.NEXT_PUBLIC_ARGON_SECRET || "Hello@World",
                {
                    expiresIn: "7d",
                },
            );
            res.status(200).json({
                success: true,
                message: "OTP Verified",
                token,
            });
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }
}
