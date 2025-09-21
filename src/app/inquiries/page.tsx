















// "use client";

// import React, { useState, useEffect } from "react";
// import { Plus, ChevronUp, ChevronDown } from "lucide-react";

// type Inquiry = {
//   id: number;
//   contactPerson: string;
//   venue: string;
//   city: string;
//   email: string;
//   eventDate: string;
//   deadline: string;
//   eventType: string;
//   guests: number;
//   notes: string;
// };

// const users = ["Hajra", "Masooma", "Neha", "Zoha"];
// const venues = ["Karachi Convention Center", "Lahore Marriage Hall", "Islamabad Banquet", "Multan Garden"];

// export default function InquiryPage() {
//   const [inquiries, setInquiries] = useState<Inquiry[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewFilter, setViewFilter] = useState("All");
//   const [dateFilter, setDateFilter] = useState("");
//   const [sortConfig, setSortConfig] = useState<{ key: keyof Inquiry; direction: "asc" | "desc" } | null>(null);

//   // Load data from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("inquiries");
//     if (stored) setInquiries(JSON.parse(stored));
//   }, []);

//   // Save data to localStorage whenever inquiries change
//   useEffect(() => {
//     localStorage.setItem("inquiries", JSON.stringify(inquiries));
//   }, [inquiries]);

//   // Sorting handler
//   const handleSort = (key: keyof Inquiry) => {
//     if (sortConfig?.key === key) {
//       setSortConfig({ key, direction: sortConfig.direction === "asc" ? "desc" : "asc" });
//     } else {
//       setSortConfig({ key, direction: "asc" });
//     }
//   };

//   // Filtered and sorted inquiries
//   const filteredInquiries = React.useMemo(() => {
//     let filtered = inquiries.filter((inq) => {
//       const matchesSearch =
//         inq.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         inq.venue.toLowerCase().includes(searchTerm.toLowerCase());

//       const matchesDate = dateFilter ? inq.eventDate === dateFilter : true;

//       const matchesView =
//         viewFilter === "All"
//           ? true
//           : viewFilter === "Upcoming"
//           ? new Date(inq.eventDate) >= new Date()
//           : new Date(inq.eventDate) < new Date();

//       return matchesSearch && matchesDate && matchesView;
//     });

//     if (sortConfig) {
//       filtered.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
//         if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
//         return 0;
//       });
//     }

//     return filtered;
//   }, [inquiries, searchTerm, dateFilter, viewFilter, sortConfig]);

//   return (
//     <div className="p-6 bg-white">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold">Inquiry Oversight</h1>
//         <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//           <Plus size={16} /> Add Inquiry
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 items-center mb-4">
//         {/* Search bar */}
//         <div className="flex flex-col">
         
//           <input
//             type="text"
//             placeholder="Search by name or venue"
//             className="border p-2 rounded w-64"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Select date */}
//         <div className="flex flex-col">
        
//           <input
//             type="date"
//             className="border p-2 rounded"
//             value={dateFilter}
//             onChange={(e) => setDateFilter(e.target.value)}
//           />
//         </div>

//         {/* Views */}
//         <div className="flex flex-col">
     
