import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ClientWrapper } from "@/components/client-wrapper"

export const metadata: Metadata = {
  title: "GiaCongGiaTot",
  description: "Nền tảng kết nối gia công cơ khí hàng đầu Việt Nam",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
