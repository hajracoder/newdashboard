



























// "use client";

// import React, { useState, useEffect } from "react";
// import { Plus, Edit, Trash2, X, ChevronUp, ChevronDown } from "lucide-react";
// import { toast } from "sonner";

// type User = {
//   name: string;
//   email: string;
//   role: string;
//   status: string;
//   password: string;
// };

// type SortConfig = {
//   key: keyof User;
//   direction: "asc" | "desc";
// } | null;

// export default function UserManagementPage() {
//   // Initial empty array to avoid SSR hydration issues
//   const [users, setUsers] = useState<User[]>([]);
//   const [search, setSearch] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   // Modal form state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("admin");
//   const [status, setStatus] = useState("Active");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Sorting
//   const [sortConfig, setSortConfig] = useState<SortConfig>(null);

//   // Load users from localStorage on client
//   useEffect(() => {
//     const saved = localStorage.getItem("users");
//     if (saved) setUsers(JSON.parse(saved));
//   }, []);

//   // Save users to localStorage
//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   const openEditModal = (index: number) => {
//     const u = users[index];
//     setName(u.name);
//     setEmail(u.email);
//     setRole(u.role);
//     setStatus(u.status);
//     setPassword(u.password);
//     setConfirmPassword(u.password);
//     setEditingIndex(index);
//     setOpenModal(true);
//   };

//   const handleAddOrUpdate = () => {
//     if (!name || !email || !role || !status || !password || !confirmPassword) {
//       toast.error("All fields are required!");
//       return;
//     }
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }

//     const newUser: User = { name, email, role, status, password };

//     if (editingIndex !== null) {
//       const updated = [...users];
//       updated[editingIndex] = newUser;
//       setUsers(updated);
//       toast.success("User updated!");
//     } else {
//       setUsers([...users, newUser]);
//       toast.success("User added!");
//     }

//     // Reset form
//     setName("");
//     setEmail("");
//     setRole("admin");
//     setStatus("Active");
//     setPassword("");
//     setConfirmPassword("");
//     setEditingIndex(null);
//     setOpenModal(false);
//   };

//   const handleDelete = (index: number) => {
//     if (confirm("Are you sure you want to delete this user?")) {
//       const updated = users.filter((_, i) => i !== index);
//       setUsers(updated);
//       toast.success("User deleted!");
//     }
//   };

//   const handleSort = (key: keyof User) => {
//     let direction: "asc" | "desc" = "asc";
//     if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   // Sort only the clicked column
//   const sortedUsers = React.useMemo(() => {
//     if (!sortConfig) return users;
//     const { key, direction } = sortConfig;
//     return [...users].sort((a, b) => {
//       const aVal = (a[key] as string).toLowerCase();
//       const bVal = (b[key] as string).toLowerCase();
//       if (aVal < bVal) return direction === "asc" ? -1 : 1;
//       if (aVal > bVal) return direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }, [users, sortConfig]);