//           <select
//             className="border p-2 rounded"
//             value={viewFilter}
//             onChange={(e) => setViewFilter(e.target.value)}
//           >
//             <option>All</option>
//             <option>Upcoming</option>
//             <option>Past</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="w-full border border-gray-200 rounded overflow-hidden">
//         <thead className="bg-gray-100">
//           <tr>
//             {[
//               { key: "id", label: "ID", sortable: true },
//               { key: "contactPerson", label: "Contact Person", sortable: true },
//               { key: "venue", label: "Venue", sortable: true },
//               { key: "city", label: "City", sortable: true },
//               { key: "email", label: "Email", sortable: true },
//               { key: "eventDate", label: "Event Date", sortable: true },
//               { key: "deadline", label: "Deadline", sortable: true },
//               { key: "eventType", label: "Event Type", sortable: true },
//               { key: "guests", label: "Guests", sortable: true },
//               { key: "notes", label: "Notes", sortable: true },
//               { key: "status", label: "Status", sortable: false },
//               { key: "actions", label: "Actions", sortable: false },
//             ].map((col) => (
//               <th
//                 key={col.key}
//                 className="p-2 cursor-pointer"
//                 onClick={col.sortable ? () => handleSort(col.key as keyof Inquiry) : undefined}
//               >
//                 <div className="flex items-center justify-between">
//                   <span>{col.label}</span>
//                   {col.sortable && (
//                     <div className="flex flex-col items-center ml-1">
//                       <ChevronUp
//                         className={`text-black ${sortConfig?.key === col.key && sortConfig.direction === "asc" ? "text-blue-500" : ""}`}
//                         size={14}
//                       />
//                       <ChevronDown
//                         className={`text-black ${sortConfig?.key === col.key && sortConfig.direction === "desc" ? "text-blue-500" : ""}`}
//                         size={14}
//                       />
//                     </div>
//                   )}
//                 </div>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredInquiries.map((inq) => (
//             <tr key={inq.id} className="text-left border-b">
//               <td className="p-2 border">{inq.id}</td>
//               <td className="p-2 border">{inq.contactPerson}</td>
//               <td className="p-2 border">{inq.venue}</td>
//               <td className="p-2 border">{inq.city}</td>
//               <td className="p-2 border">{inq.email}</td>
//               <td className="p-2 border">{inq.eventDate}</td>
//               <td className="p-2 border">{inq.deadline}</td>
//               <td className="p-2 border">{inq.eventType}</td>
//               <td className="p-2 border">{inq.guests}</td>
//               <td className="p-2 border">{inq.notes}</td>
//               <td className="p-2 border">Active</td>
//               <td className="p-2 border">Edit | Delete</td>
//             </tr>
//           ))}
//           {filteredInquiries.length === 0 && (
//             <tr>
//               <td colSpan={12} className="text-center p-4">
//                 No inquiries found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }













"use client";

import React, { useState, useEffect } from "react";
import { Plus, X, ChevronUp, ChevronDown, MoreHorizontal } from "lucide-react";

type Inquiry = {
  id: number;
  contactPerson: string;
  venue: string;
  city: string;
  email: string;
  eventDate: string;
  deadline: string;
  eventType: string;
  guests: number;
  notes: string;
};

const users = ["Hajra", "Masooma", "Neha", "Zoha"];
const venues = ["Karachi Convention Center", "Lahore Marriage Hall", "Islamabad Banquet", "Multan Garden"];

