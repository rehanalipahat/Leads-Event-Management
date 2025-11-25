// Mock data for events
export const mockEvents = [
  {
    id: 1,
    title: "Music Concert 2025",
    date: "2025-02-10",
    time: "19:00",
    location: "New York City",
    venue: "Madison Square Garden",
    price: 120,
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    description: "A grand music concert featuring top artists from around the world. Experience an unforgettable night of live music.",
    category: "Music",
    tickets: [
      { type: "General", price: 50, available: 200 },
      { type: "VIP", price: 120, available: 50 },
      { type: "Premium", price: 200, available: 20 }
    ]
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    date: "2025-03-15",
    time: "09:00",
    location: "San Francisco",
    venue: "Moscone Center",
    price: 300,
    thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    description: "Join industry leaders for a day of innovation, networking, and cutting-edge technology discussions.",
    category: "Conference",
    tickets: [
      { type: "Early Bird", price: 250, available: 100 },
      { type: "Regular", price: 300, available: 300 },
      { type: "VIP", price: 500, available: 50 }
    ]
  },
  {
    id: 3,
    title: "Basketball Championship",
    date: "2025-04-20",
    time: "20:00",
    location: "Los Angeles",
    venue: "Staples Center",
    price: 150,
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
    description: "Watch the ultimate basketball championship game live. Don't miss this thrilling match!",
    category: "Sports",
    tickets: [
      { type: "Upper Level", price: 80, available: 500 },
      { type: "Lower Level", price: 150, available: 300 },
      { type: "Courtside", price: 500, available: 20 }
    ]
  },
  {
    id: 4,
    title: "Art Exhibition Opening",
    date: "2025-02-28",
    time: "18:00",
    location: "Chicago",
    venue: "Art Institute of Chicago",
    price: 40,
    thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    description: "Explore contemporary art from renowned artists. Opening night with special guest appearances.",
    category: "Arts",
    tickets: [
      { type: "General Admission", price: 40, available: 200 },
      { type: "VIP", price: 100, available: 30 }
    ]
  },
  {
    id: 5,
    title: "Jazz Night",
    date: "2025-03-05",
    time: "21:00",
    location: "New Orleans",
    venue: "Preservation Hall",
    price: 60,
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    description: "An intimate evening of jazz music featuring legendary performers in the heart of New Orleans.",
    category: "Music",
    tickets: [
      { type: "General", price: 60, available: 150 },
      { type: "Premium", price: 120, available: 30 }
    ]
  },
  {
    id: 6,
    title: "Food & Wine Festival",
    date: "2025-05-10",
    time: "12:00",
    location: "Napa Valley",
    venue: "Various Venues",
    price: 180,
    thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    description: "Indulge in exquisite cuisine and fine wines from world-class chefs and wineries.",
    category: "Food & Drink",
    tickets: [
      { type: "Day Pass", price: 180, available: 400 },
      { type: "Weekend Pass", price: 350, available: 200 }
    ]
  }
];

// Mock user data
export const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 234-567-8900",
  avatar: "https://ui-avatars.com/api/?name=John+Doe&background=1D4ED8&color=fff"
};

// Mock purchased tickets
export const mockTickets = [
  {
    id: 1,
    eventId: 1,
    eventTitle: "Music Concert 2025",
    ticketType: "VIP",
    price: 120,
    purchaseDate: "2025-01-15",
    qrCode: "QR-123456789",
    eventDate: "2025-02-10",
    eventTime: "19:00",
    location: "New York City"
  },
  {
    id: 2,
    eventId: 4,
    eventTitle: "Art Exhibition Opening",
    ticketType: "General Admission",
    price: 40,
    purchaseDate: "2025-01-20",
    qrCode: "QR-987654321",
    eventDate: "2025-02-28",
    eventTime: "18:00",
    location: "Chicago"
  }
];

