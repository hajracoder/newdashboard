




// "use client";

// import { useState } from "react";
// import { UserPlus, Calendar as CalendarIcon } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { TriangleAlert } from "lucide-react";
// import { MessageSquare } from "lucide-react";



// import { format } from "date-fns";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";

// export default function Dashboard() {

//   const stats = [
//     { id: 1, label: "Total Users", value: 4 },
//     { id: 2, label: "Total Inquiries", value: 107 },
//     { id: 3, label: "Total Locations", value: 50 },
//     { id: 4, label: "Total Reservations", value: 3 },
//   ];

//   const urgentDeadlines = [
//     {
//       client: "Abdullah",
//       event: "Wedding",
//       location: "Zoe Rippin I",
//       deadline: "in 4 days",
//       status: "PENDING",
//     },
//   ];

//   const latestInquiries = [
//     {
//       client: "Adulla",
//       event: "Wedding",
//       location: "Zoe Rippin I",
//       deadline: "in 5 days",
//       status: "PENDING",
//     },
//     {
//       client: "Abdullah12",
//       event: "Wedding",
//       location: "Zoe Rippin I",
//       deadline: "in 4 days",
//       status: "PENDING",
//     },
//     {
//       client: "Abdullah",
//       event: "Wedding",
//       location: "Zoe Rippin I",
//       deadline: "in 4 days",
//       status: "PENDING",
//     },
//     {
//       client: "Abdullah",
//       event: "Wedding",
//       location: "Zoe Rippin I",
//       deadline: "13 days ago",
//       status: "PENDING",
//     },
//   ];

//   const topLocations = [
//     { name: "Downtown Plaza", reservations: 128, rate: "68%", rank: "#1" },
//     { name: "Sunset Heights", reservations: 98, rate: "59%", rank: "#2" },
//     { name: "Greenview Gardens", reservations: 75, rate: "52%", rank: "#3" },
//     { name: "Ocean Breeze Apartments", reservations: 63, rate: "48%", rank: "#4" },
//   ];

//   const [date, setDate] = useState<Date | undefined>(new Date());

//   const data = [
//     { month: "Jan", inquiries: 30 },
//     { month: "Feb", inquiries: 45 },
//     { month: "Mar", inquiries: 28 },
//     { month: "Apr", inquiries: 60 },
//     { month: "May", inquiries: 50 },
//     { month: "Jun", inquiries: 75 },
//     { month: "July", inquiries: 40 },
//     { month: "Aug", inquiries: 65 },
//     { month: "Sep", inquiries: 55 },
//     { month: "Oct", inquiries: 70 },
//     { month: "Nov", inquiries: 48 },
//     { month: "Dec", inquiries: 90 },
//   ];

//   return (
//     <div className="p-4 sm:p-6 bg-white min-h-screen">
//       {/* Header */}
//       <div className="flex  sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
//         <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>

//         <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition">
//           <UserPlus size={18} />
//           Add New User
//         </button>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         {stats.map((s) => (
//           <div
//             key={s.id}
//             className=" bg-gradient-to-br from-white to-red-50 border border-gray-200 
//                           rounded-xl p-6 shadow hover:shadow-md transition flex flex-col"
//           >
//             <p className="text-sm text-gray-500">{s.label}</p>
//             <p className="text-2xl md:text-3xl font-semibold mt-1">{s.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Chart Card */}
//       <div className="bg-white shadow rounded-xl p-4 md:p-6 mb-6">
//         {/* Title + Calendar */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
//           <h2 className="text-lg font-semibold">Enquiries Over Months</h2>

//           {/* Calendar Button with Popover */}
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button variant="outline" className="flex items-center gap-2">
//                 <CalendarIcon className="h-4 w-4 " />
//                 {date ? format(date, "PPP") : "Pick a date"}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <Calendar
//                 mode="single"
//                 selected={date}
//                 onSelect={setDate}
//                 initialFocus
//               />
//             </PopoverContent>
//           </Popover>
//         </div>

//         {/* Chart */}
//         <div className="w-full h-[300px] md:h-[500px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="inquiries"
//                 stroke="#000"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Widgets Grid */}
//       <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
//         {/* Urgent Deadlines */}
//         <div className="bg-white shadow rounded-xl p-4 md:p-6">
         
