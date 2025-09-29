




















// "use client"

// import React, { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select"
// import { ChevronsUpDownIcon, Search } from "lucide-react"
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

// type VenueFormData = {
//   name: string
//   inquiries: number
//   reservations: number
//   overall: number
//   status: "Active" | "Inactive"
//   minCapacity: number
//   maxCapacity: number
//   address: string
//   primaryPhone: string
//   secondaryPhone?: string
//   attributes: "image" | "file" | "video"
//   eventTypes: string
//   imageUrl?: string
//   mapLink?: string
// }

// export default function AddVenueForm() {
//   const [formData, setFormData] = useState<VenueFormData>({
//     name: "",
//     inquiries: 0,
//     reservations: 0,
//     overall: 0,
//     status: "Active",
//     minCapacity: 0,
//     maxCapacity: 0,
//     address: "",
//     primaryPhone: "",
//     secondaryPhone: "",
//     attributes: "image",
//     eventTypes: "",
//     imageUrl: "",
//     mapLink: "",
//   })

//   const handleChange = (key: keyof VenueFormData, value: any) => {
//     setFormData((prev) => ({ ...prev, [key]: value }))
//   }

//   const handleSubmit = () => {
//     console.log("Submitted Venue:", formData)
//     alert("Form submitted! Check console.")
//     // TODO: yahan Appwrite/backend code add karna hai
//   }

//   const commonClass = "w-full h-12"



// const [selected, setSelected] = useState<string[]>([])
// const options = ["Wedding", "Birthday", "Marriage", "Party"]

// const [search, setSearch] = useState("")

// const toggleOption = (opt: string) => {
//   if (selected.includes(opt)) {
//     setSelected(selected.filter((i) => i !== opt))
//   } else {
//     setSelected([...selected, opt])
//   }
// }

// const filteredOptions = options.filter((opt) =>
//   opt.toLowerCase().includes(search.toLowerCase())
// )
// const userOptions = ["Free Parking", "Big Terrace", "Garden", "Sound system" ,"System/Platform","Air Condioning"]
// const [selectedUsers, setSelectedUsers] = useState<string[]>([])
 

//   const toggleUser = (user: string) => {
//     if (selectedUsers.includes(user)) {
//       setSelectedUsers(selectedUsers.filter((i) => i !== user))
//     } else {
//       setSelectedUsers([...selectedUsers, user])
//     }
//   }

//   const filteredUsers = userOptions.filter((user) =>
//     user.toLowerCase().includes(search.toLowerCase())
//   )

//   const selectAll = () => setSelectedUsers([...userOptions])
 


  

//   return (
//     <div className="bg-white rounded-lg border p-6 w-full max-h-[90vh] overflow-y-auto">
//       <h2 className="text-xl font-bold mb-4">Add Venue</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         {/* users */}
//         <div className="space-y-2">
//           <label className="block text-sm font-semibold text-gray-700">User</label>
//           <Select onValueChange={(val) => handleChange("name", val)}>
//             <SelectTrigger className={commonClass}>
//               <SelectValue placeholder="Select user" />
              
//             </SelectTrigger>
//             <SelectContent>
//               <div className="relative">
//       <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//       <Input placeholder="Search status" className="pl-8" />
//     </div>
//               <SelectItem value="hajra">Hajra Qadir</SelectItem>
//               <SelectItem value="masooma">Masooma</SelectItem>
//               <SelectItem value="neha">Neha</SelectItem>
//               <SelectItem value="zoha">Zoha</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* chooes image */}
//        <div className="space-y-2">
//   <label className="block text-sm font-semibold text-gray-700">Upload Image</label>
//   <Input
//     className={commonClass}
//     type="file"
//     accept="image/*"
//     onChange={(e) => {
//       const file = e.target.files?.[0]
//       if (file) {
//         const url = URL.createObjectURL(file)
//         handleChange("imageUrl", url)
//       }
//     }}
//   />
//         </div>


