"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Location } from "./locations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash, MapPin, ChevronsUpDown,MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export const columns: ColumnDef<Location>[] = [
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
    accessorKey: "image",
    header: () => (
    <div className="flex items-center gap-1">
      Image <ChevronsUpDown className="h-4 w-4" />
    </div>
  ),
    cell: () => (
      <div className="w-[100px] h-[100px] flex items-center justify-center border border-gray-300 rounded bg-gray-100 text-gray-500 text-xs">
        100 × 100
      </div>
    ),
  },
  {
    accessorKey: "mapLink",
   header: () => (
    <div className="flex items-center gap-1">
      Map <ChevronsUpDown className="h-4 w-4" />
    </div>
  ),
    cell: ({ row }) => {
      const mapLink = row.getValue("mapLink") as string
      return (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" flex text-gray-400 items-center gap-1"
        >
          no link
        </a>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Location Name
        <ChevronsUpDown className="h-4 w-4 ml-1" />
      </Button>
    ),
  },
 {
  accessorKey: "inquiries",
  header: ({ column }) => (
    <Button
      variant="ghost"
      className="px-2"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Inquiries
      <ChevronsUpDown className="h-4 w-4 ml-1" />
    </Button>
  ),
  cell: ({ row }) => {
    const value = row.getValue("inquiries") as number
    return (
      <a
        href="#"
        className="text-blue-600 underline"
      >
        {value}
      </a>
    )
  },
},

  {
    accessorKey: "reservations",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Reservations
        <ChevronsUpDown className="h-4 w-4 ml-1" />
      </Button>
    ),
  },
  {
    accessorKey: "overall",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Overall
        <ChevronsUpDown className="h-4 w-4 ml-1" />
      </Button>
    ),
  },
 {
  accessorKey: "status",
  header: ({ column }) => (
    <Button
      variant="ghost"
      className="px-2"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Status
      <ChevronsUpDown className="h-4 w-4 ml-1" />
    </Button>
  ),
  cell: ({ row }) => {
    const status = row.getValue("status") as string
    return (
      <Badge
        className={`px-3 py-1 ${
          status === "Active"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        {status}
      </Badge>
    )
  },
},

  {
    accessorKey: "minCapacity",
    header: () => (
      <div className="flex items-center gap-1">
        Min Capacity <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
  },
  {
    accessorKey: "maxCapacity",
    header: () => (
      <div className="flex items-center gap-1">
        Max Capacity <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: () => (
      <div className="flex items-center gap-1">
        Address <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
  },
  {
    accessorKey: "primaryPhone",
    header: () => (
      <div className="flex items-center gap-1">
        Primary Phone <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
  },
  {
    accessorKey: "secondaryPhone",
    header: () => (
      <div className="flex items-center gap-1">
        Secondary Phone <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
  },
  {
    accessorKey: "attributes",
    header: () => (
      <div className="flex items-center gap-1">
        Attributes <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      const attrs = row.getValue("attributes") as string[]
      return (
        <div className="flex gap-2 flex-wrap">
          {attrs.map((attr, i) => (
            <Badge key={i} variant="outline" className="px-2 py-1">
              {attr}
            </Badge>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "eventTypes",
    header: () => (
      <div className="flex items-center gap-1">
        Event Types <ChevronsUpDown className="h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      const types = row.getValue("eventTypes") as string[]
      return (
        <div className="flex gap-2 flex-wrap">
          {types.map((type, i) => (
            <Badge key={i} variant="secondary" className="px-2 py-1">
              {type}
            </Badge>
          ))}
        </div>
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
