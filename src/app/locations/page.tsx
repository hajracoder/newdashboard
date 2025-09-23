// "use client";

// import React, { useState } from "react";
// import { Eye, Plus } from "lucide-react";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Pencil, Trash2 } from "lucide-react";


// const LocationPage = () => {
//   const [status, setStatus] = useState("all");

//   const statuses = ["All", "Active", "Inactive", "Pending"];

// const data = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/50",
//     mapLink: "https://maps.google.com",
//     locationName: "Venue A",
//     inquiries: 12,
//     reservations: 8,
//     overallStatus: "Active",
//     minCapacity: 50,
//     maxCapacity: 200,
//     address: "123 Main Street, City",
//     primaryPhone: "+123456789",
//     secondaryPhone: "+987654321",
//     attributes: "AC, Parking",
//     eventsTypes: "Wedding, Corporate",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/50",
//     mapLink: "https://maps.google.com",
//     locationName: "Venue B",
//     inquiries: 5,
//     reservations: 2,
//     overallStatus: "Inactive",
//     minCapacity: 20,
//     maxCapacity: 80,
//     address: "456 Park Avenue, City",
//     primaryPhone: "+111222333",
//     secondaryPhone: "+444555666",
//     attributes: "Garden, Stage",
//     eventsTypes: "Birthday, Concert",
//   },
// ];


 

//   return (
//     <>
//     <div className="p-6 space-y-6">
//       {/* Heading */}
//       <h1 className="text-2xl font-bold">Location Management</h1>

//       {/* Search + Status + Buttons */}
//       <div className="flex flex-wrap items-center gap-4">
//         {/* Search Bar */}
//         <div className="flex gap-2">
//           <Input placeholder="Filter by location name" className="w-64" />
//         </div>
//         {/* Status Dropdown */}
//   <Select onValueChange={setStatus} defaultValue={status}>
//   <SelectTrigger className="w-[160px] flex justify-between">
//     <div className="flex-1 text-left">
//       <SelectValue placeholder="All Status" />
//     </div>
//     {/* Sirf custom up/down icon */}
  
//   </SelectTrigger>
//   <SelectContent>
//     {statuses.map((s) => (
//       <SelectItem key={s} value={s.toLowerCase()}>
//         {s}
//       </SelectItem>
//     ))}
//   </SelectContent>
// </Select>
//         {/* Right Side Buttons */}
//         <div className="ml-auto flex gap-2">
//           <Button variant="outline" className="flex items-center gap-1">
//             <Eye size={16} /> View
//           </Button>
//           <Button className="flex items-center gap-1 bg-green-500 hover:bg-green-600">
//             <Plus size={16} /> Add Venue
//           </Button>
//         </div>
//       </div>

    
//     </div>

// <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
//       <div className="min-w-[1400px]"> {/* 👈 minimum width to enable scroll */}
//         <Table>
//           <TableCaption className="text-sm text-gray-500 p-2">
//             List of all venues and their details
//           </TableCaption>

//           <TableHeader className="bg-gray-100 sticky top-0 z-10">
//             <TableRow>
//               <TableHead className="whitespace-nowrap">ID</TableHead>
//               <TableHead className="whitespace-nowrap">Image</TableHead>
//               <TableHead className="whitespace-nowrap">Map Link</TableHead>
//               <TableHead className="whitespace-nowrap">Location Name</TableHead>
//               <TableHead className="whitespace-nowrap">Inquiries</TableHead>
//               <TableHead className="whitespace-nowrap">Reservations</TableHead>
//               <TableHead className="whitespace-nowrap">Status</TableHead>
//               <TableHead className="whitespace-nowrap">Min Capacity</TableHead>
//               <TableHead className="whitespace-nowrap">Max Capacity</TableHead>
//               <TableHead className="whitespace-nowrap">Address</TableHead>
//               <TableHead className="whitespace-nowrap">Primary Phone</TableHead>
//               <TableHead className="whitespace-nowrap">Secondary Phone</TableHead>
//               <TableHead className="whitespace-nowrap">Attributes</TableHead>
//               <TableHead className="whitespace-nowrap">Event Types</TableHead>
//               <TableHead className="whitespace-nowrap text-right">Action</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {data.map((item) => (
//               <TableRow key={item.id} className="hover:bg-gray-50 transition">
//                 <TableCell>{item.id}</TableCell>
//                 <TableCell>
//                   <img
//                     src={item.image}
//                     alt="venue"
//                     className="w-12 h-12 rounded-md object-cover"
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <a
//                     href={item.mapLink}
//                     target="_blank"
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Map
//                   </a>
//                 </TableCell>
//                 <TableCell>{item.locationName}</TableCell>
//                 <TableCell>{item.inquiries}</TableCell>
//                 <TableCell>{item.reservations}</TableCell>
//                 <TableCell>{item.overallStatus}</TableCell>
//                 <TableCell>{item.minCapacity}</TableCell>
//                 <TableCell>{item.maxCapacity}</TableCell>
//                 <TableCell className="max-w-[200px] truncate">{item.address}</TableCell>
//                 <TableCell>{item.primaryPhone}</TableCell>
//                 <TableCell>{item.secondaryPhone}</TableCell>
//                 <TableCell>{item.attributes}</TableCell>
//                 <TableCell>{item.eventsTypes}</TableCell>
//                 <TableCell className="text-right space-x-2">
//                   <button className="inline-flex items-center px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition">
//                     <Pencil size={14} className="mr-1" /> Edit
//                   </button>
//                   <button className="inline-flex items-center px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition">
//                     <Trash2 size={14} className="mr-1" /> Delete
//                   </button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>


