import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Poppins as PoppinsSans
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const Poppins = PoppinsSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ]
})
