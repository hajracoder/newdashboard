








"use client"

import "./globals.css"
import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import { Toaster } from "sonner"  // 👈 Import Toaster

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar showSidebar={showSidebar} />

        <div className="flex flex-col flex-1">
          <Topbar
            showSidebar={showSidebar}
            onToggleSidebar={() => setShowSidebar(!showSidebar)}
          />
          <main className="flex-1  bg-gray-50 dark:bg-gray-800 overflow-y-auto">
            {children}
          </main>
        </div>

        {/* 👇 Toaster for Hero Messages */}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
