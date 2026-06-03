export interface StoryItem {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

export const story: StoryItem[] = [
  {
    id: 1,
    title: "Founder’s Vision",
    image: "/images/story/story-founder.png",
    description:
      "A warm cinematic portrait capturing the soul, emotion, and artisan identity behind Café Ember.",
    category: "Founder",
  },
  {
    id: 2,
    title: "Coffee Origins",
    image: "/images/story/story-coffee-origin.png",
    description:
      "Premium coffee beans, earthy textures, and sourcing rituals rooted in craftsmanship.",
    category: "Coffee",
  },
  {
    id: 3,
    title: "Artisan Process",
    image: "/images/story/story-artisan-process.png",
    description:
      "Steaming espresso, careful pouring, and handcrafted coffee preparation captured cinematically.",
    category: "Craftsmanship",
  },
  {
    id: 4,
    title: "Community Culture",
    image: "/images/story/story-community.png",
    description:
      "Conversations, laughter, and emotional warmth forming the heart of Café Ember.",
    category: "Community",
  },
  {
    id: 5,
    title: "Dessert Craft",
    image: "/images/story/story-dessert-craft.png",
    description:
      "Elegant dessert plating and handcrafted finishing touches in a luxury café kitchen.",
    category: "Desserts",
  },
  {
    id: 6,
    title: "Evening Atmosphere",
    image: "/images/story/story-evening-vibes.png",
    description:
      "Golden lights, calm ambience, and cinematic nighttime luxury inside the café.",
    category: "Atmosphere",
  },
  {
    id: 7,
    title: "Brand Identity",
    image: "/images/story/story-brand-detail.png",
    description:
      "Menus, packaging, textures, and logo compositions expressing the Café Ember aesthetic.",
    category: "Branding",
  },
  {
    id: 8,
    title: "Signature Moment",
    image: "/images/story/story-signature-moment.png",
    description:
      "The emotional hero composition featuring Heaven in a Glass paired with artisan coffee.",
    category: "Signature",
  },
];
