

// "use client"

// import { useEffect, useState } from "react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Checkbox } from "@/components/ui/checkbox"
// import { ChevronDown, ChevronsUpDownIcon, Eye, Plus } from "lucide-react"

// export default function LocationPage() {
//   const [data, setData] = useState<
//     { id: number; name: string; inquiries: number; reservations: number; status: string }[]
//   >([])

//   useEffect(() => {
//     const generated = Array.from({ length: 10 }).map((_, i) => ({
//       id: i + 1,
//       name: `Sample Location ${i + 1}`,
//       inquiries: Math.floor(Math.random() * 10),
//       reservations: Math.floor(Math.random() * 5),
//       status: "Active",
//     }))
//     setData(generated)
//   }, [])

//   return (
//     <div className="p-6 bg-white  space-y-6">
//       {/* Header Section */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold">Location Management</h2>

//         <div className="flex justify-between items-center">
//           {/* Left side */}
//           <div className="flex items-center gap-3">
//             <Input placeholder="Filter by location name" className="max-w-sm" />

//             {/* Status Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" className="items-center gap-1">
//                   All Status
//                   <ChevronsUpDownIcon className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-48">
//                 <div className="p-2">
//                   <Input placeholder="Search status..." />
//                 </div>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Active</DropdownMenuItem>
//                 <DropdownMenuItem>Inactive</DropdownMenuItem>
//                 <DropdownMenuItem>Pending</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {/* Right side */}
      //     <div className="flex items-center gap-3">
      //       {/* View Dropdown */}
          //   <DropdownMenu>
          //     <DropdownMenuTrigger asChild>
          //       <Button variant="outline" className="flex items-center gap-1">
          //         <Eye className="h-5 w-5" />
          //         View
          //       </Button>
          //     </DropdownMenuTrigger>
          //     <DropdownMenuContent className="w-56">
          //       <DropdownMenuLabel>Choose columns</DropdownMenuLabel>
          //       <DropdownMenuSeparator />
          //       <DropdownMenuItem>
          //         <Checkbox className="mr-2" /> ID
          //       </DropdownMenuItem>
          //       <DropdownMenuItem>
          //         <Checkbox className="mr-2" /> Location Name
          //       </DropdownMenuItem>
          //       <DropdownMenuItem>
          //         <Checkbox className="mr-2" /> Inquiries
          //       </DropdownMenuItem>
          //       <DropdownMenuItem>
          //         <Checkbox className="mr-2" /> Reservations
          //       </DropdownMenuItem>
          //       <DropdownMenuItem>
          //         <Checkbox className="mr-2" /> Status
          //       </DropdownMenuItem>
          //     </DropdownMenuContent>
          //   </DropdownMenu>

          //   {/* Add Location Button */}
          //   <Button>
          //     <Plus className="h-4 w-4 mr-1" />
          //     Add Location
          //   </Button>
          // </div>
      //   </div>
      // </div>

//       {/* Table Section */}
  
//     </div>
//   )
// }


import { DataTable } from "./data-table"
import { columns } from "./columns"
import { locations } from "./locations"




export default function LocationsPage() {
  return (
    <div className=" py-8 px-8 bg-white">
      <h1 className="text-3xl text-black py-4 font-extrabold ">Location Management</h1>
      <DataTable columns={columns} data={locations}  />
    </div>
  )
}