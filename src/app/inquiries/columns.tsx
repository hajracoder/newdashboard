"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Inquiries } from "./inquiries"
import { Scroll } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash, ChevronsUpDown,MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export const columns: ColumnDef<Inquiries>[] = [
 {
  accessorKey: "id",
  header: ({ column }) => (
    <Button
      variant="ghost"
      className="px-2"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      ID
      <ChevronsUpDown className="h-4 w-4 ml-1" />
    </Button>
  ),
  cell: ({ row }) => {
    const id = row.getValue("id") as string
    return (
      <a
        href="#"
        className="text-blue-600 underline"
      >
        {id}
      </a>
    )
  },
},

 
 
  {
    accessorKey: "contactPerson",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Contact Person
        <ChevronsUpDown className="h-4 w-4 ml-1" />
      </Button>
    ),
  },
 {
  accessorKey: "venue",
  header: ({ column }) => (
    <Button
      variant="ghost"
      className="px-2"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Venue
      <ChevronsUpDown className="h-4 w-4 ml-1" />
    </Button>
  ),
 
},

  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ChevronsUpDown className="h-4 w-4 ml-1" />
      </Button>
    ),
  },
  {
    accessorKey: "eventDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Event Date
      
      </Button>
    ),
  },
 {
  accessorKey: "deadline",
  header: ({ column }) => (
    <Button
      variant="ghost"
      className="px-2"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Dead Line
      
    </Button>
  ),
 
  },
{
  accessorKey: "eventType",
  header: "Event Type",
  cell: ({ row }) => {
    const type = row.original.eventType
    return (
     <Badge
  variant="outline"
  className="px-2 py-1 outline-none focus:outline-none ring-0 focus:ring-0"
>
  {type}
</Badge>
    )
  },
}

,
  {
    accessorKey: "guests",
    header: () => (
      <div className="flex items-center gap-1">
        Guests 
      </div>
    ),
  },

{
  accessorKey: "notes",
  header: "Notes",
  cell: ({ row }) => {
    const notes = row.original.notes
    return (
      <div className="flex items-center justify-center">
        {notes ? (
           <span className="text-gray-400">—</span>
        
        ) : (
           <Scroll size={30} className="text-black-600" />
        )}
      </div>
    )
  },
},

  {
    accessorKey: "status",
    header: () => (
      <div className="flex items-center gap-1">
       Status 
       <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
      cell: ({ row }) => {
    const type = row.original.status
    return (
      <Badge variant="secondary" className="px-2 py-1">
        {type}
      </Badge>
    )
  },
  },
 
 
 
 {
  id: "actions",
  header: "Actions",
  cell: ({ row }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log("Edit", row.original)}>
          <Edit className="h-4 w-4 mr-2" /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Delete", row.original)}>
          <Trash className="h-4 w-4 mr-2" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
},
]
