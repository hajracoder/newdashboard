

























// "use client"

// import React, { useState, useEffect } from "react"
// import { Edit, Trash2, MoreHorizontal, ChevronUp, ChevronDown, ListFilter, ChevronsUpDownIcon } from "lucide-react"
// import { toast } from "sonner"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuCheckboxItem
// } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import {
//   useReactTable,
//   getCoreRowModel,
//   getPaginationRowModel,
//   ColumnDef,
// } from "@tanstack/react-table"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter
// } from "@/components/ui/dialog"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// import AddUser from "./adduser"

// type User = {
//   name: string
//   email: string
//   role: string
//   status: string
//   password: string
// }



// type SortConfig = {
//   key: keyof User
//   direction: "asc" | "desc"
// } | null

// export default function UserManagementPage() {
//   const [users, setUsers] = useState<User[]>([])
//   const [mounted, setMounted] = useState(false)

//   const [search, setSearch] = useState("")
//   const [roleFilter, setRoleFilter] = useState("")
//   const [editingIndex, setEditingIndex] = useState<number | null>(null)

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [role, setRole] = useState("admin")
//   const [status, setStatus] = useState("Active")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")

//   const [currentPage, setCurrentPage] = useState(1)
//   const [rowsPerPage, setRowsPerPage] = useState(10)

//   const [sortConfig, setSortConfig] = useState<SortConfig>(null)

//   // confirmation modal state
//   const [confirmOpen, setConfirmOpen] = useState(false)
//   const [confirmMessage, setConfirmMessage] = useState("")
//   const [confirmAction, setConfirmAction] = useState<null | (() => void)>(null)

//   const askConfirmation = (message: string, action: () => void) => {
//     setConfirmMessage(message)
//     setConfirmAction(() => action)
//     setConfirmOpen(true)
//   }

//   useEffect(() => {
//     const saved = localStorage.getItem("users")
//     if (saved) setUsers(JSON.parse(saved))
//     setMounted(true)
//   }, [])

//   useEffect(() => {
//     if (mounted) localStorage.setItem("users", JSON.stringify(users))
//   }, [users, mounted])

//   const openEditModal = (index: number) => {
//     const u = users[index]
//     setName(u.name)
//     setEmail(u.email)
//     setRole(u.role)
//     setStatus(u.status)
//     setPassword(u.password)
//     setConfirmPassword(u.password)
//     setEditingIndex(index)
//     document.getElementById("open-add-user-modal")?.click() // trigger AddUser modal
//   }

//   const handleSort = (key: keyof User) => {
//     let direction: "asc" | "desc" = "asc"
//     if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc"
//     }
//     setSortConfig({ key, direction })
//   }

//   const handleDelete = (index: number) => {
//   const updated = users.filter((_, i) => i !== index)
//   setUsers(updated)
//   toast.success("User deleted!")
// }


//   const sortedUsers = React.useMemo(() => {
//     if (!sortConfig) return users
//     const { key, direction } = sortConfig
//     return [...users].sort((a, b) => {
//       const aVal = a[key].toLowerCase()
//       const bVal = b[key].toLowerCase()
//       if (aVal < bVal) return direction === "asc" ? -1 : 1
//       if (aVal > bVal) return direction === "asc" ? 1 : -1
//       return 0
//     })
//   }, [users, sortConfig])

//   const filteredUsers = sortedUsers.filter(
//     (u) =>
//       u.name.toLowerCase().includes(search.toLowerCase()) &&
//       (roleFilter === "" || u.role === roleFilter)
//   )

//   const totalPages = Math.ceil(filteredUsers.length / rowsPerPage)

//   const paginatedUsers = filteredUsers.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   )

//   const renderSortIcon = (key: keyof User) => {
//     const isSorted = sortConfig?.key === key
//     const direction = sortConfig?.direction

//     return (
//       <div className="ml-2 h-4 w-4 relative inline-block">
//         <ChevronsUpDownIcon className={`h-4 w-4 ${isSorted ? "opacity-0" : "opacity-50"}`} />
//         {isSorted && direction === "asc" && <ChevronUp className="h-4 w-4 absolute top-0 left-0" />}
//         {isSorted && direction === "desc" && <ChevronDown className="h-4 w-4 absolute top-0 left-0" />}
//       </div>
//     )
//   }

