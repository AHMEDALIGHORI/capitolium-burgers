export type BurgerItem = {
  id: string;
  name: string;
  price: number;
  calories: number;
  protein: string;
  bun: string;
  patty: string;
  spice: string;
  cookTime: string;
  image: string;
};

export const MENU_ITEMS: BurgerItem[] = [
  {
    id: "classic",
    name: "Classic Burger",
    price: 16,
    calories: 720,
    protein: "32g",
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    cookTime: "10-12 min",
    image: "/burgers/1b.png",
  },
  {
    id: "spicy",
    name: "Spicy Jalapeño Burger",
    price: 18,
    calories: 810,
    protein: "34g",
    bun: "Brioche",
    patty: "Beef",
    spice: "Hot",
    cookTime: "12-14 min",
    image: "/burgers/2b.png",
  },
  {
    id: "bacon",
    name: "Bacon Cheese Burger",
    price: 21,
    calories: 900,
    protein: "37g",
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    cookTime: "12-15 min",
    image: "/burgers/3b.png",
  },
  {
    id: "veggie",
    name: "Veggie Delight Burger",
    price: 15,
    calories: 620,
    protein: "17g",
    bun: "Sesame",
    patty: "Veggie",
    spice: "Mild",
    cookTime: "10-12 min",
    image: "/burgers/4b.png",
  },
  {
    id: "bbq",
    name: "BBQ Ranch Burger",
    price: 19,
    calories: 870,
    protein: "36g",
    bun: "Brioche",
    patty: "Beef",
    spice: "Medium",
    cookTime: "12-14 min",
    image: "/burgers/5b.png",
  },
  {
    id: "mushroom",
    name: "Mushroom Swiss Burger",
    price: 20,
    calories: 830,
    protein: "33g",
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    cookTime: "12-14 min",
    image: "/burgers/6b.png",
  },
];

export const CITIES = [
  {
    label: "BERLIN",
    image: "/img-webp/berlin.webp",
    alt: "Capitolium Burger takeaway packaging in Berlin",
    blurb: "Grilled to perfection juicy, smoky, unforgettable.",
  },
  {
    label: "LONDON",
    image: "/img-webp/london.webp",
    alt: "Capitolium Burger takeaway packaging in London",
    blurb: "Sun-ripened tomatoes that bring natural sweetness and balance.",
  },
  {
    label: "NEW YORK",
    image: "/img-webp/newyork.webp",
    alt: "Capitolium Burger takeaway packaging in New York",
    blurb: "Rich, creamy cheese that melts into every bite.",
  },
  {
    label: "SYDNEY",
    image: "/img-webp/sydney.webp",
    alt: "Capitolium Burger takeaway packaging in Sydney",
    blurb: "Grilled to perfection juicy, smoky, unforgettable.",
  },
  {
    label: "TOKYO",
    image: "/img-webp/tokyo.webp",
    alt: "Capitolium Burger takeaway packaging in Tokyo",
    blurb: "Soft, toasted buns crafted to hold everything together.",
  },
] as const;

export const INGREDIENTS = [
  {
    title: "Freshly Greens",
    description: "Grilled to perfection juicy, smoky, unforgettable.",
    image: "/img-webp/lettuce.webp",
    detail: "/img-webp/lettuceimg.webp",
  },
  {
    title: "Juicy Tomatoes",
    description:
      "Sun-ripened tomatoes that bring natural sweetness and balance.",
    image: "/img-webp/tomato.webp",
    detail: "/img-webp/tomatoimg.webp",
  },
  {
    title: "Creamy Cheese",
    description: "Rich, creamy cheese that melts into every bite.",
    image: "/img-webp/cheese.webp",
    detail: "/img-webp/cheeseimg.webp",
  },
  {
    title: "Perfect Patty",
    description: "Grilled to perfection juicy, smoky, unforgettable.",
    image: "/img-webp/tikki.webp",
    detail: "/img-webp/meat.webp",
  },
  {
    title: "Artisan Bun",
    description: "Soft, toasted buns crafted to hold everything together.",
    image: "/img-webp/bun.webp",
    detail: "/img-webp/bun.webp",
  },
] as const;
