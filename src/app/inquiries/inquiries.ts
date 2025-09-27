// src/data/inquiries.ts

export type Inquiries = {
  id: string
  contactPerson: string
  venue: string
  email: string
  eventDate: string
  deadline: string
  eventType: string
  guests: number
  notes: string
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED"
}

export const inquiries: Inquiries[] = [
  {
    id: "1",
    contactPerson: "Kristy Mosciski",
    venue: "eos",
    email: "cruz.padberg@example.org",
    eventDate: "36 days ago",
    deadline: "8 days ago",
    eventType: "Party",
    guests: 9232532,
    notes: "",
    status: "PENDING",
  },
  {
    id: "2",
    contactPerson: "Mrs. Joanne Ernser",
    venue: "debitis",
    email: "howell.daisy@example.com",
    eventDate: "24 days ago",
    deadline: "25 days ago",
    eventType: "Party",
    guests: 46355,
    notes: "",
    status: "PENDING",
  },
  {
    id: "3",
    contactPerson: "Pink Bode",
    venue: "et",
    email: "rosenbaum.chance@example.com",
    eventDate: "30 days ago",
    deadline: "10 days ago",
    eventType: "Wedding",
    guests: 12073,
    notes: "",
    status: "PENDING",
  },
  {
    id: "4",
    contactPerson: "Cristopher Lehner III",
    venue: "quae",
    email: "amos99@example.com",
    eventDate: "28 days ago",
    deadline: "26 days ago",
    eventType: "Birthday",
    guests: 913800677,
    notes: "",
    status: "PENDING",
  },
  {
    id: "5",
    contactPerson: "Prof. Kathleen Strosin IV",
    venue: "eius",
    email: "lacey.corwin@example.org",
    eventDate: "11 days ago",
    deadline: "31 days ago",
    eventType: "Party",
    guests: 17,
    notes: "",
    status: "PENDING",
  },
  {
    id: "6",
    contactPerson: "Mr. Stanford Schiller",
    venue: "iusto",
    email: "elizabeth.nitzsche@example.com",
    eventDate: "12 days ago",
    deadline: "30 days ago",
    eventType: "Birthday",
    guests: 7693,
    notes: "",
    status: "PENDING",
  },
  {
    id: "7",
    contactPerson: "Orville Russel",
    venue: "atque",
    email: "gloria.schowalter@example.com",
    eventDate: "14 days ago",
    deadline: "9 days ago",
    eventType: "Meeting",
    guests: 818485196,
    notes: "",
    status: "PENDING",
  },
  {
    id: "8",
    contactPerson: "Jed Thompson",
    venue: "id",
    email: "erdman.madelynn@example.org",
    eventDate: "11 days ago",
    deadline: "29 days ago",
    eventType: "Wedding",
    guests: 47,
    notes: "",
    status: "PENDING",
  },
  {
    id: "9",
    contactPerson: "Tanya Hamill",
    venue: "nesciunt",
    email: "amy.flatley@example.org",
    eventDate: "23 days ago",
    deadline: "30 days ago",
    eventType: "Meeting",
    guests: 3,
    notes: "",
    status: "PENDING",
  },
  {
    id: "10",
    contactPerson: "Adrianna Schoen",
    venue: "facere",
    email: "kamron.ziemann@example.com",
    eventDate: "27 days ago",
    deadline: "32 days ago",
    eventType: "Party",
    guests: 246474848,
    notes: "",
    status: "PENDING",
  },
]

// Dummy inquiries 11–60 generate
for (let i = 11; i <= 60; i++) {
  inquiries.push({
    id: i.toString(),
    contactPerson: `Contact Person ${i}`,
    venue: `Venue ${i}`,
    email: `person${i}@example.com`,
    eventDate: `${Math.floor(Math.random() * 40) + 1} days ago`,
    deadline: `${Math.floor(Math.random() * 40) + 1} days ago`,
    eventType: ["Wedding", "Birthday", "Meeting", "Party", "Conference"][
      Math.floor(Math.random() * 5)
    ],
    guests: Math.floor(Math.random() * 1000000),
    notes: "",
    status: "PENDING",
  })
}
