

















"use client"

import React, { useState, useEffect, useMemo } from "react"
import { Edit, Trash2, MoreHorizontal, ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react"
import { toast } from "sonner"

import AddUser from "./adduser"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { dummyUsers } from "./dummyUsers"


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"

import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table"

type User = {
  name: string
  email: string
  role: string
  status: string
  password: string
}

type SortConfig = {
  key: keyof User
  direction: "asc" | "desc"
} | null

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>(dummyUsers)
  const [mounted, setMounted] = useState(false)

  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
 const [rowsPerPage] = useState(10)

  const [sortConfig, setSortConfig] = useState<SortConfig>(null)

  // Confirmation modal
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmMessage, setConfirmMessage] = useState("")
  const [confirmAction, setConfirmAction] = useState<null | (() => void)>(null)

  const askConfirmation = (message: string, action: () => void) => {
    setConfirmMessage(message)
    setConfirmAction(() => action)
    setConfirmOpen(true)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const openEditModal = (user: User) => {
    toast(`Edit user: ${user.name}`)
  }

  const handleDelete = (email: string) => {
    setUsers(prev => prev.filter(u => u.email !== email))
    toast.success("User deleted!")
  }

  const handleSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig?.key === key && sortConfig.direction === "asc") direction = "desc"
    setSortConfig({ key, direction })
  }

  // Memoized sorted users
  const sortedUsers = useMemo(() => {
    if (!sortConfig) return users
    const { key, direction } = sortConfig
    return [...users].sort((a, b) => {
      const aVal = a[key].toLowerCase()
      const bVal = b[key].toLowerCase()
      if (aVal < bVal) return direction === "asc" ? -1 : 1
      if (aVal > bVal) return direction === "asc" ? 1 : -1
      return 0
    })
  }, [users, sortConfig])

  // Memoized filtered users
  const filteredUsers = useMemo(() => {
    return sortedUsers.filter(
      u =>
        u.name.toLowerCase().includes(search.toLowerCase()) &&
        (roleFilter === "" || u.role === roleFilter)
    )
  }, [sortedUsers, search, roleFilter])

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage)
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage
    const end = start + rowsPerPage
    return filteredUsers.slice(start, end)
  }, [filteredUsers, currentPage, rowsPerPage])

  const renderSortIcon = (key: keyof User) => {
    const isSorted = sortConfig?.key === key
    const direction = sortConfig?.direction
    return (
      <div className="ml-2 h-4 w-4 relative inline-block">
        <ChevronsUpDown className={`h-4 w-4 ${isSorted ? "opacity-0" : "opacity-50"}`} />
        {isSorted && direction === "asc" && <ChevronUp className="h-4 w-4 absolute top-0 left-0" />}
        {isSorted && direction === "desc" && <ChevronDown className="h-4 w-4 absolute top-0 left-0" />}
      </div>
    )
  }

  const columns: ColumnDef<User>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "status", header: "Status" },
  ]

  const table = useReactTable({
    data: paginatedUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Search + Filter + Add */}
      <div className="flex items-center py-4 gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded max-w-xs"
        />

        <Select
          value={roleFilter || "all"}
          onValueChange={(val: string) => setRoleFilter(val === "all" ? "" : val)}
        >
          <SelectTrigger className="w-36">
            <SelectValue placeholder="All Roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="owner">Owner</SelectItem>
          </SelectContent>
        </Select>

        <AddUser onAdd={(newUser) => setUsers(prev => [...prev, newUser])} />
      </div>

      {mounted && (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {["name", "email", "role", "status"].map((key) => (
                  <TableHead
                    key={key}
                    className="cursor-pointer select-none"
                    onClick={() => handleSort(key as keyof User)}
                  >
                    <div className="flex items-center gap-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {renderSortIcon(key as keyof User)}
                    </div>
                  </TableHead>
                ))}
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => {
                  const user = row.original
                  return (
                    <TableRow key={user.email}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-white text-sm ${
                          user.status.toLowerCase() === "active" ? "bg-green-500" : "bg-gray-400"
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-5 h-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => askConfirmation("Edit this user?", () => openEditModal(user))}>
                              <Edit className="w-4 h-4 mr-2" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500" onClick={() => askConfirmation("Delete this user?", () => handleDelete(user.email))}>
                              <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center p-4 text-gray-500">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 w-full flex-wrap gap-2">
            <span className="text-sm">Page {currentPage} of {totalPages || 1}</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >Previous</Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
              >Next</Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>{confirmMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => { confirmAction?.(); setConfirmOpen(false) }}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
