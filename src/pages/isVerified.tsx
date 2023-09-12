import Image from "next/image"
import { Inter } from "next/font/google"
import Otp from "@/components/Otp"
const inter = Inter({ subsets: ["latin"] })

export default function isverified() {
  return (
    <>
      <Otp />
    </>
  )
}
