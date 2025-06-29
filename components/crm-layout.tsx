"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calendar, Users, FileText, CreditCard, Settings, BarChart3, Menu, X, TrendingUp, AlertTriangle, Plus } from "lucide-react"

const navigationItems = [
  { icon: BarChart3, label: "Dashboard", href: "/" },
  { icon: Building2, label: "Organizace", href: "/organizace" },
  { icon: Calendar, label: "Tábory & Akce", href: "/tabory" },
  { icon: FileText, label: "Přihlášky", href: "/prihlasky" },
  { icon: Users, label: "Účastníci", href: "/ucastnici" },
  { icon: CreditCard, label: "Platby", href: "/platby" },
  { icon: Settings, label: "Nastavení", href: "/nastaveni" },
]

const stats = [
  {
    title: "Celkem přihlášek",
    value: "247",
    change: "+12%",
    icon: FileText,
    color: "bg-blue-300",
  },
  {
    title: "Aktivní tábory",
    value: "8",
    change: "+2",
    icon: Calendar,
    color: "bg-green-300",
  },
  {
    title: "Účastníci",
    value: "189",
    change: "+8%",
    icon: Users,
    color: "bg-pink-300",
  },
  {
    title: "Nevyřízené platby",
    value: "23",
    change: "-5",
    icon: CreditCard,
    color: "bg-red-300",
  },
]

const recentActivities = [
  {
    type: "Nová přihláška",
    description: "Tomáš Svoboda - Letní tábor 2024",
    time: "před 5 min",
    status: "new",
  },
  {
    type: "Platba přijata",
    description: "Anna Nováková - záloha 2000 Kč",
    time: "před 15 min",
    status: "success",
  },
  {
    type: "Upozornění",
    description: "Kapacita tábora Sluníčko téměř naplněna",
    time: "před 1 hod",
    status: "warning",
  },
  {
    type: "Přihláška zrušena",
    description: "Petr Dvořák - Sportovní soustředění",
    time: "před 2 hod",
    status: "cancelled",
  },
]

interface CRMLayoutProps {
  children: React.ReactNode
}

export function CRMLayout({ children }: CRMLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-60 bg-yellow-300 border-4 border-black transform transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0
      `}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b-4 border-black flex-shrink-0">
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

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start text-left font-bold text-black hover:bg-yellow-400 border-2 border-transparent hover:border-black transition-all duration-200"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </div>
        </nav>

        {/* User info at bottom */}
        <div className="p-4 flex-shrink-0">
          <div className="bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="font-bold text-black">Jan Novák</div>
            <div className="text-sm text-gray-600">Admin</div>
            <div className="text-xs text-gray-500">Letní tábor Sluníčko</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="bg-white border-b-4 border-black h-16 flex items-center justify-between px-4">
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
        </div>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