//         {/* location name */}
//     <div className="space-y-2">
//   <label className="block text-sm font-semibold text-gray-700">Location Name</label>
//   <Input
//     className={commonClass}
//     placeholder="Enter location"
//     value={formData.address}
//     onChange={(e) => handleChange("address", e.target.value)}
//   />
//      </div>

 
//    {/* primary phone */}
//     <div className="space-y-2">
//   <label className="block text-sm font-semibold text-gray-700">Primary phone namber</label>
//   <Input
//     className={commonClass}
//     placeholder="Primary phone number"
//     value={formData.address}
//     onChange={(e) => handleChange("address", e.target.value)}
//   />
//   </div>


//    {/* Secondary */}
//     <div className="space-y-2">
//   <label className="block text-sm font-semibold text-gray-700">Secondary phone number</label>
//   <Input
//     className={commonClass}
//     placeholder="Secondary phone number"
//     value={formData.address}
//     onChange={(e) => handleChange("address", e.target.value)}
//   />
//    </div>


//         {/* Min Capacity */}
//         <div className="space-y-2">
//           <label className="block text-sm font-semibold text-gray-700">Min Capacity</label>
//           <Input
//             className={commonClass}
//             type="number"
//             value={formData.minCapacity}
//             onChange={(e) => handleChange("minCapacity", Number(e.target.value))}
//           />

          
//         </div>

//         {/* Max Capacity */}
//         <div className="space-y-2">
//           <label className="block text-sm font-semibold text-gray-700">Max Capacity</label>
//           <Input
//             className={commonClass}
//             type="number"
//             value={formData.maxCapacity}
//             onChange={(e) => handleChange("maxCapacity", Number(e.target.value))}
//           />

//         </div>

//           {/* Address */}
//         <div className="space-y-2">
//           <label className="block text-sm font-semibold text-gray-700">Address</label>
//           <Input
//             className={commonClass}
//             value={formData.address}
//             onChange={(e) => handleChange("address", e.target.value)}
//           />
//         </div>


//           {/* Status */}
//        <div className="space-y-2">
//           <label className="block text-sm font-semibold text-gray-700">Status</label>
//           <Select onValueChange={(val) => handleChange("name", val)}>
//             <SelectTrigger className={commonClass}>
//               <SelectValue placeholder="Select..." />
              
//             </SelectTrigger>
//             <SelectContent>
//               <div className="relative">
//       <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//       <Input placeholder="Search status" className="pl-8" />
//     </div>
//               <SelectItem value="active">Active</SelectItem>
//               <SelectItem value="inactive">Inactive</SelectItem>
//               <SelectItem value="pending">Pending</SelectItem>
            
//             </SelectContent>
//           </Select>
//         </div>

      

//         {/* event type */}
//     <div className="space-y-2">
//   <label className="block text-sm font-semibold ">Event Type</label>
//   <Popover>
//     <PopoverTrigger asChild>
//       <button className={commonClass + " w-full flex items-center justify-between border rounded-xl px-3 py-2 text-left"}>
//         {selected.length > 0 ? selected.join(", ") : "Select options..."}
//         <ChevronsUpDownIcon className="h-4 w-4 text-gray-500" />
//       </button>
//     </PopoverTrigger>

//     <PopoverContent className="w-full p-2" align="start">
//       {/* Search */}
//             <div className="relative">
//       <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//       <Input placeholder="Search status" className="pl-8" />
//     </div>

//       {/* Select All / Deselect All */}
//       <div className="flex justify-between mb-2 text-sm">
//         <button
//           type="button"
//           onClick={() => setSelected([...options])}
//           className="pt-0.5 hover:underline"
//         >
//           Select All
//         </button>
        
       
//       </div>

//       {/* Options with scroll */}
//       <div className="max-h-48 overflow-y-auto  rounded-md p-1">
        
//         {filteredOptions.map((opt) => (
//         <label  key={opt}  className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
//   <input
//     type="checkbox"
//     checked={selected.includes(opt)}
//     onChange={() => toggleOption(opt)}
//     className="w-5 h-5 bg-white border-2 border-orange-500 checked:bg-orange-500 checked:border-orange-500 appearance-none relative"
//   />
//   <span
//     className={`absolute w-4 h-4 pointer-events-none flex items-center justify-center ${
//       selected.includes(opt) ? "text-white" : "text-transparent"
//     }`}
//   >
//     ✓
//   </span>
//   <span className="text-sm text-gray-700">{opt}</span>
// </label>
//         ))}
//       </div>

