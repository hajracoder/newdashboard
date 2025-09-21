// import { Sidebar } from "lucide-react"
import Sidebar from "@/components/Sidebar"

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome 👋</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This is your content area.
        </p>
      </main>
    </div>
  )
}