export default function InquiryPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewFilter, setViewFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Inquiry; direction: "asc" | "desc" } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<Partial<Inquiry>>({});
  const [actionsOpenId, setActionsOpenId] = useState<number | null>(null);

  // Load from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem("inquiries");
    if (stored) setInquiries(JSON.parse(stored));
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("inquiries", JSON.stringify(inquiries));
  }, [inquiries]);

  // Sorting handler
  const handleSort = (key: keyof Inquiry) => {
    if (sortConfig?.key === key) {
      setSortConfig({ key, direction: sortConfig.direction === "asc" ? "desc" : "asc" });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  // Filtered + Sorted Inquiries
  const filteredInquiries = React.useMemo(() => {
    let filtered = inquiries.filter((inq) => {
      const matchesSearch =
        inq.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inq.venue.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDate = dateFilter ? inq.eventDate === dateFilter : true;

      const matchesView =
        viewFilter === "All"
          ? true
          : viewFilter === "Upcoming"
          ? new Date(inq.eventDate) >= new Date()
          : new Date(inq.eventDate) < new Date();

      return matchesSearch && matchesDate && matchesView;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [inquiries, searchTerm, dateFilter, viewFilter, sortConfig]);

  // Add / Edit Inquiry
  const handleSaveInquiry = () => {
    if (formData.id) {
      // Edit
      setInquiries((prev) =>
        prev.map((inq) => (inq.id === formData.id ? { ...(formData as Inquiry) } : inq))
      );
    } else {
      // Add
      const newInquiry: Inquiry = { id: inquiries.length + 1, guests: 0, ...formData } as Inquiry;
      setInquiries([...inquiries, newInquiry]);
    }
    setShowModal(false);
    setFormData({});
  };

  const handleEdit = (inq: Inquiry) => {
    setFormData(inq);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    setActionsOpenId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Inquiry Oversight</h1>
        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={() => { setFormData({}); setShowModal(true); }}
        >
          <Plus size={16} /> Add Inquiry
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <input
          type="text"
          placeholder="Filter by name or venue"
          className="border p-2 rounded w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={viewFilter}
          onChange={(e) => setViewFilter(e.target.value)}
        >
          <option>All</option>
          <option>Upcoming</option>
          <option>Past</option>
        </select>
      </div>

      <div className="border border-gray-300  rounded-lg shadow-md overflow-hidden">
  {/* Table Header Fixed + Scrollable Rows */}
  <div className="overflow-x-auto">
    <div className="max-h-[400px] overflow-y-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100 sticky top-0 z-10 shadow-sm">
          <tr>
            {[
              { key: "id", label: "ID" },
              { key: "contactPerson", label: "Contact Person" },
              { key: "venue", label: "Venue" },
              { key: "city", label: "City" },
              { key: "email", label: "Email" },
              { key: "eventDate", label: "Event Date" },
              { key: "deadline", label: "Deadline" },
              { key: "eventType", label: "Event Type" },
              { key: "guests", label: "Guests" },
              { key: "notes", label: "Notes" },
            ].map((col) => (
              <th
                key={col.key}
                className="p-2 cursor-pointer border-b text-sm font-semibold text-gray-700"
                onClick={() => handleSort(col.key as keyof Inquiry)}
              >
                <div className="flex items-center justify-between">
                  <span>{col.label}</span>
                  <div className="flex flex-col items-center ml-1">
                    <ChevronUp
                      className={`${
                        sortConfig?.key === col.key && sortConfig.direction === "asc"
                          ? "text-blue-500"
                          : "text-gray-500"
                      }`}
                      size={14}
                    />
                    <ChevronDown
                      className={`${
                        sortConfig?.key === col.key && sortConfig.direction === "desc"
                          ? "text-blue-500"
                          : "text-gray-500"
                      }`}
                      size={14}
                    />
                  </div>
                </div>
              </th>
            ))}
            <th className="p-2 border-b text-sm font-semibold text-gray-700">Status</th>
            <th className="p-2 border-b text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredInquiries.map((inq) => (
            <tr
              key={inq.id}
              className="text-left border-b hover:bg-gray-50 transition"
            >
              <td className="p-2 border-r">{inq.id}</td>
              <td className="p-2 border-r">{inq.contactPerson}</td>
              <td className="p-2 border-r">{inq.venue}</td>
              <td className="p-2 border-r">{inq.city}</td>
              <td className="p-2 border-r">{inq.email}</td>
              <td className="p-2 border-r">{inq.eventDate}</td>
              <td className="p-2 border-r">{inq.deadline}</td>
              <td className="p-2 border-r">{inq.eventType}</td>
              <td className="p-2 border-r">{inq.guests}</td>
              <td className="p-2 border-r">{inq.notes}</td>
              <td className="p-2 border-r text-green-600 font-medium">Active</td>
      <td className="relative overflow-visible">
        <button
          onClick={() =>
            setActionsOpenId(actionsOpenId === inq.id ? null : inq.id)
          }
          className="hover:bg-gray-200 p-1 rounded"
        >
          <MoreHorizontal size={20} />
        </button>

        {actionsOpenId === inq.id && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
            <button
              onClick={() => handleEdit(inq)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(inq.id)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </td>
 

            </tr>
          ))}
          {filteredInquiries.length === 0 && (
            <tr>
              <td colSpan={12} className="text-center p-4 text-gray-500">
                No inquiries found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

      
      {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-white flex justify-center rounded-2xl items-center z-50 overflow-auto">
    <div className="bg-white rounded-lg border-2 w-full max-w-lg p-6 relative m-4">
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        onClick={() => setShowModal(false)}
      >
        <X size={20} />
      </button>
      <h2 className="text-lg font-bold mb-4">{formData.id ? "Edit Inquiry" : "Add Inquiry"}</h2>

      <div className="grid grid-cols-1 gap-3 max-h-[80vh] overflow-y-auto">
        {/* replicate all header fields with icons */}
        {[
          { key: "contactPerson", label: "Contact Person", type: "select", options: users },
          { key: "venue", label: "Venue", type: "select", options: venues },
          { key: "city", label: "City", type: "text" },
          { key: "email", label: "Email", type: "email" },
          { key: "eventDate", label: "Event Date", type: "date" },
          { key: "deadline", label: "Deadline", type: "date" },
          { key: "eventType", label: "Event Type", type: "text" },
          { key: "guests", label: "Guests", type: "number" },
          { key: "notes", label: "Notes", type: "textarea" },
        ].map((field) => (
          <div key={field.key}>
            {field.type === "select" ? (
              <select
                name={field.key}
                value={formData[field.key as keyof Inquiry] || ""}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="">Select {field.label}</option>
                {field.options?.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.key}
                value={formData[field.key as keyof Inquiry] || ""}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            ) : (
              <input
                type={field.type}
                name={field.key}
                value={formData[field.key as keyof Inquiry] || ""}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            )}
          </div>
        ))}

        <button
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 mt-2"
          onClick={handleSaveInquiry}
        >
          {formData.id ? "Update Inquiry" : "Add Inquiry"}
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
