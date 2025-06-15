
export const FILTERS = [
  "Luxury",
  "Family Friendly",
  "Seaside",
  "Mountain Retreat",
  "Urban Stay",
];

// API URLs
export const API_URLS = {
  GET_PROPERTIES: "/api/properties",
  BOOK_PROPERTY: "/api/book",
};

// UI Text
export const UI_TEXT = {
  BOOK_NOW: "Reserve Now",
  VIEW_DETAILS: "See More",
  LOADING: "Please wait...",
};

// Configuration
export const CONFIG = {
  MAX_ITEMS_PER_PAGE: 10,
  DEFAULT_LANGUAGE: "en",
};

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Seaside Serenity Villa",
    address: {
      state: "California",
      city: "Santa Monica",
      country: "USA",
    },
    rating: 4.9,
    category: ["Beachfront", "Infinity Pool", "Free WiFi"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/images/image1.png",
    discount: "10",
  },
  {
    name: "Alpine Retreat Lodge",
    address: {
      state: "Tyrol",
      city: "Innsbruck",
      country: "Austria",
    },
    rating: 4.8,
    category: ["Mountain View", "Ski Access", "Spa"],
    price: 3200,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/assets/images/image2.png",
    discount: "",
  },
  {
    name: "Urban Chic Apartment",
    address: {
      state: "New York",
      city: "New York City",
      country: "USA",
    },
    rating: 4.7,
    category: ["City Center", "Modern Design", "24h Checkin"],
    price: 3000,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/images/image3.png",
    discount: "15",
  },
  {
    name: "Countryside Escape Cabin",
    address: {
      state: "Wales",
      city: "Brecon Beacons",
      country: "UK",
    },
    rating: 4.6,
    category: ["Secluded", "Nature Trails", "Fireplace"],
    price: 1800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/images/image4.png",
    discount: "20",
  },
  {
    name: "Tropical Beach Haven",
    address: {
      state: "Koh Samui",
      city: "Thailand",
      country: "Thailand",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Free Breakfast"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "/assets/images/image5.png",
    discount: "",
  },
  {
    name: "Desert Oasis Retreat",
    address: {
      state: "Arizona",
      city: "Sedona",
      country: "USA",
    },
    rating: 4.9,
    category: ["Desert View", "Hot Tub", "Self Checkin"],
    price: 2500,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/images/image6.png",
    discount: "5",
  },
  {
    name: "Historic Castle Stay",
    address: {
      state: "Scotland",
      city: "Edinburgh",
      country: "UK",
    },
    rating: 4.85,
    category: ["Historical", "Castle View", "Free WiFi"],
    price: 6000,
    offers: {
      bed: "6",
      shower: "5",
      occupants: "10-12",
    },
    image: "/assets/images/image7.png",
    discount: "30",
  },
  {
    name: "Lakeside Dream Cottage",
    address: {
      state: "Ontario",
      city: "Muskoka",
      country: "Canada",
    },
    rating: 4.7,
    category: ["Lakeside", "Fishing", "BBQ"],
    price: 2200,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/images/image8.png",
    discount: "",
  },
  {
    name: "Cliffside Retreat",
    address: {
      state: "Amalfi",
      city: "Italy",
      country: "Italy",
    },
    rating: 4.9,
    category: ["Cliffside", "Infinity Pool", "Panoramic View"],
    price: 7000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/images/image9.png",
    discount: "15",
  },
  {
    name: "Modern Farmhouse",
    address: {
      state: "Texas",
      city: "Austin",
      country: "USA",
    },
    rating: 4.8,
    category: ["Countryside", "Farm Tour", "Outdoor Activities"],
    price: 2800,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/images/image10.png",
    discount: "10",
  },
];