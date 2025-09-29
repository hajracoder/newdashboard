















"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
 
   DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  ChevronLeft, ChevronRight,ListFilter,Search, ChevronsUpDownIcon } from "lucide-react";
import Link from "next/link";

import { useState } from "react";



interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends { status?: string }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [pageSize, setPageSize] = useState(10);
 

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });


    const [date, setDate] = useState<Date | undefined>()

  return (
    <div className="space-y-4">
      {/* Top Controls */}
    {/* Top Controls */}
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
      {/* Left: Filter + Status + Date */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        {/* Location Filter */}
        <div className="relative w-full sm:w-[240px]">
          <Input
            placeholder="Filter by name or venue"
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-8 w-full"
          />
        </div>

        {/* Status Dropdown */}
     <Select
  value={statusFilter}
  onValueChange={(val) => setStatusFilter(val)}
>
  <SelectTrigger className="w-full sm:w-[150px]">
    <SelectValue placeholder="All Status" />
  </SelectTrigger>
  <SelectContent>
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search status" className="pl-8" />
    </div>
    <SelectItem value="All">All</SelectItem>
    <SelectItem value="Pending">Pending</SelectItem>
    <SelectItem value="Confirmed">Confirmed</SelectItem>
    <SelectItem value="Cancelled">Cancelled</SelectItem>
    <SelectItem value="Completed">Completed</SelectItem>
    
  </SelectContent>
</Select>

        {/* Date Picker */}
 <Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className="w-full sm:w-[160px] justify-between"
    >
      {date ? format(date, "PPP") : "Select Date"}
      <ChevronsUpDownIcon className="ml-2 h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>

  <PopoverContent className="w-auto p-0" align="start">
    <div className="flex flex-col">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        initialFocus
      />
      <div className="flex justify-center m-2 border-t">
        <Button 
          onClick={() => console.log("Selected Date:", date)} 
          className=" bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90  m-4  p-4 w-full"
        >
          Apply
        </Button>
      </div>
    </div>

  </PopoverContent>
</Popover>


      </div>

      {/* Right: View Columns + Add Location */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
        {/* View Columns Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              View <ListFilter className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table.getAllColumns().map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value: boolean) =>
                  column.toggleVisibility(value)
                }
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Add Location Button */}
        <Link href="/inquiries/add" className="w-full sm:w-auto">
          <button className="px-3 py-2 bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90  w-full sm:w-auto">
            Add Inquiry
          </button>
        </Link>
      </div>
    </div>

      {/* Table */}
      <div className="rounded-md border shadow-sm overflow-x-auto   mx-auto">
        <Table className="min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/40">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-sm font-semibold whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table
              .getRowModel()
              .rows.filter((row) =>
                statusFilter === "All"
                  ? true
                  : row.original.status === statusFilter
              )
              .map((row, i) => (
                <TableRow
                  key={row.id}
                  className={
                    i % 2 === 0
                      ? "bg-white hover:bg-muted/30"
                      : "bg-muted/10 hover:bg-muted/30"
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-sm whitespace-nowrap"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-2">
        {/* Page size selector */}
        <div className="flex items-center gap-2">
          <Select
            value={String(pageSize)}
            onValueChange={(val) => {
              setPageSize(Number(val));
              table.setPageSize(Number(val));
            }}
          >
            <SelectTrigger className="w-[80px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>

          <span className="text-sm text-muted-foreground">
            Showing{" "}
            {table.getState().pagination.pageIndex *
              table.getState().pagination.pageSize +
              1}{" "}
            –{" "}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
              data.length
            )}{" "}
            of {data.length}
          </span>
        </div>

        {/* Pagination buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>

          <span className="px-3 py-1 border rounded-md">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}













