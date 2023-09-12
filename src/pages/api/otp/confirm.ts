import { client } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method == "POST") {
        try {
            const { phone, otp } = req.body;
            const collection = client.db().collection("otp");
            const validity: any = await collection.findOne({
                phone,
            });
            if (!validity) {
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid Mobile Number" });
            }
            if (otp != validity.otp) {
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid OTP" });
            }
            collection.deleteOne({ phone });
            const { email } = req.query;
            const userCollection = client.db().collection("users");
            userCollection.updateOne(
                { email },
                { $set: { phone, isVerified: true } },
            );
            res.status(200).json({ success: true, message: "OTP confirmed" });
        } catch (error) {
            res.status(400).json({ success: false, error });
        }
    }
}
