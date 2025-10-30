import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import BottomNavigation from "@/components/bottom-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Linchans",
  description: "Your favorite coffee, now closer to you",
    generator: 'Logisaar'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50 pb-20">{children}</main>
        <BottomNavigation />
        <footer>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#777', marginTop: '20px' }}>
            © 2025 All Rights Reserved | Made by
            <a href="https://logisaar.in" target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>
              Logisaar
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
