import { M_PLUS_1p } from "next/font/google"
import "./globals.css"
import type React from "react"

const mPlus1p = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-m-plus-1p",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mPlus1p.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}