






















// "use client"

// import { Home, LayoutDashboard, User, MapPin, Shapes, Tags, Calendar, X } from "lucide-react"
// import Link from "next/link"

// type SidebarProps = {
//   showSidebar: boolean
//   onCloseSidebar?: () => void
// }

// export default function Sidebar({ showSidebar, onCloseSidebar }: SidebarProps) {
//   return (
//     <>
//      {/* Mobile overlay */}
// <div
//   className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity ${
//     showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
//   }`}
//   onClick={onCloseSidebar}
// />

// {/* Sidebar */}
// <aside
//   className={`
//     fixed top-0 left-0 h-full bg-gray-50 dark:bg-gray-900 shadow-lg flex flex-col z-50 transition-transform duration-300
//     ${showSidebar ? "translate-x-0" : "-translate-x-full"} w-64
//   `}
// >

//         {/* Mobile Close Button */}
//         <div className="h-16 flex items-center bg-white justify-between px-4 md:hidden">
      
//           <button onClick={onCloseSidebar} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Desktop Logo */}
//        <div
//   className={`h-16 flex items-center justify-center font-bold text-lg border-b dark:border-gray-700
//     ${showSidebar ? "flex" : "hidden"} md:flex`}
// >
//   Inquiry Management System
// </div>


//         {/* Nav Links */}
//         <nav className="flex-1 p-2 space-y-2">
//           <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <LayoutDashboard className="w-5 h-5" /> Dashboard
//           </Link>
//           <Link href="/inquiries" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <Home className="w-5 h-5" /> Inquiries
//           </Link>
//           <Link href="/users" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <User className="w-5 h-5" /> Users
//           </Link>
//           <Link href="/locations" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <MapPin className="w-5 h-5" /> Locations
//           </Link>
//           <Link href="/attributes" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <Tags className="w-5 h-5" /> Attributes
//           </Link>
//           <Link href="/eventtypes" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <Shapes className="w-5 h-5" /> Event Types
//           </Link>
//           <Link href="/calendar" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <Calendar className="w-5 h-5" /> Calendar
//           </Link>
//         </nav>

//         <div className="p-4 border-t dark:border-gray-700 hidden md:block">
//           <p className="text-sm font-medium">Admin</p>
//           <p className="text-xs text-gray-500">hajra@system.com</p>
//         </div>
//       </aside>
//     </>
//   )
// }










"use client"

import { Home, LayoutDashboard, User, MapPin, Shapes, Tags, Calendar, X } from "lucide-react"
import Link from "next/link"

type SidebarProps = {
  showSidebar: boolean
  onCloseSidebar?: () => void
}

export default function Sidebar({ showSidebar, onCloseSidebar }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity ${
          showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onCloseSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gray-50 dark:bg-gray-900 shadow-lg flex flex-col z-50 transition-transform duration-300
          ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
          w-64 md:w-56 lg:w-64
        `}
      >
       

        {/* Desktop Logo */}
        <div
          className={`h-16 flex items-center justify-center font-bold text-lg border-b dark:border-gray-700
            ${showSidebar ? "flex" : "hidden"} md:flex`}
        >
          Inquiry Management System
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto text-sm md:text-base">
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

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 hidden md:block text-sm">
          <p className="font-medium">Admin</p>
          <p className="text-xs text-gray-500 break-all">hajra@system.com</p>
        </div>
      </aside>
    </>
  )
}
