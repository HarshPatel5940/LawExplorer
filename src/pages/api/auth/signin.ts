import type { NextApiRequest, NextApiResponse } from "next";
import * as argon from "argon2";
import { client } from "@/utils/database";
import * as jwt from "jsonwebtoken";

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

        const { phone, otp } = req.body;

        if (!phone || !otp) {
            res.status(403).json({
                success: false,
                message: "Phone and OTP are requrired.",
            });
            return;
        }

        const collection = client.db().collection("users");
        const user = await collection.findOne({ phone });

        if (!user) {
            res.status(403).json({ success: false, message: "User not found" });
            return;
        }

        if (user.isVerified === false) {
            res.status(403).json({
                success: false,
                message: "User not verified",
            });
            return;
        }

        if (user.otp !== otp) {
            res.status(403).json({
                success: false,
                message: "Invalid OTP",
            });
            return;
        }

        const token = jwt.sign(
            {
                phone: user.phone,
            },
            process.env.NEXT_PUBLIC_ARGON_SECRET || "Hello@World",
            {
                expiresIn: "7d",
            },
        );

        collection.updateOne(
            {
                phone,
            },
            {
                $set: {
                    otp: null,
                    updatedAt: new Date(),
                },
            },
        );

        res.status(200).json({
            success: true,
            message: "User Signed in successfully.",
            token,
        });
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
}
