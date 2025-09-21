


"use client";
// import React, { FC } from "react";
import { MapPin, Eye, UserPlus } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


export default function Dashboard() {
  const stats = [
    { id: 1, label: "Total Users", value: 4 },
    { id: 2, label: "Total Inquiries", value: 107 },
    { id: 3, label: "Total Locations", value: 50 },
    { id: 4, label: "Total Reservations", value: 3 },
  ];

  const urgentDeadlines = [
    { client: "Abdullah", event: "Wedding", location: "Zoe Rippin I", deadline: "in 4 days", status: "PENDING" },
  ];

  const latestInquiries = [
    { client: "Adulla", event: "Wedding", location: "Zoe Rippin I", deadline: "in 5 days", status: "PENDING" },
    { client: "Abdullah12", event: "Wedding", location: "Zoe Rippin I", deadline: "in 4 days", status: "PENDING" },
    { client: "Abdullah", event: "Wedding", location: "Zoe Rippin I", deadline: "in 4 days", status: "PENDING" },
    { client: "Abdullah", event: "Wedding", location: "Zoe Rippin I", deadline: "13 days ago", status: "PENDING" },
    { client: "Abdullah", event: "Wedding", location: "Zoe Rippin I", deadline: "13 days ago", status: "PENDING" },
  ];

  const topLocations = [
    { name: "Downtown Plaza", reservations: 128, rate: "68%", rank: "#1" },
    { name: "Sunset Heights", reservations: 98, rate: "59%", rank: "#2" },
    { name: "Greenview Gardens", reservations: 75, rate: "52%", rank: "#3" },
    { name: "Ocean Breeze Apartments", reservations: 63, rate: "48%", rank: "#4" },
  ];
  const data = [
  { month: "Jan", inquiries: 30,  },
  { month: "Feb", inquiries: 45, },
  { month: "Mar", inquiries: 28, },
  { month: "Apr", inquiries: 60,  },
  { month: "May", inquiries: 50, },
  { month: "Jun", inquiries: 75,  },
  { month: "July", inquiries: 40,  },
  { month: "Aug", inquiries: 65,  },
  { month: "Sep", inquiries: 55,  },
  { month: "Oct", inquiries: 70,  },
  { month: "Nov", inquiries: 48,  },
  { month: "Dec", inquiries: 90,  },
  
];

  // action handlers
  const handleAddLocation = () => console.log("Add New Location");
  const handleViewActiveInquiries = () => console.log("View Active Inquiries");
  const handleAddUser = () => console.log("Add New User");

  return (
    <div className="p-6  bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="flex gap-3">
          <button
            onClick={handleAddLocation}
            className="flex items-center gap-2 bg-indigo-50 text-black px-4 py-2 rounded shadow hover:bg-indigo-100"
          >
            <MapPin size={16} />
            Add New Location
          </button>

          <button
            onClick={handleViewActiveInquiries}
            className="flex items-center gap-2 text-black px-4 py-2 rounded shadow hover:bg-gray-100"
          >
            <Eye size={16} />
            View Active Inquiries
          </button>

          <button
            onClick={handleAddUser}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-700"
          >
            <UserPlus size={16} />
            Add New User
          </button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div
            key={s.id}
            className="bg-gradient-to-br from-white to-red-50 border border-gray-200 
                       rounded-lg p-8 shadow-inner hover:shadow-md transition"
          >
            <div>
              <p className="text-gray-500">{s.label}</p>
              <p className="text-3xl font-semibold mt-1">{s.value}</p>
            </div>
          </div>
        ))}
      </div>


      
  <div className="bg-white shadow border-2 rounded-lg p-16">
      <h2 className="text-lg font-semibold mb-3">Enquiries Over Months</h2>
      <ResponsiveContainer width="100%" height={500}>
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

      {/* Widgets grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6">
        {/* Urgent Deadlines */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Urgent Deadlines</h2>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
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
                  <td className="p-2 text-yellow-600 font-medium">{d.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Latest Inquiries */}
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-lg font-semibold mb-3">Latest Inquiries</h2>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
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
                  <td className="p-2 text-yellow-600 font-medium">{inq.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>

        {/* Top Performing Locations */}
        <div className="p-4">
       <h2 className="text-3xl font-semibold p-4">Top Performing Locations</h2>
        <div className="bg-white shadow  rounded-lg p-6">
          
          <p className="text-lg text-gray-500 mb-4">Sorted by total reservations</p>
          <ul className="space-y-3">
            {topLocations.map((loc, i) => (
              <li key={i} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{loc.name}</p>
                  <p className="text text-gray-500">
                    {loc.reservations} reservations • {loc.rate} conv. rate
                  </p>
                </div>
                <span className="text-sm font-semibold text-gray-700">{loc.rank}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
      
    
  );
}
