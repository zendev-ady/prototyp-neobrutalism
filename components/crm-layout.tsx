"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Building2, Calendar, Users, FileText, CreditCard, Settings, BarChart3, Menu, X } from "lucide-react"

const navigationItems = [
  { icon: BarChart3, label: "Dashboard", href: "/" },
  { icon: Building2, label: "Organizace", href: "/organizace" },
  { icon: Calendar, label: "Tábory & Akce", href: "/tabory" },
  { icon: FileText, label: "Přihlášky", href: "/prihlasky" },
  { icon: Users, label: "Účastníci", href: "/ucastnici" },
  { icon: CreditCard, label: "Platby", href: "/platby" },
  { icon: Settings, label: "Nastavení", href: "/nastaveni" },
]

interface CRMLayoutProps {
  children: React.ReactNode
}

export function CRMLayout({ children }: CRMLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (href: string) => {
    router.push(href)
    setSidebarOpen(false) // Close mobile sidebar after navigation
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-60 bg-yellow-300 border-r-4 border-black transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:flex lg:flex-col
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4">
          <h1 className="text-xl font-black text-black">TÁBORY CRM</h1>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-yellow-400 border-2 border-black"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => handleNavigation(item.href)}
                className={`w-full justify-start text-left font-bold text-black hover:bg-yellow-400 border-2 transition-all duration-200 ${
                  pathname === item.href ? "border-black bg-yellow-400" : "border-transparent hover:border-black"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </div>
        </nav>

        {/* User info */}
        <div className="p-4">
          <div className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="font-bold text-black">Jan Novák</div>
            <div className="text-sm text-gray-600">Admin</div>
            <div className="text-xs text-gray-500">Letní tábor Sluníčko</div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b-4 border-black h-16 flex items-center justify-between px-4 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden border-2 border-black hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>

          <div className="flex items-center space-x-4">
            <div className="bg-green-300 border-2 border-black px-3 py-1 font-bold text-sm">AKTIVNÍ SEZÓNA 2024</div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