//   const filteredUsers = sortedUsers.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
//   const paginatedUsers = filteredUsers.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const renderSortIcon = (key: keyof User) => {
//     if (!sortConfig || sortConfig.key !== key)
//       return <ChevronUp className="w-3 h-3 opacity-50 inline-block" />;
//     return sortConfig.direction === "asc" ? (
//       <ChevronUp className="w-3 h-3 inline-block" />
//     ) : (
//       <ChevronDown className="w-3 h-3 inline-block" />
//     );
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">User Management</h1>
//         <button
//           onClick={() => setOpenModal(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
//         >
//           <Plus className="w-4 h-4" /> Add User
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Search by name..."
//         className="w-full p-2 border rounded-lg mb-4"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="overflow-x-auto">
//         <table className="min-w-full rounded-lg">
//           <thead className="border-b">
//             <tr>
//               {["name", "email", "role", "status"].map((key) => (
//                 <th
//                   key={key}
//                   className="p-2 cursor-pointer select-none"
//                   onClick={() => handleSort(key as keyof User)}
//                 >
//                   <div className="flex text-left gap-1">
//                     {key.charAt(0).toUpperCase() + key.slice(1)}
//                     {renderSortIcon(key as keyof User)}
//                   </div>
//                 </th>
//               ))}
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedUsers.map((user, i) => (
//               <tr key={i} className="text-left">
//                 <td className="p-2">{user.name}</td>
//                 <td className="p-2">{user.email}</td>
//                 <td className="p-2">{user.role}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-2 py-1 rounded text-white text-sm ${
//                       user.status.toLowerCase() === "active"
//                         ? "bg-green-500"
//                         : "bg-gray-400"
//                     }`}
//                   >
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="p-2 flex justify-center gap-2">
//                   <button
//                     onClick={() =>
//                       openEditModal((currentPage - 1) * itemsPerPage + i)
//                     }
//                     className="border rounded-lg p-2 hover:bg-gray-100"
//                   >
//                     <Edit className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() =>
//                       handleDelete((currentPage - 1) * itemsPerPage + i)
//                     }
//                     className="border rounded-lg p-2 hover:bg-gray-100"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {paginatedUsers.length === 0 && (
//               <tr>
//                 <td colSpan={5} className="text-center p-4 text-gray-500">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           className="px-3 py-1 border rounded-lg hover:bg-gray-100"
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages || 1}
//         </span>
//         <button
//           onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//           className="px-3 py-1 border rounded-lg hover:bg-gray-100"
//         >
//           Next
//         </button>
//       </div>

//       {/* Right Slide Modal */}
//       {openModal && (
//         <div className="fixed inset-0 z-50 flex">
//           <div
//             className="fixed inset-0 bg-black/50"
//             onClick={() => setOpenModal(false)}
//           ></div>
//           <div className="ml-auto h-full w-[350px] bg-white shadow-lg p-6 overflow-y-auto relative transition-transform transform translate-x-0">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">
//                 {editingIndex !== null ? "Edit User" : "Add User"}
//               </h2>
//               <button onClick={() => setOpenModal(false)}>
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//             <p className="text-gray-600 mb-4">
//               {editingIndex !== null
//                 ? "Edit the user details"
//                 : "You have to add user"}
//             </p>

//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full p-2 border rounded-lg mb-3"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 border rounded-lg mb-3"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <select
//               className="w-full p-2 border rounded-lg mb-3"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="admin">Admin</option>
//               <option value="owner">Owner</option>
//               <option value="sales">Sales</option>
//             </select>
//             <select
//               className="w-full p-2 border rounded-lg mb-3"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//             >
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-2 border rounded-lg mb-3"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full p-2 border rounded-lg mb-3"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />

//             <div className="flex justify-end gap-3 mt-4">
//               <button
//                 onClick={handleAddOrUpdate}
//                 className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
//               >
//                 {editingIndex !== null ? "Update User" : "Add User"}
//               </button>
//               <button
//                 onClick={() => setOpenModal(false)}
//                 className="px-4 py-2 border rounded-lg hover:bg-gray-100"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
























"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, X, ChevronUp, ChevronDown } from "lucide-react";
import { toast } from "sonner";

type User = {
  name: string;
  email: string;
  role: string;
  status: string;
  password: string;
};

type SortConfig = {
  key: keyof User;
  direction: "asc" | "desc";
} | null;

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [mounted, setMounted] = useState(false); // For client-only rendering

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [status, setStatus] = useState("Active");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("users");
    if (saved) setUsers(JSON.parse(saved));
    setMounted(true);
  }, []);

  // Save data to localStorage whenever users change
  useEffect(() => {
    if (mounted) localStorage.setItem("users", JSON.stringify(users));
  }, [users, mounted]);

  const openEditModal = (index: number) => {
    const u = users[index];
    setName(u.name);
    setEmail(u.email);
    setRole(u.role);
    setStatus(u.status);
    setPassword(u.password);
    setConfirmPassword(u.password);
    setEditingIndex(index);
    setOpenModal(true);
  };

  const handleAddOrUpdate = () => {
    if (!name || !email || !role || !status || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const newUser: User = { name, email, role, status, password };

    if (editingIndex !== null) {
      const updated = [...users];
      updated[editingIndex] = newUser;
      setUsers(updated);
      toast.success("User updated!");
    } else {
      setUsers([...users, newUser]);
      toast.success("User added!");
    }

    setName("");
    setEmail("");
    setRole("admin");
    setStatus("Active");
    setPassword("");
    setConfirmPassword("");
    setEditingIndex(null);
    setOpenModal(false);
  };

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      const updated = users.filter((_, i) => i !== index);
      setUsers(updated);
      toast.success("User deleted!");
    }
  };

  const handleSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = React.useMemo(() => {
    if (!sortConfig) return users;
    const { key, direction } = sortConfig;
    return [...users].sort((a, b) => {
      const aVal = a[key].toLowerCase();
      const bVal = b[key].toLowerCase();
      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [users, sortConfig]);

  const filteredUsers = sortedUsers.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderSortIcon = (key: keyof User) => {
    if (!sortConfig || sortConfig.key !== key)
      return <ChevronUp className="w-3 h-3 opacity-50 inline-block" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-3 h-3 inline-block" />
    ) : (
      <ChevronDown className="w-3 h-3 inline-block" />
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-2 border rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {mounted && (
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg">
            <thead className="border-b">
              <tr>
                {["name", "email", "role", "status"].map((key) => (
                  <th
                    key={key}
                    className="p-2 cursor-pointer select-none"
                    onClick={() => handleSort(key as keyof User)}
                  >
                    <div className="flex text-left gap-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {renderSortIcon(key as keyof User)}
                    </div>
                  </th>
                ))}
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user, i) => (
                <tr key={i} className="text-left">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        user.status.toLowerCase() === "active"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2 flex justify-center gap-2">
                    <button
                      onClick={() => openEditModal((currentPage - 1) * itemsPerPage + i)}
                      className="border rounded-lg p-2 hover:bg-gray-100"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete((currentPage - 1) * itemsPerPage + i)}
                      className="border rounded-lg p-2 hover:bg-gray-100"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 border rounded-lg hover:bg-gray-100"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages || 1}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1 border rounded-lg hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Right Slide Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setOpenModal(false)}
          ></div>
          <div className="ml-auto h-full w-[350px] bg-white shadow-lg p-6 overflow-y-auto relative transition-transform transform translate-x-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingIndex !== null ? "Edit User" : "Add User"}
              </h2>
              <button onClick={() => setOpenModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              {editingIndex !== null
                ? "Edit the user details"
                : "You have to add user"}
            </p>

            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-lg mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="w-full p-2 border rounded-lg mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="owner">Owner</option>
              <option value="sales">Sales</option>
            </select>
            <select
              className="w-full p-2 border rounded-lg mb-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded-lg mb-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleAddOrUpdate}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                {editingIndex !== null ? "Update User" : "Add User"}
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
