

"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Search } from "lucide-react"

export default function AddInquiryForm() {
  const [formData, setFormData] = useState({
    city: "",
    user: "",
    venue: "",
    eventType: "",
    phone: "",
    email: "",
    eventDate: "",
    guests: "",
    deadline: "",
    notes: "",
    status: "",
  })

  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
  }

  const applyDate = (field: string) => {
    if (date) {
      const iso = date.toISOString().slice(0, 16) // yyyy-MM-ddTHH:mm
      handleChange(field, iso)
    }
  }

  const commonClass =
    "h-12 px-4 text-base rounded-md border flex items-center justify-between w-full"

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white border rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
      >
         <h2 className="text-xl font-bold mb-4">Add Inquiry</h2>

        {/* City */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">City</label>
          <Input
            className={commonClass}
            placeholder="Enter city"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>

        {/* User */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Select Person</label>
          <Select onValueChange={(val) => handleChange("user", val)}>
            <SelectTrigger className={commonClass}>
              <SelectValue placeholder="Select user" />
              
            </SelectTrigger>
            <SelectContent>
              <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search status" className="pl-8" />
    </div>
              <SelectItem value="hajra">Hajra Qadir</SelectItem>
              <SelectItem value="masooma">Masooma</SelectItem>
              <SelectItem value="neha">Neha</SelectItem>
              <SelectItem value="zoha">Zoha</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Venue */}
       <div className="space-y-2">
  <label className="block text-sm font-semibold text-gray-700">Venues</label>
  <Select onValueChange={(val) => handleChange("venue", val)}>
    <SelectTrigger className={commonClass}>
      <SelectValue placeholder="Select venue" />
    </SelectTrigger>
    <SelectContent className="max-h-48  overflow-y-scroll">
      {/* Search box */}
        <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search status" className="pl-8" />
    </div>
      {/* Venue options */}
      <SelectItem value="drHall">Dr. Hall</SelectItem>
      <SelectItem value="profAuditorium">Professor Auditorium</SelectItem>
      <SelectItem value="seminarHall">Seminar Hall</SelectItem>
      <SelectItem value="conferenceRoom">Conference Room</SelectItem>
      <SelectItem value="lab1">Computer Lab 1</SelectItem>
      <SelectItem value="lab2">Computer Lab 2</SelectItem>
      <SelectItem value="library">Main Library</SelectItem>
      <SelectItem value="sportsHall">Sports Hall</SelectItem>
      <SelectItem value="openGround">Open Ground</SelectItem>
      <SelectItem value="cafe">Cafeteria</SelectItem>
      <SelectItem value="meetingRoom">Meeting Room</SelectItem>
      <SelectItem value="examHall">Examination Hall</SelectItem>
    </SelectContent>
  </Select>
</div>


        {/* Event Type */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Event Type</label>
          <Select onValueChange={(val) => handleChange("eventType", val)}>
            <SelectTrigger className={commonClass}>
              <SelectValue placeholder="Select event type" />
              
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="party">Party</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
          <Input
            type="text"
            className={commonClass}
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Email</label>
          <Input
            type="email"
            className={commonClass}
            placeholder="sara@gmail.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Event Date */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Event Date & Time</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className={commonClass}>
                {formData.eventDate || "Select date & time"}
                <ChevronsUpDown className="h-4 w-4 text-gray-500" />
              </button>
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
                    type="button"
                    onClick={() => applyDate("eventDate")}
                    className="bg-orange-600 hover:bg-orange-700 m-4 rounded-lg p-2 w-full text-white"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Guests</label>
          <Input
            type="number"
            className={commonClass}
            placeholder="Number of guests"
            value={formData.guests}
            onChange={(e) => handleChange("guests", e.target.value)}
          />
        </div>

        {/* Deadline */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Confirmation Due Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className={commonClass}>
                {formData.deadline || "Select due date"}
                <ChevronsUpDown className="h-4 w-4 text-gray-500" />
              </button>
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
                    type="button"
                    onClick={() => applyDate("deadline")}
                    className="bg-orange-600 hover:bg-orange-700 m-4 rounded-lg p-2 w-full text-white"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Notes</label>
          <Textarea
            className="h-24 px-4 py-2 text-base rounded-md border"
            placeholder="Enter notes"
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-12 px-4 text-base font-semibold bg-orange-500 text-white"
        >
          Add Inquiry
        </Button>
      </form>
    </div>
  )
}