//   const columns: ColumnDef<User>[] = [
//     { accessorKey: "name", header: "Name" },
//     { accessorKey: "email", header: "Email" },
//     { accessorKey: "role", header: "Role" },
//     { accessorKey: "status", header: "Status" },
//   ]

//   const table = useReactTable({
//     data: users,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   })

//   return (
//     <div className="p-6 bg-white rounded-lg">
//       <h1 className="text-2xl font-bold">User Management</h1>

//       <div className="flex items-center py-4 gap-2">
//         <Input
//           placeholder="Search by name"
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//           className="max-w-xs"
//         />

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline">
//               {roleFilter || "All Roles"} <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem onClick={() => setRoleFilter("")}>All</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setRoleFilter("admin")}>Admin</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setRoleFilter("sales")}>Sales</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setRoleFilter("owner")}>Owner</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               <ListFilter className="ml-2 h-4 w-4" /> View
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table.getAllColumns().map((column) => (
//               <DropdownMenuCheckboxItem
//                 key={column.id}
//                 className="capitalize"
//                 checked={column.getIsVisible()}
//                 onCheckedChange={(value) => column.toggleVisibility(!!value)}
//               >
//                 {column.id}
//               </DropdownMenuCheckboxItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <AddUser  />

//       </div>

//       {mounted && (
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 {["name", "email", "role", "status"].map((key) => (
//                   <TableHead key={key} className="cursor-pointer select-none" onClick={() => handleSort(key as keyof User)}>
//                     <div className="flex items-center gap-1">
//                       {key.charAt(0).toUpperCase() + key.slice(1)}
//                       {renderSortIcon(key as keyof User)}
//                     </div>
//                   </TableHead>
//                 ))}
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {paginatedUsers.map((user, i) => (
//                 <TableRow key={i}>
//                   <TableCell>{user.name}</TableCell>
//                   <TableCell>{user.email}</TableCell>
//                   <TableCell>{user.role}</TableCell>
//                   <TableCell>
//                     <span className={`px-2 py-1 rounded text-white text-sm ${user.status.toLowerCase() === "active" ? "bg-green-500" : "bg-gray-400"}`}>
//                       {user.status}
//                     </span>
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoreHorizontal className="w-5 h-5" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => askConfirmation("Edit this user?", () => openEditModal((currentPage - 1) * rowsPerPage + i))}>
//                           <Edit className="w-4 h-4 mr-2" /> Edit
//                         </DropdownMenuItem>
//                         <DropdownMenuItem
//   className="text-red-500"
//   onClick={() =>
//     askConfirmation("Delete this user?", () =>
//       handleDelete((currentPage - 1) * rowsPerPage + i)
//     )
//   }
// >

//                           <Trash2 className="w-4 h-4 mr-2" /> Delete
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))}
//               {paginatedUsers.length === 0 && (
//                 <TableRow>
//                   <TableCell colSpan={5} className="text-center p-4 text-gray-500">
//                     No users found.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>

//           <div className="flex justify-between items-center mt-4 w-full">
//             <div className="flex items-center gap-4">
//               <Select value={rowsPerPage.toString()} onValueChange={(val) => { setRowsPerPage(Number(val)); setCurrentPage(1); }}>
//                 <SelectTrigger className="w-24"><SelectValue /></SelectTrigger>
//                 <SelectContent>
//                   {[10,20,30,40,50].map((num) => (<SelectItem key={num} value={num.toString()}>{num}</SelectItem>))}
//                 </SelectContent>
//               </Select>
//               <span className="text-sm">Page {currentPage} of {totalPages || 1}</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <Button variant="outline" onClick={() => setCurrentPage((p) => Math.max(p-1,1))} disabled={currentPage===1}>Previous</Button>
//               <Button variant="outline" onClick={() => setCurrentPage((p) => Math.min(p+1,totalPages))} disabled={currentPage===totalPages || totalPages===0}>Next</Button>
//             </div>
//           </div>
//         </div>
//       )}

//       <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Are you sure?</DialogTitle>
//             <DialogDescription>{confirmMessage}</DialogDescription>
//           </DialogHeader>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
//             <Button variant="destructive" onClick={() => { if(confirmAction) confirmAction(); setConfirmOpen(false); }}>Confirm</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }


























"use client"

import React, { useState, useEffect } from "react"
import { Edit, Trash2, MoreHorizontal, ChevronUp, ChevronDown, ListFilter, ChevronsUpDown } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
} from "@tanstack/react-table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import AddUser from "./adduser"

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
  const [users, setUsers] = useState<User[]>([])
  const [mounted, setMounted] = useState(false)

  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("")
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const [sortConfig, setSortConfig] = useState<SortConfig>(null)

  // confirmation modal state
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmMessage, setConfirmMessage] = useState("")
  const [confirmAction, setConfirmAction] = useState<null | (() => void)>(null)

  const askConfirmation = (message: string, action: () => void) => {
    setConfirmMessage(message)
    setConfirmAction(() => action)
    setConfirmOpen(true)
  }

  useEffect(() => {
    const saved = localStorage.getItem("users")
    if (saved) setUsers(JSON.parse(saved))
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) localStorage.setItem("users", JSON.stringify(users))
  }, [users, mounted])

  const openEditModal = (index: number) => {
    const u = users[index]
    setEditingIndex(index)
    // Pass data to AddUser sheet via props if needed
  }

  const handleDelete = (index: number) => {
    const updated = users.filter((_, i) => i !== index)
    setUsers(updated)
    toast.success("User deleted!")
  }

  const handleSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  const sortedUsers = React.useMemo(() => {
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

  const filteredUsers = sortedUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) &&
      (roleFilter === "" || u.role === roleFilter)
  )

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage)

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  const renderSortIcon = (key: keyof User) => {
    const isSorted = sortConfig?.key === key
    const direction = sortConfig?.direction

    return (
      <div className="ml-2 h-4 w-4 relative inline-block">
        <ChevronsUpDown
          className={`h-4 w-4 ${isSorted ? "opacity-0" : "opacity-50"}`}
        />
        {isSorted && direction === "asc" && (
          <ChevronUp className="h-4 w-4 absolute top-0 left-0" />
        )}
        {isSorted && direction === "desc" && (
          <ChevronDown className="h-4 w-4 absolute top-0 left-0" />
        )}
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
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold">User Management</h1>

      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Search by name"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="max-w-xs"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {roleFilter ? roleFilter : "All Roles"} <ChevronsUpDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setRoleFilter("")}>All</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter("admin")}>Admin</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter("sales")}>Sales</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter("owner")}>Owner</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <ListFilter className="ml-2 h-4 w-4" /> View
            </Button>
          </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
  {table.getAllColumns().map((column) => (
    <DropdownMenuCheckboxItem
      key={column.id}
      className="capitalize"
      checked={column.getIsVisible()} // column instance method
      onCheckedChange={(value: boolean) => column.toggleVisibility(value)}
    >
      {column.id}
    </DropdownMenuCheckboxItem>
  ))}
</DropdownMenuContent>

        </DropdownMenu>

        <AddUser />
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
              {paginatedUsers.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        user.status.toLowerCase() === "active"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    >
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
                        <DropdownMenuItem
                          onClick={() =>
                            askConfirmation("Edit this user?", () =>
                              openEditModal((currentPage - 1) * rowsPerPage + i)
                            )
                          }
                        >
                          <Edit className="w-4 h-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-500"
                          onClick={() =>
                            askConfirmation("Delete this user?", () =>
                              handleDelete((currentPage - 1) * rowsPerPage + i)
                            )
                          }
                        >
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {paginatedUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center p-4 text-gray-500">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 w-full">
            <div className="flex items-center gap-4">
              <Select
                value={rowsPerPage.toString()}
                onValueChange={(val) => {
                  setRowsPerPage(Number(val))
                  setCurrentPage(1) // reset page on rows change
                }}
              >
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[10, 20, 30, 40, 50].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <span className="text-sm">
                Page {currentPage} of {totalPages || 1}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                Next
              </Button>
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
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (confirmAction) confirmAction()
                setConfirmOpen(false)
              }}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
