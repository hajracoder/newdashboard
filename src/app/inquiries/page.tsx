
// import { DataTable } from "./data-table"
// // import { columns } from "./columns"
// import { inquiries } from "./inquiries"
// import {columns} from "./columns"
// export default function LocationsPage() {
//   return (
//     <div className=" py-8 px-8 bg-white">
//       <h1 className="text-3xl text-black py-4 font-extrabold ">Inquiry Oversight</h1>
//       <DataTable columns={columns as any} data={inquiries}  />
//     </div>
//   )
// }


"use client"

import { DataTable } from "./data-table"
// import { columns } from "./columns"
import { inquiries } from "./inquiries"
import { columns } from "./columns"
import { ColumnDef } from "@tanstack/react-table"

// Data array ka type
type Inquiry = typeof inquiries[number]

// Columns ko typed karo
const typedColumns: ColumnDef<Inquiry>[] = columns as ColumnDef<Inquiry>[]

export default function LocationsPage() {
  return (
    <div className="py-8 px-8 bg-white">
      <h1 className="text-3xl text-black py-4 font-extrabold">Inquiry Oversight</h1>
      <DataTable<Inquiry, unknown> columns={typedColumns} data={inquiries} />

    </div>
  )
}
