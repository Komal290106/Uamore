// import rose from '../../assets/images/products/rose_elixir.jpg';
// import midnight from '../midnight_oud.jpeg';
// import citrus from '../citrus_aurum.jpeg';
// import velvet from '../velevt_orchid.avif';
// import ocean from '../ocean.webp';
// import tobacoo from '../tabacoo_vanilaa.avif';


export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  scentNotes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  category: 'men' | 'women' | 'unisex';
  popularity: number;
  isOrganic: boolean;
  volume: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Rose Elixir',
    price: 120,
    image: '/src/components/rose_elixir.jpg',
    description: 'A romantic and timeless rose extrait, crafted from the world’s finest blossoms. Elegant, poetic, and unforgettable.',
    scentNotes: {
      top: ['Bulgarian Rose', 'Pink Pepper', 'Bergamot'],
      middle: ['Damask Rose', 'Peony', 'Lily of the Valley'],
      base: ['White Musk', 'Sandalwood', 'Amber']
    },
    category: 'women',
    popularity: 95,
    isOrganic: true,
    volume: '50ml'
  },
  {
    id: '2',
    name: 'Midnight Oud',
    price: 180,
    image: '/src/components/midnight_oud.jpg',
    description: 'An intoxicating blend of rare oud and exotic spices. Dark, velvety, and irresistibly masculine.',
    scentNotes: {
      top: ['Black Pepper', 'Cardamom', 'Pink Pepper'],
      middle: ['Oud Wood', 'Rose', 'Saffron'],
      base: ['Patchouli', 'Amber', 'Vanilla']
    },
    category: 'men',
    popularity: 88,
    isOrganic: true,
    volume: '75ml'
  },
  {
    id: '3',
    name: 'Citrus Aurum',
    price: 95,
    image: '/src/components/citrus_aurum.jpg',
   description: 'A radiant citrus creation kissed by sunshine. Sparkling, effervescent, and endlessly uplifting.',
    scentNotes: {
       top: ['Sicilian Lemon', 'Grapefruit Zest', 'Mandarin'],
      middle: ['Neroli Blossom', 'Jasmine Tea', 'Fresh Green Notes'],
      base: ['Cedarwood', 'White Musk', 'Vetiver']
    },
    category: 'unisex',
    popularity: 92,
    isOrganic: true,
    volume: '30ml'
  },
  {
    id: '4',
    name: 'Velvet Orchid',
    price: 150,
    image: '/src/components/velvet_orchid.avif',
    description: 'Opulent and sensual — a floral symphony with creamy orchid and molten amber at its heart.',
    scentNotes: {
       top: ['Black Currant', 'Citrus Nectar', 'Wild Honey'],
      middle: ['Velvet Orchid', 'Lotus Petals', 'Oriental Spices'],
      base: ['Vanilla Bean', 'Amberwood', 'Balsam']
    },
    category: 'women',
    popularity: 90,
    isOrganic: true,
    volume: '50ml'
  },
  {
    id: '5',
     name: 'Ocean Reverie',
    price: 110,
    image: '/src/components/ocean.webp',
    description: 'A refreshing aquatic fragrance that captures the essence of ocean waves and sea salt.',
    scentNotes: {
       top: ['Sea Salt', 'Grapefruit Peel', 'Crushed Mint'],
      middle: ['Water Lily', 'Marine Accord', 'Jasmine Petals'],
      base: ['Sun-bleached Driftwood', 'Musk', 'Ambergris']
    },
    category: 'unisex',
    popularity: 85,
    isOrganic: true,
    volume: '75ml'
  },
  {
    id: '6',
    name: 'Tobacco Vanilla',
    price: 200,
    image: '/src/components/tabacoo_vanilla.avif',
    description: 'Smoldering tobacco leaf and golden vanilla in perfect harmony. Deep, gourmand, and powerfully refined.',
    scentNotes: {
       top: ['Tobacco Leaf', 'Clove Spice', 'Ginger Essence'],
      middle: ['Cacao Absolute', 'Tonka Bean', 'Dried Plum'],
      base: ['Madagascar Vanilla', 'Woods', 'Sweet Myrrh']
    },
    category: 'men',
    popularity: 87,
    isOrganic: true,
    volume: '100ml'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getTopSellingProducts = (limit: number = 3): Product[] => {
  return products
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
};