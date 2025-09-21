"use client"

import "./globals.css"
import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import { Toaster } from "sonner"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(true)
  const pathname = usePathname()

  // login/signup page me sidebar/topbar hide
  const authPages = ["/login", "/signup"]
  const isAuthPage = authPages.includes(pathname)

  return (
    <html lang="en">
      <body className="h-screen">
        {isAuthPage ? (
          <main className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        ) : (
          <div className="flex h-full">
            <Sidebar showSidebar={showSidebar} />
            <div className="flex flex-col flex-1">
              <Topbar
                showSidebar={showSidebar}
                onToggleSidebar={() => setShowSidebar(!showSidebar)}
              />
              <main className="flex-1 bg-gray-50 dark:bg-gray-800 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        )}

        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
