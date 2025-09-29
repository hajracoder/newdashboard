


// "use client";

// import React, { useState, useEffect } from "react";
// import { Plus, Edit, Trash2, X, ChevronsUpDown } from "lucide-react";
// import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
// import { Command, CommandInput, CommandList, CommandItem, CommandGroup } from "@/components/ui/command";
// import { toast } from "sonner";

// // Icons import
// import { Car, Sun, Trees, Snowflake, Music, Mic, Tv, Wifi, Bed, Bath, Coffee } from "lucide-react";

// // ICONS map
// const ICONS_MAP = { Car, Sun, Trees, Snowflake, Music, Mic, Tv, Wifi, Bed, Bath, Coffee } as const;
// const ICONS = Object.entries(ICONS_MAP).map(([name, icon]) => ({ name, icon }));

// type Attribute = { name: string; icon: keyof typeof ICONS_MAP };

// export default function AttributesPage() {
//   const [attributes, setAttributes] = useState<Attribute[]>([]);
//   const [open, setOpen] = useState(false); // Drawer
//   const [dropdownOpen, setDropdownOpen] = useState(false); // Icon picker
//   const [newName, setNewName] = useState("");
//   const [selectedIcon, setSelectedIcon] = useState<keyof typeof ICONS_MAP | null>(null);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   // Load from localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("attributes");
//       if (saved) setAttributes(JSON.parse(saved));
//     }
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("attributes", JSON.stringify(attributes));
//   }, [attributes]);

//   const handleAddOrUpdate = () => {
//     if (!newName || !selectedIcon) {
//       toast.error("Enter name and pick an icon!");
//       return;
//     }

//     if (editingIndex !== null) {
//       const updated = [...attributes];
//       updated[editingIndex] = { name: newName, icon: selectedIcon };
//       setAttributes(updated);
//       toast.success("Attribute updated!");
//     } else {
//       setAttributes([...attributes, { name: newName, icon: selectedIcon }]);
//       toast.success("Attribute added!");
//     }

//     setNewName("");
//     setSelectedIcon(null);
//     setEditingIndex(null);
//     setOpen(false);
//     setDropdownOpen(false);
//   };

//   const handleDelete = (index: number) => {
//     if (confirm("Are you sure you want to delete this attribute?")) {
//       const updated = attributes.filter((_, i) => i !== index);
//       setAttributes(updated);
//       toast.success("Attribute deleted!");
//     }
//   };

//   const openDrawerForEdit = (index: number) => {
//     const attr = attributes[index];
//     setNewName(attr.name);
//     setSelectedIcon(attr.icon);
//     setEditingIndex(index);
//     setOpen(true);
//   };

//   return (
//     <div className="p-6 bg-white h-full rounded-lg">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Attributes</h1>
//         <button
//           onClick={() => setOpen(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
//         >
//           <Plus className="w-4 h-4" /> Add Attribute
//         </button>
//       </div>

//       {/* Attributes List */}
//       <div className="space-y-2 border px-6 rounded-2xl">
//         {attributes.map((attr, index) => {
//           const IconComp = ICONS_MAP[attr.icon];
//           return (
//             <div key={index} className="flex justify-between items-center p-2 border-b">
//               <div className="flex items-center gap-2">
//                 {IconComp && <IconComp className="w-5 h-5 text-black-600" />}
//                 <span>{attr.name}</span>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => openDrawerForEdit(index)}
//                   className="border rounded-lg p-2 hover:bg-gray-100"
//                 >
//                   <Edit className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="border rounded-lg p-2 hover:bg-gray-100"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Drawer */}
//       <Drawer open={open} onOpenChange={setOpen} direction="right">
//         <DrawerContent className="h-full w-[45%] ml-auto rounded-none">
//           <DrawerHeader>
//             <DrawerTitle>{editingIndex !== null ? "Edit Attribute" : "Add Attribute"}</DrawerTitle>
//             <button onClick={() => setOpen(false)} className="absolute right-4 top-4">
//               <X className="w-5 h-5" />
//             </button>
//           </DrawerHeader>

//           <div className="p-4 space-y-4">
//             <h1>Name</h1>
//             <input
//               type="text"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               placeholder="Enter Attribute Name"
//               className="w-full p-2 border rounded-lg"
//             />

//             {/* Icon picker */}
//             <div className="relative">
//               <h1>Icon</h1>
//             <button
//   className="w-full flex justify-between items-center p-2 border rounded-lg"
//   onClick={() => setOpen(!open)}
// >
//   {selectedIcon && ICONS_MAP[selectedIcon]
//     ? React.createElement(ICONS_MAP[selectedIcon] as React.ComponentType<{ className?: string }>, { className: "w-5 h-5" })
//     : "Pick the icon..."}
//   <ChevronsUpDown className="w-4 h-4" />
// </button>


//               {dropdownOpen && (
//                 <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg">
//                   <Command>
//                     <CommandInput placeholder="Search icons..." autoFocus />
//                     <CommandList>
//                       <CommandGroup heading="Icons">
//                         {ICONS.map((ic, i) => {
//                           const IconComp = ic.icon;
//                           return (
//                             <CommandItem
//                               key={i}
//                               onSelect={() => {
//                                 setSelectedIcon(ic.name as keyof typeof ICONS_MAP);
//                                 setDropdownOpen(false);
//                               }}
//                               className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100"
//                             >
//                               <IconComp className="w-5 h-5" /> {ic.name}
//                             </CommandItem>
//                           );
//                         })}
//                       </CommandGroup>
//                     </CommandList>
//                   </Command>
//                 </div>
//               )}


