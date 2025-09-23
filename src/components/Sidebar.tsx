"use client"

import { Home, LayoutDashboard, User, MapPin, Shapes, Tags, Calendar } from "lucide-react"
import Link from "next/link"

export default function Sidebar({ showSidebar }: { showSidebar: boolean }) {
  if (!showSidebar) return null // agar off hai to sidebar hi na dikhaye

  return (
    <aside className="w-64 max-h-full bg-gray-50 dark:bg-gray-900 shadow-lg flex flex-col transition-all duration-300">
      <div className="h-16 flex items-center justify-center bold text-lg  dark:border-gray-700">
        Inquiry Managemet System
      </div>

      <nav className="flex-1 p-2 space-y-2">
        <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <LayoutDashboard className="w-5 h-5" /> Dashboard
        </Link>
        <Link href="/inquiries" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Home className="w-5 h-5" /> Inquiries
        </Link>
        <Link href="/users" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <User className="w-5 h-5" /> Users
        </Link>
        <Link href="/locations" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <MapPin className="w-5 h-5" /> Locations
        </Link>
        <Link href="/attributes" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Tags className="w-5 h-5" /> Attributes
        </Link>
        <Link href="/eventtypes" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Shapes className="w-5 h-5" /> Event Types
        </Link>
        <Link href="/calendar" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Calendar className="w-5 h-5" /> Calendar
        </Link>
      </nav>

      <div className="p-4 border-t dark:border-gray-700">
        <p className="text-sm font-medium">Admin</p>
        <p className="text-xs text-gray-500">hajra@system.com</p>
      </div>
    </aside>
  )
}