//       {/* Close button */}
//       <div className="mt-2">
//         <Button type="button" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
//           Close
//         </Button>
//       </div>
//     </PopoverContent>
//   </Popover>
// </div>




//        {/* ATTRIBUTE */}
//  <div className="space-y-2">
//       <label className="block text-sm font-semibold text-gray-700">Attribute</label>
//       <Popover>
//         <PopoverTrigger asChild>
//           <button className="w-full h-12 flex items-center justify-between px-3 py-2 text-left border rounded-md">
//             {selectedUsers.length > 0 ? selectedUsers.join(", ") : "Select users..."}
//             <ChevronsUpDownIcon className="h-4 w-4 text-gray-500" />
//           </button>
//         </PopoverTrigger>

//         <PopoverContent className="w-full p-2" align="start">
//           {/* Search */}
//           <div className="relative mb-2">
//             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//             <Input
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-8"
//             />
//           </div>

//           {/* Select/Deselect All */}
//           <div className="flex justify-between mb-2 text-sm">
//             <button type="button" onClick={selectAll} className=" hover:underline">
//               Select All
//             </button>
           
//           </div>

//           {/* Options */}
//        <div className="max-h-48 overflow-y-scroll  rounded-md p-1">
        
//         {filteredUsers.map((user) => (
//         <label  key={user}  className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
//   <input
//     type="checkbox"
//     checked={selected.includes(user)}
//     onChange={() => toggleOption(user)}
//     className="w-5 h-5 bg-white border-2 border-orange-500 checked:bg-orange-500 checked:border-orange-500 appearance-none relative"
//   />
//   <span
//     className={`absolute w-4 h-4 pointer-events-none flex items-center justify-center ${
//       selected.includes(user) ? "text-white" : "text-transparent"
//     }`}
//   >
//     ✓
//   </span>
//   <span className="text-sm text-gray-700">{user}</span>
// </label>
//         ))}
//       </div>

//           <div className="mt-2">
//             <Button type="button" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">
//               Close
//             </Button>
//           </div>
//         </PopoverContent>
//       </Popover>
//     </div>




// <div className="flex justify-center m-3 ">
//         <Button  
//           className="bg-orange-600 hover:bg-orange-700 m-4   p-5.5 w-full"
//         >
//           Add Location
//         </Button>
//       </div>
     
//       </div>

    
    
//     </div>
//   )
// }













"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { ChevronsUpDownIcon, Search } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

type VenueFormData = {
  name: string
  inquiries: number
  reservations: number
  overall: number
  status: "Active" | "Inactive"
  minCapacity: number
  maxCapacity: number
  address: string
  primaryPhone: string
  secondaryPhone?: string
  attributes: "image" | "file" | "video"
  eventTypes: string[]
  imageUrl?: string
  mapLink?: string
}