//             </div>

//             {/* Preview */}
//             {selectedIcon && (
//               <div className="flex items-center gap-2 mt-2">
//                 {React.createElement(ICONS_MAP[selectedIcon], { className: "w-6 h-6 text-orange-600" })}
//                 <span>{newName || "Attribute Name"}</span>
//               </div>
//             )}
            
//           </div>

//           <DrawerFooter className="flex justify-end gap-3">
            
//             <button
//               onClick={handleAddOrUpdate}
//               className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
//             >
//               {editingIndex !== null ? "Update Attribute" : "Add Attribute"}
//             </button>
//             <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
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
import { Plus, Edit, Trash2, X, ChevronsUpDown } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Command, CommandInput, CommandList, CommandItem, CommandGroup } from "@/components/ui/command";
import { toast } from "sonner";

// Icons import
import { Car, Sun, Trees, Snowflake, Music, Mic, Tv, Wifi, Bed, Bath, Coffee } from "lucide-react";

// ICONS map
const ICONS_MAP = { Car, Sun, Trees, Snowflake, Music, Mic, Tv, Wifi, Bed, Bath, Coffee } as const;
const ICONS = Object.entries(ICONS_MAP).map(([name, icon]) => ({ name, icon }));

type Attribute = { name: string; icon: keyof typeof ICONS_MAP };

export default function AttributesPage() {
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [open, setOpen] = useState(false); // Drawer
  const [dropdownOpen, setDropdownOpen] = useState(false); // Icon picker
  const [newName, setNewName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof ICONS_MAP | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Load from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("attributes");
      if (saved) setAttributes(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("attributes", JSON.stringify(attributes));
  }, [attributes]);

  const handleAddOrUpdate = () => {
    if (!newName || !selectedIcon) {
      toast.error("Enter name and pick an icon!");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...attributes];
      updated[editingIndex] = { name: newName, icon: selectedIcon };
      setAttributes(updated);
      toast.success("Attribute updated!");
    } else {
      setAttributes([...attributes, { name: newName, icon: selectedIcon }]);
      toast.success("Attribute added!");
    }

    setNewName("");
    setSelectedIcon(null);
    setEditingIndex(null);
    setOpen(false);
    setDropdownOpen(false);
  };

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to delete this attribute?")) {
      const updated = attributes.filter((_, i) => i !== index);
      setAttributes(updated);
      toast.success("Attribute deleted!");
    }
  };

  const openDrawerForEdit = (index: number) => {
    const attr = attributes[index];
    setNewName(attr.name);
    setSelectedIcon(attr.icon);
    setEditingIndex(index);
    setOpen(true);
  };

  return (
    <div className="p-6 bg-white h-full rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Attributes</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2  bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90 "
        >
          <Plus className="w-4 h-4" /> Add Attribute
        </button>
      </div>

      {/* Attributes List */}
      <div className="space-y-2 border px-6 rounded-2xl">
        {attributes.map((attr, index) => {
          const IconComp = ICONS_MAP[attr.icon];
          return (
            <div key={index} className="flex justify-between items-center p-2 border-b">
              <div className="flex items-center gap-2">
                {IconComp && <IconComp className="w-5 h-5 text-black-600" />}
                <span>{attr.name}</span>
              </div>
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
          );
        })}
      </div>

      {/* Drawer */}
      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerContent className="h-full w-[45%] ml-auto rounded-none">
          <DrawerHeader>
            <DrawerTitle>{editingIndex !== null ? "Edit Attribute" : "Add Attribute"}</DrawerTitle>
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4">
              <X className="w-5 h-5" />
            </button>
          </DrawerHeader>

          <div className="p-4 space-y-4">
            <h1>Name</h1>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter Attribute Name"
              className="w-full p-2 border rounded-lg"
            />

            {/* Icon picker */}
            <div className="relative">
              <h1>Icon</h1>
              <button
                className="w-full flex justify-between items-center p-2 border rounded-lg"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedIcon
                  ? React.createElement(ICONS_MAP[selectedIcon], { className: "w-5 h-5" })
                  : "Pick the icon..."}
                <ChevronsUpDown className="w-4 h-4" />
              </button>

              {dropdownOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg">
                  <Command>
                    <CommandInput placeholder="Search icons..." autoFocus />
                    <CommandList>
                      <CommandGroup heading="Icons">
                        {ICONS.map((ic, i) => {
                          const IconComp = ic.icon;
                          return (
                            <CommandItem
                              key={i}
                              onSelect={() => {
                                setSelectedIcon(ic.name as keyof typeof ICONS_MAP);
                                setDropdownOpen(false);
                              }}
                              className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100"
                            >
                              <IconComp className="w-5 h-5" /> {ic.name}
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              )}
            </div>

            {/* Preview */}
            {selectedIcon && (
              <div className="flex items-center gap-2 mt-2">
                {React.createElement(ICONS_MAP[selectedIcon], { className: "w-6 h-6 text-orange-600" })}
                <span>{newName || "Attribute Name"}</span>
              </div>
            )}
          </div>

          <DrawerFooter className="flex justify-end gap-3">
           
            <button
              onClick={handleAddOrUpdate}
              className="px-4 py-2  bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90 "
            >
              {editingIndex !== null ? "Update Attribute" : "Add Attribute"}
            </button>
             <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
              Close
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
