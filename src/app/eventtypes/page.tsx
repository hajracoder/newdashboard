// "use client";

// import React, { useState, useEffect } from "react";
// import { Plus, Edit, Trash2, X } from "lucide-react";
// import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
// import { toast } from "sonner";

// type EventType = {
//   name: string;
// };

// export default function EventTypesPage() {
//   const [events, setEvents] = useState<EventType[]>([]);
//   const [open, setOpen] = useState(false);
//   const [newName, setNewName] = useState("");
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   // Load events from localStorage (client-side only)
//   useEffect(() => {
//     const saved = localStorage.getItem("events");
//     if (saved) setEvents(JSON.parse(saved));
//   }, []);

//   // Save events to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("events", JSON.stringify(events));
//   }, [events]);

//   const openDrawerForEdit = (index: number) => {
//     setNewName(events[index].name);
//     setEditingIndex(index);
//     setOpen(true);
//   };

//   const handleAddOrUpdate = () => {
//     if (!newName.trim()) {
//       toast.error("Enter event name!");
//       return;
//     }

//     if (editingIndex !== null) {
//       const updated = [...events];
//       updated[editingIndex] = { name: newName };
//       setEvents(updated);
//       toast.success("Event updated!");
//     } else {
//       setEvents([...events, { name: newName }]);
//       toast.success("Event added!");
//     }

//     setNewName("");
//     setEditingIndex(null);
//     setOpen(false);
//   };

//   const handleDelete = (index: number) => {
//     if (confirm("Are you sure you want to delete this event?")) {
//       const updated = events.filter((_, i) => i !== index);
//       setEvents(updated);
//       toast.success("Event deleted!");
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Event Types</h1>
//         <button
//           onClick={() => setOpen(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
//         >
//           <Plus className="w-4 h-4" /> Add Event
//         </button>
//       </div>

//       {/* Event List */}
//       <div className="space-y-2 border px-6 rounded-2xl">
//         {events.map((event, index) => (
//           <div key={index} className="flex justify-between items-center p-2 border-b">
//             <span>{event.name}</span>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => openDrawerForEdit(index)}
//                 className="border rounded-lg p-2 hover:bg-gray-100"
//               >
//                 <Edit className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleDelete(index)}
//                 className="border rounded-lg p-2 hover:bg-gray-100"
//               >
//                 <Trash2 className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Drawer */}
//       <Drawer open={open} onOpenChange={setOpen} direction="right">
//         <DrawerContent className="h-full w-[45%] ml-auto rounded-none">
//           <DrawerHeader>
//             <DrawerTitle>{editingIndex !== null ? "Edit Event" : "Add Event"}</DrawerTitle>
//             <button onClick={() => setOpen(false)} className="absolute right-4 top-4">
//               <X className="w-5 h-5" />
//             </button>
//           </DrawerHeader>

//           <div className="p-4 space-y-4">
//             <input
//               type="text"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               placeholder="Enter Event Name"
//               className="w-full p-2 border rounded-lg"
//             />
//             <button
//               onClick={handleAddOrUpdate}
//               className="w-full p-2 border rounded-lg bg-orange-600 text-white hover:bg-orange-700"
//             >
//               {editingIndex !== null ? "Update Event" : "Add Event"}
//             </button>
//           </div>

//           <DrawerFooter className="flex justify-end gap-3">
//             <button
//               onClick={() => setOpen(false)}
//               className="px-4 py-2 rounded-lg border hover:bg-gray-100"
//             >
//               Close
//             </button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// }






















"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { toast } from "sonner";

type EventType = {
  name: string;
};

export default function EventTypesPage() {
  const [events, setEvents] = useState<EventType[]>([]); // start with empty array
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false); // track hydration

  // Load events from localStorage after hydration
  useEffect(() => {
    const saved = localStorage.getItem("events");
    if (saved) setEvents(JSON.parse(saved));
    setHydrated(true);
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    if (hydrated) localStorage.setItem("events", JSON.stringify(events));
  }, [events, hydrated]);

  const openDrawerForEdit = (index: number) => {
    setNewName(events[index].name);
    setEditingIndex(index);
    setOpen(true);
  };

  const handleAddOrUpdate = () => {
    if (!newName.trim()) {
      toast.error("Enter event name!");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...events];
      updated[editingIndex] = { name: newName };
      setEvents(updated);
      toast.success("Event updated!");
    } else {
      setEvents([...events, { name: newName }]);
      toast.success("Event added!");
    }

    setNewName("");
    setEditingIndex(null);
    setOpen(false);
  };

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to delete this event?")) {
      const updated = events.filter((_, i) => i !== index);
      setEvents(updated);
      toast.success("Event deleted!");
    }
  };

  // Render nothing until hydration is done
  if (!hydrated) return null;

  return (
    <div className="p-6 bg-white h-full rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Event Types</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>

      {/* Event List */}
      <div className="space-y-2 border px-6 rounded-2xl">
        {events.map((event, index) => (
          <div key={index} className="flex justify-between items-center p-2 border-b">
            <span>{event.name}</span>
            <div className="flex gap-2">
              <button
                onClick={() => openDrawerForEdit(index)}
                className="border rounded-lg p-2 hover:bg-gray-100"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="border rounded-lg p-2 hover:bg-gray-100"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Drawer */}
      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerContent className="h-full w-[45%] ml-auto rounded-none">
          <DrawerHeader>
            <DrawerTitle>{editingIndex !== null ? "Edit Event" : "Add Event"}</DrawerTitle>
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4">
              <X className="w-5 h-5" />
            </button>
          </DrawerHeader>

          <div className="p-4 space-y-4">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter Event Name"
              className="w-full p-2 border rounded-lg"
            />
            <button
              onClick={handleAddOrUpdate}
              className="w-full p-2 border rounded-lg bg-orange-600 text-white hover:bg-orange-700"
            >
              {editingIndex !== null ? "Update Event" : "Add Event"}
            </button>
          </div>

          <DrawerFooter className="flex justify-end gap-3">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              Close
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
