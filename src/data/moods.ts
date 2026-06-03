export interface MoodItem {
  id: number;
  title: string;
  image: string;
  description: string;
  tone: string;
}

export const moods: MoodItem[] = [
  {
    id: 1,
    title: "Morning Calm",
    image: "/images/moods/mood-morning.png",
    description:
      "Soft sunlight, fresh coffee, and peaceful luxury to begin the day slowly.",
    tone: "Warm · Peaceful",
  },
  {
    id: 2,
    title: "Golden Hour",
    image: "/images/moods/mood-golden-hour.png",
    description:
      "Dreamy sunset light flowing through Café Ember with cinematic warmth.",
    tone: "Golden · Cinematic",
  },
  {
    id: 3,
    title: "Rainy Evening",
    image: "/images/moods/mood-rainy-evening.png",
    description:
      "Rain reflections, warm interiors, and emotional café comfort.",
    tone: "Cozy · Emotional",
  },
  {
    id: 4,
    title: "Night Luxury",
    image: "/images/moods/mood-night-luxury.png",
    description:
      "Candles, glowing ambience, and elegant nightlife café atmosphere.",
    tone: "Luxury · Moody",
  },
  {
    id: 5,
    title: "Work Session",
    image: "/images/moods/mood-work-session.png",
    description:
      "Laptop, coffee, focus, and the modern freelancer café lifestyle.",
    tone: "Productive · Modern",
  },
  {
    id: 6,
    title: "Cozy Reading",
    image: "/images/moods/mood-cozy-reading.png",
    description:
      "Books, blankets, warm drinks, and quiet moments in soft sunlight.",
    tone: "Comfort · Soft",
  },
  {
    id: 7,
    title: "Date Night",
    image: "/images/moods/mood-date-night.png",
    description:
      "Romantic candlelit atmosphere filled with emotional warmth and connection.",
    tone: "Romantic · Elegant",
  },
  {
    id: 8,
    title: "Weekend Brunch",
    image: "/images/moods/mood-weekend-brunch.png",
    description:
      "Beautiful pastries, coffee, and vibrant conversations around the table.",
    tone: "Lifestyle · Social",
  },
  {
    id: 9,
    title: "Artisan Brewing",
    image: "/images/moods/mood-artisan-brewing.png",
    description:
      "Steam, precision pouring, and handcrafted coffee ritual storytelling.",
    tone: "Craftsmanship · Ritual",
  },
  {
    id: 10,
    title: "Dessert Moment",
    image: "/images/moods/mood-dessert-moment.png",
    description: "Luxury dessert styling with emotional editorial café energy.",
    tone: "Sweet · Editorial",
  },
  {
    id: 11,
    title: "Minimal Table",
    image: "/images/moods/mood-minimal-table.png",
    description:
      "Elegant marble textures, soft shadows, and clean café aesthetics.",
    tone: "Minimal · Premium",
  },
  {
    id: 12,
    title: "Candlelight Mood",
    image: "/images/moods/mood-candlelight.png",
    description: "Soft glowing candlelight and warm emerald-beige ambience.",
    tone: "Dreamy · Intimate",
  },
];