//           <h2 className="text-lg flex gap-2 font-semibold mb-3">
//               <TriangleAlert size={28} className="text-red-500" />Urgent Deadlines</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-2 text-left">Client</th>
//                   <th className="p-2 text-left">Event Type</th>
//                   <th className="p-2 text-left">Location</th>
//                   <th className="p-2 text-left">Deadline</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {urgentDeadlines.map((d, i) => (
//                   <tr key={i} className="border-t">
//                     <td className="p-2">{d.client}</td>
//                     <td className="p-2">{d.event}</td>
//                     <td className="p-2">{d.location}</td>
//                     <td className="p-2">{d.deadline}</td>
//                     <td className="p-2 ">
//                       {d.status}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Latest Inquiries */}
//         <div className="bg-white shadow rounded-xl p-4 md:p-6">
//           <h2 className="text-lg flex gap-2 font-semibold mb-3">
//             <MessageSquare size={20} /> Latest Inquiries</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-2 text-left">Client</th>
//                   <th className="p-2 text-left">Event Type</th>
//                   <th className="p-2 text-left">Location</th>
//                   <th className="p-2 text-left">Deadline</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {latestInquiries.map((inq, i) => (
//                   <tr key={i} className="border-t">
//                     <td className="p-2">{inq.client}</td>
//                     <td className="p-2">{inq.event}</td>
//                     <td className="p-2">{inq.location}</td>
//                     <td className="p-2">{inq.deadline}</td>
//                     <td className="p-2 ">
//                       {inq.status}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Top Locations */}
//       <div className="bg-white shadow rounded-xl p-4 md:p-6">
//         <h2 className="text-lg md:text-2xl font-semibold mb-4">
//           Top Performing Locations
//         </h2>
//         <p className="text-sm text-gray-500 mb-4">
//           Sorted by total reservations
//         </p>
//         <ul className="space-y-3">
//           {topLocations.map((loc, i) => (
//             <li
//               key={i}
//               className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-3"
//             >
//               <div>
//                 <p className="font-medium">{loc.name}</p>
//                 <p className="text-sm text-gray-500">
//                   {loc.reservations} reservations • {loc.rate} conv. rate
//                 </p>
//               </div>
//               <span className="text-sm font-semibold text-gray-700 mt-2 sm:mt-0">
//                 {loc.rank}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
















"use client"

import { useState } from "react"
import { Scroll } from 'lucide-react';



import {  Calendar as CalendarIcon, Eye, EyeOff, TriangleAlert } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

// ✅ Form Validation Schema
const formSchema = z
  .object({
    username: z.string().min(2, { message: "Username must be at least 2 characters !" }).max(50),
    email: z.string().email({ message: "Invalid email address" }),
    role: z.enum(["Admin", "Owner", "Sales"]),
    active: z.enum(["Active", "Inactive"]),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Confirm password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  })

// ✅ AddUser Component
function AddUser() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      role: "Admin",
      active: "Active",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted ✅", values)
    form.reset()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
 <Button
  className="
    bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90 
    px-4 py-3         /* default (mobile) */
    sm:px-5 sm:py-3.5 /* tablet */
    md:px-6 md:py-4   /* laptop */
    lg:px-8 lg:py-5   /* desktop */
  "
>
  + Add New User
</Button>


      </SheetTrigger>

      <SheetContent className="px-5 w-full max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-bold text-xl">Add User</SheetTitle>
          <p className="text-sm text-muted-foreground font-medium">You have to add user</p>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Admin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Admin123@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Owner">Owner</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Active Status */}
            <FormField
              control={form.control}
              name="active"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirm ? "text" : "password"}
                        placeholder="********"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                      >
                        {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex gap-2 pt-2">
              <Button type="submit" className="bg-orange-500/95 text-white hover:bg-orange-400 w-full">
                Add User
              </Button>
              <SheetClose asChild>
                <Button variant="outline" className="w-full">Close</Button>
              </SheetClose>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}

