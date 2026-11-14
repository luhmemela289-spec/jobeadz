export const BRAND_INFO = {
  name: 'JOBEADZ',
  tagline: 'African Creativity. Beautifully Crafted.',
  phoneDisplay: '+27 73 360 3801',
  phoneHref: 'tel:+27733603801',
  whatsappHref: 'https://wa.me/27733603801',
} as const;

export const PRODUCT_CATEGORIES = [
  'All',
  'Traditional African Beads',
  'Colourful Beadwork',
  'African Beaded Accessories',
  'Decorative Bead Designs',
  'Handmade Bead Creations',
  'Custom Beadwork',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export interface BeadProduct {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  description: string;
  image: string;
  imageAlt: string;
  /** Optional CSS object-position and scale for highlighting specific craft details */
  imagePosition?: string;
  imageScaleClass?: string;
}

/**
 * Editable JOBEADZ Product Catalogue.
 * To add or update a product, modify an entry below or append a new item
 * with a photograph path from /assets/aistudio/...
 */
export const PRODUCTS: BeadProduct[] = [
  {
    id: 'crimson-gold-ceremonial-set',
    name: 'Crimson & Gold Pom-Pom Ceremonial Set',
    category: 'Traditional African Beads',
    description:
      'Rich crimson pom-pom beaded collar paired with a triangular red, gold, and ivory fringed belt and matching wrist cuffs.',
    image: '/assets/aistudio/Screenshot_20261110_002658_WhatsApp_1a7fcdc0.jpg',
    imageAlt:
      'Traditional crimson pom-pom beaded collar with red, gold, and white geometric triangular fringe belt and matching cuffs',
    imagePosition: 'center center',
  },
  {
    id: 'sunburst-orange-collar-belt',
    name: 'Sunburst Orange Pom-Pom Collar & Fringe Belt',
    category: 'Colourful Beadwork',
    description:
      'Vibrant orange pom-pom statement collar woven in open ivory and coral-red diamond latticework with a matching beaded fringe belt.',
    image: '/assets/aistudio/Screenshot_20261110_002709_WhatsApp_80e21d5e.jpg',
    imageAlt:
      'Vibrant orange pom-pom beaded collar with white and red diamond lattice and matching fringed belt',
    imagePosition: 'center center',
  },
  {
    id: 'monochrome-diamond-neckpiece',
    name: 'Monochrome Diamond Geometric Necklace & Band',
    category: 'African Beaded Accessories',
    description:
      'Striking black-and-white geometric diamond-patterned beaded neckpiece finished with cascading beaded fringe and a matching headband.',
    image: '/assets/aistudio/Screenshot_20261110_002631_WhatsApp_0318dc0e.jpg',
    imageAlt:
      'Black and white geometric diamond beaded long necklace with fringe tassels and matching headband',
    imagePosition: 'center center',
  },
  {
    id: 'royal-ruby-starburst-ensemble',
    name: 'Ruby & Gold Starburst Beadwork Ensemble',
    category: 'Handmade Bead Creations',
    description:
      'Radiating starburst collar intricately beaded in ruby red, gold, and crisp white, complemented by a headband, cuffs, and fringed sash.',
    image: '/assets/aistudio/Screenshot_20261110_002701_WhatsApp_8184e83e.jpg',
    imageAlt:
      'Ruby red, gold, and white starburst beaded collar with matching headpiece, wrist cuffs, and fringed belt',
    imagePosition: 'center center',
  },
  {
    id: 'fuchsia-ivory-scalloped-set',
    name: 'Fuchsia & Ivory Scalloped Beadwork Set',
    category: 'Decorative Bead Designs',
    description:
      'Bold fuchsia-pink and ivory radiating collar matched with scalloped beaded drape fringe, geometric cuffs, and a coordinated headband.',
    image: '/assets/aistudio/Screenshot_20261110_002654_WhatsApp_3e6cdcc5.jpg',
    imageAlt:
      'Bright pink and white radiating beaded collar with scalloped drape fringe belt, cuffs, and headband',
    imagePosition: 'center center',
  },
  {
    id: 'custom-geometric-fringe-design',
    name: 'Custom Geometric Fringe & Lattice Beadwork',
    category: 'Custom Beadwork',
    description:
      'Made-to-order beaded collars, fringed waistpieces, and coordinated accessories crafted in your preferred African-inspired colour palette.',
    image: '/assets/aistudio/Screenshot_20261110_002709_WhatsApp_80e21d5e.jpg',
    imageAlt:
      'Close-up of custom red, white, and gold triangular beaded fringe and lattice craftsmanship',
    imagePosition: 'center 88%',
    imageScaleClass: 'scale-[1.35]',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  layout: 'featured' | 'standard' | 'wide';
  imagePosition?: string;
  imageScaleClass?: string;
}

/**
 * Editable JOBEADZ Gallery Showcase.
 * Combines full product arrangements with close-up views of beadwork stitching.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-starburst',
    title: 'Starburst Lattice Collar & Full Set',
    subtitle: 'Traditional bead designs in ruby, gold, and ivory',
    image: '/assets/aistudio/Screenshot_20261110_002701_WhatsApp_8184e83e.jpg',
    imageAlt: 'Full starburst beadwork arrangement in red, gold, and white',
    layout: 'featured',
    imagePosition: 'center center',
  },
  {
    id: 'gal-monochrome',
    title: 'Geometric Diamond Weave',
    subtitle: 'Beaded accessories in crisp black and white contrast',
    image: '/assets/aistudio/Screenshot_20261110_002631_WhatsApp_0318dc0e.jpg',
    imageAlt: 'Black and white geometric diamond beaded necklace and headband',
    layout: 'standard',
    imagePosition: 'center center',
  },
  {
    id: 'gal-crimson-closeup',
    title: 'Triangular Fringe Craftsmanship',
    subtitle: 'Close-up beadwork detail in crimson, gold, and white',
    image: '/assets/aistudio/Screenshot_20261110_002658_WhatsApp_1a7fcdc0.jpg',
    imageAlt: 'Close-up detail of triangular beaded belt and fringe tassels',
    layout: 'standard',
    imagePosition: 'center 72%',
    imageScaleClass: 'scale-[1.4]',
  },
  {
    id: 'gal-orange-pom',
    title: 'Sunburst Pom-Pom & Lattice Arrangement',
    subtitle: 'Colourful African beads and hand-strung fringe',
    image: '/assets/aistudio/Screenshot_20261110_002709_WhatsApp_80e21d5e.jpg',
    imageAlt: 'Orange pom-pom collar and geometric beaded fringe belt',
    layout: 'standard',
    imagePosition: 'center center',
  },
  {
    id: 'gal-fuchsia-scallop',
    title: 'Scalloped Bead Drape & Collar',
    subtitle: 'Intricate symmetrical bead patterns in fuchsia and white',
    image: '/assets/aistudio/Screenshot_20261110_002654_WhatsApp_3e6cdcc5.jpg',
    imageAlt: 'Fuchsia and white beaded collar with scalloped fringe strands',
    layout: 'standard',
    imagePosition: 'center center',
  },
  {
    id: 'gal-diamond-closeup',
    title: 'Hand-Woven Bead Stitching Detail',
    subtitle: 'Precision diamond symmetry and beaded tassel tips',
    image: '/assets/aistudio/Screenshot_20261110_002631_WhatsApp_0318dc0e.jpg',
    imageAlt: 'Close-up of monochrome diamond beadwork weave and tassels',
    layout: 'wide',
    imagePosition: 'center 46%',
    imageScaleClass: 'scale-[1.45]',
  },
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'sparkles' | 'palette' | 'gem' | 'eye' | 'compass' | 'phone';
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'designs',
    title: 'Beautiful African-Inspired Designs',
    description:
      'Every piece celebrates timeless geometric forms, bold silhouettes, and the unmistakable character of African beadwork.',
    iconName: 'compass',
  },
  {
    id: 'colourful',
    title: 'Colourful Beadwork',
    description:
      'From warm crimson, terracotta, and gold to crisp monochrome and bright fuchsia, colour brings every pattern to life.',
    iconName: 'palette',
  },
  {
    id: 'unique',
    title: 'Unique Creative Pieces',
    description:
      'Distinctive collars, beaded belts, headbands, cuffs, and statement neckpieces curated with artistic individuality.',
    iconName: 'gem',
  },
  {
    id: 'detail',
    title: 'Attention to Detail',
    description:
      'Careful attention to bead alignment, symmetrical latticework, and balanced fringe movement in every finished design.',
    iconName: 'eye',
  },
  {
    id: 'culture',
    title: 'Cultural Inspiration',
    description:
      'Designs rooted in appreciation for African visual heritage, traditional bead motifs, and expressive artistic craft.',
    iconName: 'sparkles',
  },
  {
    id: 'service',
    title: 'Personal Customer Service',
    description:
      'Direct, friendly communication by phone or WhatsApp so you can enquire easily about available pieces or custom colours.',
    iconName: 'phone',
  },
];
