import type { NextApiRequest, NextApiResponse } from "next";
import * as argon from "argon2";
import { client } from "@/utils/database";
import * as jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ success: false, message: "Invalid Request Type" });
      return;
    }

    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(403)
        .json({ success: false, message: "Email and Password are requrired." });
      return;
    }

    const collection = client.db().collection("users");
    const user = await collection.findOne({ email });

    if (!user) {
      res.status(403).json({ success: false, message: "User not found" });
      return;
    }

    if (user.isVerified === false) {
      res.status(403).json({ success: false, message: "User not verified" });
      return;
    }

    const isValid = await argon.verify(user.hash, password);

    if (!isValid) {
      res.status(403).json({ success: false, message: "Invalid password" });
      return;
    }

    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.NEXT_PUBLIC_ARGON_SECRET || "Hello@World",
      {
        expiresIn: "7d",
      }
    );

    res
      .status(200)
      .json({ success: true, message: "User Signed in successfully.", token });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
}
