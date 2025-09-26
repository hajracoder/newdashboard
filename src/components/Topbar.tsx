


"use client"

import { PanelLeftOpen, PanelLeftClose } from "lucide-react"

type TopbarProps = {
  onToggleSidebar: () => void
  showSidebar: boolean
}

export default function Topbar({ onToggleSidebar, showSidebar }: TopbarProps) {
  return (
    <header className="h-16 border-b w-full bg-white dark:bg-gray-900 shadow flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 border-r"
        >
          {showSidebar ? <PanelLeftClose className="w-6 h-6" /> : <PanelLeftOpen className="w-6 h-6" />}
        </button>
        <h1 className="font-semibold text-lg">Dashboard</h1>
      </div>
    </header>
  )
}
