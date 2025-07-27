"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Tag, Menu, ImageIcon, Info } from "lucide-react"

export default function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/offers", icon: Tag, label: "Offers" },
    { href: "/menu", icon: Menu, label: "Menu" },
    { href: "/gallery", icon: ImageIcon, label: "Gallery" },
    { href: "/about", icon: Info, label: "About" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-4 py-2 z-50 shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-lime-700 bg-lime-100 scale-110 shadow-md"
                  : "text-gray-500 hover:text-lime-700 hover:bg-lime-50/50"
              }`}
            >
              <div className={`relative ${isActive ? "animate-pulse" : ""}`}>
                <Icon size={24} className="mb-1" />
                {isActive && <div className="absolute -top-1 -right-1 w-2 h-2 bg-lime-700 rounded-full shadow-lg"></div>}
              </div>
              <span className={`text-xs font-medium ${isActive ? "font-bold" : ""}`}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