// ✅ Dashboard Component
export default function Dashboard() {
  const stats = [
    { id: 1, label: "Total Users", value: 4 },
    { id: 2, label: "Total Inquiries", value: 107 },
    { id: 3, label: "Total Locations", value: 50 },
    { id: 4, label: "Total Reservations", value: 3 },
  ]

  const urgentDeadlines = [
    { client: "Abdullah", event: "Wedding", location: "Zoe Rippin I", deadline: "in 4 days", status: "PENDING" },
  ]

  const latestInquiries = [
    { client: "Adulla", event: "Wedding", location: "Zoe Rippin I", deadline: "in 5 days", status: "PENDING" },
    { client: "Abdullah12", event: "Wedding", location: "Zoe Rippin I", deadline: "in 4 days", status: "PENDING" },
    { client: "Abdullah", event: "Wedding", location: "Zoe Rippin I", deadline: "in 4 days", status: "PENDING" },
    { client: "Abdullah", event: "Wedding", location: "Zoe Rippin I", deadline: "13 days ago", status: "PENDING" },
  ]

  const topLocations = [
    { name: "Downtown Plaza", reservations: 128, rate: "68%", rank: "#1" },
    { name: "Sunset Heights", reservations: 98, rate: "59%", rank: "#2" },
    { name: "Greenview Gardens", reservations: 75, rate: "52%", rank: "#3" },
    { name: "Ocean Breeze Apartments", reservations: 63, rate: "48%", rank: "#4" },
  ]

  const [date, setDate] = useState<Date | undefined>(new Date())

  const data = [
    { month: "Jan", inquiries: 30 },
    { month: "Feb", inquiries: 45 },
    { month: "Mar", inquiries: 28 },
    { month: "Apr", inquiries: 60 },
    { month: "May", inquiries: 50 },
    { month: "Jun", inquiries: 75 },
    { month: "July", inquiries: 40 },
    { month: "Aug", inquiries: 65 },
    { month: "Sep", inquiries: 55 },
    { month: "Oct", inquiries: 70 },
    { month: "Nov", inquiries: 48 },
    { month: "Dec", inquiries: 90 },
  ]

  return (
    <>
      {/* ✅ Add User Form */}
      <div className="p-4 sm:p-6 bg-white">
      <div className="flex  sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                 <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
           <AddUser/>
         
      </div>
      

      {/* ✅ Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 mt-4">
        {stats.map((s) => (
          <div key={s.id} className="bg-gradient-to-br from-white to-red-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition flex flex-col">
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-2xl md:text-3xl font-semibold mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* ✅ Chart */}
      <div className="bg-white shadow rounded-xl p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
          <h2 className="text-lg font-semibold">Enquiries Over Months</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 " />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-full h-[300px] md:h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="inquiries" stroke="#000" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ✅ Urgent + Latest Inquiries */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-4 md:p-6">
          <h2 className="text-lg flex gap-2 font-semibold mb-3">
            <TriangleAlert size={28} className="text-red-500" /> Urgent Deadlines
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Client</th>
                  <th className="p-2 text-left">Event Type</th>
                  <th className="p-2 text-left">Location</th>
                  <th className="p-2 text-left">Deadline</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {urgentDeadlines.map((d, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{d.client}</td>
                    <td className="p-2">{d.event}</td>
                    <td className="p-2">{d.location}</td>
                    <td className="p-2">{d.deadline}</td>
                    <td className="p-2">{d.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-4 md:p-6">
          <h2 className="text-lg flex gap-2 font-semibold mb-3">
            <Scroll size={30} /> Latest Inquiries
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Client</th>
                  <th className="p-2 text-left">Event Type</th>
                  <th className="p-2 text-left">Location</th>
                  <th className="p-2 text-left">Deadline</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {latestInquiries.map((inq, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{inq.client}</td>
                    <td className="p-2">{inq.event}</td>
                    <td className="p-2">{inq.location}</td>
                    <td className="p-2">{inq.deadline}</td>
                    <td className="p-2">{inq.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ✅ Top Locations */}
      <div className="bg-white shadow rounded-xl p-4 md:p-6">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Top Performing Locations</h2>
        <p className="text-sm text-gray-500 mb-4">Sorted by total reservations</p>
        <ul className="space-y-3">
          {topLocations.map((loc, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-3">
              <div>
                <p className="font-medium">{loc.name}</p>
                <p className="text-sm text-gray-500">
                  {loc.reservations} reservations • {loc.rate} conv. rate
                </p>
              </div>
              <span className="text-sm font-semibold text-gray-700 mt-2 sm:mt-0">{loc.rank}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  )
}