// </>
//   );
// };

// export default LocationPage;







"use client";

import React, { useState } from "react";
import {
  Eye,
  Plus,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  ScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LocationPage = () => {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [venues, setVenues] = useState<any[]>([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      mapLink: "https://maps.google.com",
      locationName: "Venue A",
      inquiries: 12,
      reservations: 8,
      overallStatus: "Active",
      minCapacity: 50,
      maxCapacity: 200,
      address: "123 Main Street, City",
      primaryPhone: "+123456789",
      secondaryPhone: "+987654321",
      attributes: "AC, Parking",
      eventsTypes: "Wedding, Corporate",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      mapLink: "https://maps.google.com",
      locationName: "Venue B",
      inquiries: 5,
      reservations: 2,
      overallStatus: "Inactive",
      minCapacity: 20,
      maxCapacity: 80,
      address: "456 Park Avenue, City",
      primaryPhone: "+111222333",
      secondaryPhone: "+444555666",
      attributes: "Garden, Stage",
      eventsTypes: "Birthday, Concert",
    },
  ]);

  const [newVenue, setNewVenue] = useState<any>({
    id: "",
    image: "",
    mapLink: "",
    locationName: "",
    inquiries: "",
    reservations: "",
    overallStatus: "Active",
    minCapacity: "",
    maxCapacity: "",
    address: "",
    primaryPhone: "",
    secondaryPhone: "",
    attributes: "",
    eventsTypes: "",
  });

  const [editVenue, setEditVenue] = useState<any | null>(null);

  const statuses = ["All", "Active", "Inactive", "Pending"];

  // Add Venue
  const handleAddVenue = () => {
    const venueToAdd = {
      ...newVenue,
      id: venues.length + 1,
    };
    setVenues([...venues, venueToAdd]);
    setNewVenue({
      id: "",
      image: "",
      mapLink: "",
      locationName: "",
      inquiries: "",
      reservations: "",
      overallStatus: "Active",
      minCapacity: "",
      maxCapacity: "",
      address: "",
      primaryPhone: "",
      secondaryPhone: "",
      attributes: "",
      eventsTypes: "",
    });
  };

  // Delete Venue
  const handleDeleteVenue = (id: number) => {
    if (confirm("Are you sure you want to delete this venue?")) {
      setVenues(venues.filter((v) => v.id !== id));
    }
  };

  // Update Venue
  const handleUpdateVenue = () => {
    setVenues(
      venues.map((v) => (v.id === editVenue.id ? editVenue : v))
    );
    setEditVenue(null);
  };

  // Filtering logic
  const filteredVenues = venues.filter((v) => {
    const matchSearch = v.locationName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchStatus =
      status === "all" || v.overallStatus.toLowerCase() === status;
    return matchSearch && matchStatus;
  });

  return (
    <>
      <div className="p-6 space-y-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold">Location Management</h1>

        {/* Search + Status + Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Search Bar */}
          <div className="flex gap-2">
            <Input
              placeholder="Filter by location name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64"
            />
          </div>

          {/* Status Dropdown */}
          <Select onValueChange={setStatus} defaultValue={status}>
            <SelectTrigger className="w-[160px] flex justify-between">
              <div className="flex-1 text-left">
                <SelectValue placeholder="All Status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {statuses.map((s) => (
                <SelectItem key={s} value={s.toLowerCase()}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Right Side Buttons */}
          <div className="ml-auto flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <Eye size={16} /> View
            </Button>

            {/* Add Venue Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-1 bg-green-500 hover:bg-green-600">
                  <Plus size={16} /> Add Venue
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Venue</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(newVenue).map((key) => (
                    <div key={key} className="flex flex-col gap-1">
                      <label className="text-sm font-medium capitalize">
                        {key}
                      </label>
                      <Input
                        value={newVenue[key]}
                        onChange={(e) =>
                          setNewVenue({
                            ...newVenue,
                            [key]: e.target.value,
                          })
                        }
                        placeholder={`Enter ${key}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-end">
                  <Button onClick={handleAddVenue}>Save Venue</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Venue List */}
<Card className="p-4 rounded-2xl">
  <CardContent className="p-4">
    <h3 className="text-lg font-semibold mb-4">Venue List</h3>

    {/* Scrollable Table Wrapper */}
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto overflow-y-auto max-h-[500px] border rounded-md"
    >
      <table className="min-w-[1400px] border-collapse text-sm">
        <thead className="sticky top-0 bg-gray-100 z-10">
          <tr className="border-b text-gray-600">
            {/* Sticky first 7 columns */}
            <th className="p-2 sticky left-0 bg-gray-100 z-10">ID</th>
            <th className="p-2 sticky left-50 bg-gray-100 z-10">Image</th>
            <th className="p-2 sticky left-100 bg-gray-100 z-10">Map Link</th>
            <th className="p-2 sticky left-150 bg-gray-100 z-10">Location</th>
            <th className="p-2 sticky left-250 bg-gray-100 z-10">Inquiries</th>
            <th className="p-2 sticky left-350 bg-gray-100 z-10">Reservations</th>
            <th className="p-2 sticky left-450 bg-gray-100 z-10">Status</th>

            {/* Rest normal scrollable */}
            <th className="p-2">Min Capacity</th>
            <th className="p-2">Max Capacity</th>
            <th className="p-2">Address</th>
            <th className="p-2">Primary Phone</th>
            <th className="p-2">Secondary Phone</th>
            <th className="p-2">Attributes</th>
            <th className="p-2">Event Types</th>
            <th className="p-2 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {venues.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              {/* Sticky first 7 */}
              <td className="p-2 sticky left-0 bg-white">{item.id}</td>
              <td className="p-2 sticky left-50 bg-white">
                <img
                  src={item.image}
                  alt="venue"
                  className="w-12 h-12 rounded-md object-cover"
                />
              </td>
              <td className="p-2 sticky left-100 bg-white">
                <a
                  href={item.mapLink}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  View Map
                </a>
              </td>
              <td className="p-2 sticky left-150 bg-white">{item.locationName}</td>
              <td className="p-2 sticky left-250 bg-white">{item.inquiries}</td>
              <td className="p-2 sticky left-350 bg-white">{item.reservations}</td>
              <td className="p-2 sticky left-450 bg-white">{item.overallStatus}</td>

              {/* Scrollable rest */}
              <td className="p-2">{item.minCapacity}</td>
              <td className="p-2">{item.maxCapacity}</td>
              <td className="p-2 max-w-[200px] truncate">{item.address}</td>
              <td className="p-2">{item.primaryPhone}</td>
              <td className="p-2">{item.secondaryPhone}</td>
              <td className="p-2">{item.attributes}</td>
              <td className="p-2">{item.eventsTypes}</td>
              <td className="p-2 text-right">
                <MoreHorizontal className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </CardContent>
</Card>










      {/* Edit Venue Modal */}
      {editVenue && (
        <Dialog open={true} onOpenChange={() => setEditVenue(null)}>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Venue</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4">
              {Object.keys(editVenue).map((key) => (
                <div key={key} className="flex flex-col gap-1">
                  <label className="text-sm font-medium capitalize">
                    {key}
                  </label>
                  <Input
                    value={editVenue[key]}
                    onChange={(e) =>
                      setEditVenue({
                        ...editVenue,
                        [key]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <Button onClick={handleUpdateVenue}>Update Venue</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default LocationPage;
