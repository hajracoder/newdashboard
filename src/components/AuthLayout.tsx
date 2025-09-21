"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem("isAuth")
    if (!auth) router.push("/login")
  }, [router])

  return (
    <div className="flex h-screen">
      <Sidebar showSidebar={showSidebar} />
      <div className="flex flex-col flex-1">
        <Topbar
          showSidebar={showSidebar}
          onToggleSidebar={() => setShowSidebar(!showSidebar)}
        />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
