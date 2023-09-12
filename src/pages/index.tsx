import Image from "next/image"
import { Inter } from "next/font/google"
import LandingA from "@/components/LandingA"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <LandingA />
    </>
  )
}
