export interface DrinkItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
  featured?: boolean;
}

export const drinks: DrinkItem[] = [
  {
    id: 1,
    name: "Affogato",
    image: "/images/drinks/affogato.png",
    description:
      "Vanilla gelato drowned in rich espresso with luxurious bittersweet depth.",
    price: "₹420",
    category: "Signature",
    featured: true,
  },
  {
    id: 2,
    name: "Americano",
    image: "/images/drinks/americano.png",
    description:
      "Smooth espresso balanced with hot water for a clean and bold finish.",
    price: "₹260",
    category: "Hot Coffee",
  },
  {
    id: 3,
    name: "Cappuccino",
    image: "/images/drinks/cappuccino.png",
    description:
      "Velvety milk foam layered over rich espresso with artisan latte texture.",
    price: "₹340",
    category: "Hot Coffee",
    featured: true,
  },
  {
    id: 4,
    name: "Caramel Latte",
    image: "/images/drinks/caramel-latte.png",
    description:
      "Creamy caramel espresso latte finished with soft golden sweetness.",
    price: "₹390",
    category: "Latte",
  },
  {
    id: 5,
    name: "Cold Brew",
    image: "/images/drinks/cold-brew.png",
    description:
      "Slow-steeped cold brew with deep roasted flavor and silky smooth body.",
    price: "₹360",
    category: "Cold Coffee",
  },
  {
    id: 6,
    name: "Cream Cold Brew",
    image: "/images/drinks/cream-cold-brew.png",
    description:
      "Cold brew layered with luxurious sweet cream and smooth finish.",
    price: "₹420",
    category: "Cold Coffee",
    featured: true,
  },
  {
    id: 7,
    name: "Ember Signature",
    image: "/images/drinks/ember-signature.png",
    description:
      "The iconic Café Ember blend crafted with espresso, cream, and warmth.",
    price: "₹520",
    category: "Signature",
    featured: true,
  },
  {
    id: 8,
    name: "Espresso Tonic",
    image: "/images/drinks/espresso-tonic.png",
    description:
      "Refreshing sparkling tonic balanced with bold espresso notes.",
    price: "₹410",
    category: "Specialty",
  },
  {
    id: 9,
    name: "Espresso",
    image: "/images/drinks/espresso.png",
    description:
      "Pure concentrated espresso with rich crema and intense aroma.",
    price: "₹220",
    category: "Espresso",
  },
  {
    id: 10,
    name: "Flat White",
    image: "/images/drinks/flat-white.png",
    description:
      "Silky microfoam poured over double espresso for balanced smoothness.",
    price: "₹340",
    category: "Hot Coffee",
  },
  {
    id: 11,
    name: "Forest Matcha",
    image: "/images/drinks/forest-matcha.png",
    description:
      "Ceremonial matcha latte inspired by earthy calm and quiet luxury.",
    price: "₹460",
    category: "Matcha",
  },
  {
    id: 12,
    name: "Golden Vanilla Latte",
    image: "/images/drinks/golden-vanilla-latte.png",
    description: "Smooth vanilla-infused latte with warm golden sweetness.",
    price: "₹390",
    category: "Latte",
  },
  {
    id: 13,
    name: "Hazelnut Latte",
    image: "/images/drinks/hazelnut-latte.png",
    description:
      "Creamy espresso latte layered with roasted hazelnut richness.",
    price: "₹410",
    category: "Latte",
  },
  {
    id: 14,
    name: "Iced Coffee",
    image: "/images/drinks/iced-coffee.png",
    description:
      "Classic chilled coffee with smooth texture and refreshing finish.",
    price: "₹300",
    category: "Cold Coffee",
  },
  {
    id: 15,
    name: "Iced Matcha",
    image: "/images/drinks/iced-matcha.png",
    description:
      "Refreshing ceremonial matcha served cold with creamy texture.",
    price: "₹430",
    category: "Matcha",
  },
  {
    id: 16,
    name: "Iced Mocha",
    image: "/images/drinks/iced-mocha.png",
    description:
      "Chocolate espresso blend served cold with silky mocha richness.",
    price: "₹420",
    category: "Mocha",
  },
  {
    id: 17,
    name: "Irish Coffee",
    image: "/images/drinks/irish-coffee.png",
    description:
      "Bold coffee layered with luxurious cream and deep roasted warmth.",
    price: "₹480",
    category: "Specialty",
  },
  {
    id: 18,
    name: "Latte",
    image: "/images/drinks/latte.png",
    description:
      "Classic creamy latte with smooth espresso and soft milk texture.",
    price: "₹330",
    category: "Latte",
  },
  {
    id: 19,
    name: "Matcha Latte",
    image: "/images/drinks/matcha-latte.png",
    description: "Ceremonial-grade matcha blended with silky steamed milk.",
    price: "₹450",
    category: "Matcha",
  },
  {
    id: 20,
    name: "Midnight Mocha",
    image: "/images/drinks/midnight-mocha.png",
    description:
      "Dark chocolate mocha with intense espresso depth and velvet finish.",
    price: "₹460",
    category: "Mocha",
    featured: true,
  },
  {
    id: 21,
    name: "Mocha",
    image: "/images/drinks/mocha.png",
    description:
      "Rich espresso blended with artisan chocolate and steamed milk.",
    price: "₹390",
    category: "Mocha",
  },
  {
    id: 22,
    name: "Pistachio Latte",
    image: "/images/drinks/pistachio-latte.png",
    description:
      "Creamy pistachio latte with subtle nutty sweetness and luxury finish.",
    price: "₹470",
    category: "Specialty",
  },
  {
    id: 23,
    name: "Spanish Latte",
    image: "/images/drinks/spanish-latte.png",
    description: "Sweet condensed milk latte with smooth espresso richness.",
    price: "₹410",
    category: "Latte",
  },
  {
    id: 24,
    name: "Vanilla Cold Foam",
    image: "/images/drinks/vanilla-cold-foam.png",
    description:
      "Cold brew topped with airy vanilla cold foam and creamy texture.",
    price: "₹430",
    category: "Cold Coffee",
  },
];