export default function AddVenueForm() {
  const [formData, setFormData] = useState<VenueFormData>({
    name: "",
    inquiries: 0,
    reservations: 0,
    overall: 0,
    status: "Active",
    minCapacity: 0,
    maxCapacity: 0,
    address: "",
    primaryPhone: "",
    secondaryPhone: "",
    attributes: "image",
    eventTypes: [],
    imageUrl: "",
    mapLink: "",
  })

  const handleChange = <K extends keyof VenueFormData>(key: K, value: VenueFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const commonClass = "w-full h-12"

  // Event Type
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])
  const eventOptions = ["Wedding", "Birthday", "Marriage", "Party"]

  const toggleEvent = (opt: string) => {
    setSelectedEvents((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    )
    handleChange("eventTypes", selectedEvents)
  }

  // Attributes
  const attributeOptions = [
    "Free Parking",
    "Big Terrace",
    "Garden",
    "Sound system",
    "System/Platform",
    "Air Conditioning",
  ]
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([])

  const toggleAttribute = (attr: string) => {
    setSelectedAttributes((prev) =>
      prev.includes(attr) ? prev.filter((i) => i !== attr) : [...prev, attr]
    )
  }

  const selectAllAttributes = () => setSelectedAttributes([...attributeOptions])

  return (
    <div className="bg-white rounded-lg border p-6 w-full max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Add Venue</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* User */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">User</label>
          <Select onValueChange={(val) => handleChange("name", val)}>
            <SelectTrigger className={commonClass}>
              <SelectValue placeholder="Select user" />
            </SelectTrigger>
            <SelectContent>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search user" className="pl-8" />
              </div>
              <SelectItem value="hajra">Hajra Qadir</SelectItem>
              <SelectItem value="masooma">Masooma</SelectItem>
              <SelectItem value="neha">Neha</SelectItem>
              <SelectItem value="zoha">Zoha</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Upload Image */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Upload Image</label>
          <Input
            className={commonClass}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleChange("imageUrl", URL.createObjectURL(file))
            }}
          />
        </div>

        {/* Location Name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Location Name</label>
          <Input
            className={commonClass}
            placeholder="Enter location"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        {/* Primary Phone */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Primary Phone</label>
          <Input
            className={commonClass}
            placeholder="Primary phone number"
            value={formData.primaryPhone}
            onChange={(e) => handleChange("primaryPhone", e.target.value)}
          />
        </div>

        {/* Secondary Phone */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Secondary Phone</label>
          <Input
            className={commonClass}
            placeholder="Secondary phone number"
            value={formData.secondaryPhone}
            onChange={(e) => handleChange("secondaryPhone", e.target.value)}
          />
        </div>

        {/* Min Capacity */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Min Capacity</label>
          <Input
            className={commonClass}
            type="number"
            value={formData.minCapacity}
            onChange={(e) => handleChange("minCapacity", Number(e.target.value))}
          />
        </div>

        {/* Max Capacity */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Max Capacity</label>
          <Input
            className={commonClass}
            type="number"
            value={formData.maxCapacity}
            onChange={(e) => handleChange("maxCapacity", Number(e.target.value))}
          />
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Status</label>
          <Select onValueChange={(val) => handleChange("status", val as "Active" | "Inactive")}>
            <SelectTrigger className={commonClass}>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Event Type */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Event Type</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className={`${commonClass} w-full flex items-center justify-between border rounded-xl px-3 py-2 text-left`}>
                {selectedEvents.length > 0 ? selectedEvents.join(", ") : "Select options..."}
                <ChevronsUpDownIcon className="h-4 w-4 text-gray-500" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2" align="start">
                    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search status" className="pl-8" />
    </div>
              <div className="max-h-48 overflow-y-auto rounded-md p-1">
                {eventOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedEvents.includes(opt)}
                      onChange={() => toggleEvent(opt)}
                      className="w-5 h-5 bg-white border-2 border-orange-500 checked:bg-orange-500 checked:border-orange-500 appearance-none relative"
                    />
                    <span
                      className={`absolute w-4 h-4 pointer-events-none flex items-center justify-center ${
                        selectedEvents.includes(opt) ? "text-white" : "text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
                <div className="flex justify-between mt-2">
                <Button type="button" onClick={selectAllAttributes} className="text-sm underline">
                  Select All
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Attribute */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Attribute</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className={`${commonClass} w-full flex items-center justify-between border rounded-md px-3 py-2 text-left`}>
                {selectedAttributes.length > 0 ? selectedAttributes.join(", ") : "Select attributes..."}
                <ChevronsUpDownIcon className="h-4 w-4 text-gray-500" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2" align="start">
                         <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search status" className="pl-8" />
    </div>
              <div className="max-h-30 overflow-y-scroll rounded-md p-1">
                {attributeOptions.map((attr) => (
                  <label key={attr} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedAttributes.includes(attr)}
                      onChange={() => toggleAttribute(attr)}
                      className="w-5 h-5 bg-white border-2 border-orange-500 checked:bg-orange-500 checked:border-orange-500 appearance-none relative"
                    />
                    <span
                      className={`absolute w-4 h-4 pointer-events-none flex items-center justify-center ${
                        selectedAttributes.includes(attr) ? "text-white" : "text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-gray-700">{attr}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <Button type="button" onClick={selectAllAttributes} className="text-sm underline">
                  Select All
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center m-3">
        <Button className=" bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90  m-4 p-5.5 ">
          Add Location
        </Button>
      </div>
    </div>
  )
}
