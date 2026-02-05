import { type ImagePlaceholder, PlaceHolderImages } from './placeholder-images';

export type Product = {
  name: string;
  description: string;
  image: ImagePlaceholder;
};

export type SubCategory = {
  id: string;
  name: string;
  description: string;
  image: ImagePlaceholder;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image: ImagePlaceholder;
  subCategories?: Omit<SubCategory, 'description' | 'image'>[];
};

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback to a generic placeholder if a specific one isn't found.
    const placeholder = PlaceHolderImages.find((img) => img.id === 'product-placeholder');
    if (!placeholder) throw new Error('Default placeholder image not found.');
    return placeholder;
  }
  return image;
};

export const productCategories: ProductCategory[] = [
  {
    id: 'natursteine',
    name: 'Natursteine',
    description: 'Robuste und zeitlose Steine für langlebige Gestaltungen.',
    image: findImage('category-natursteine'),
    subCategories: [
      { id: 'granit', name: 'Granit' },
      { id: 'travertin', name: 'Travertin' },
      { id: 'schiefer', name: 'Schiefer' },
      { id: 'sandstein', name: 'Sandstein' },
      { id: 'brasil-quarzit', name: 'Brasil. Quarzit' },
      { id: 'luserna-gneis', name: 'Luserna Gneis' },
      { id: 'stainzer-gneis', name: 'Stainzer Gneis' },
      { id: 'kanfanar', name: 'Kanfanar' },
      { id: 'porphyr', name: 'Porphyr' },
      { id: 'basalt', name: 'Basalt' },
      { id: 'tuff', name: 'Tuff' },
    ],
  },
  {
    id: 'betonsteine',
    name: 'Betonsteine',
    description: 'Moderne und vielseitige Lösungen für Wege und Mauern.',
    image: findImage('category-betonsteine'),
    subCategories: [
      { id: 'pflastersteine', name: 'Pflastersteine' },
      { id: 'mauersteine', name: 'Mauersteine' },
      { id: 'randleisten', name: 'Randleisten' },
      { id: 'betonplatten', name: 'Betonplatten' },
      { id: 'palisaden', name: 'Palisaden' },
    ],
  },
  {
    id: 'feinsteinzeug',
    name: 'Feinsteinzeug',
    description: 'Pflegeleichte und elegante Platten für Terrassen und Balkone.',
    image: findImage('category-feinsteinzeug'),
  },
  {
    id: 'zierkies',
    name: 'Zierkies',
    description: 'Dekorative Kiese und Splitte für individuelle Gartenakzente.',
    image: findImage('category-zierkies'),
    subCategories: [
      { id: 'rundkorn', name: 'Rundkorn' },
      { id: 'kantkorn', name: 'Kantkorn' },
    ],
  },
  {
    id: 'gartendeko',
    name: 'Gartendeko',
    description: 'Einzigartige Objekte aus Stein für eine besondere Atmosphäre.',
    image: findImage('category-gartendeko'),
    subCategories: [
      { id: 'herz', name: 'Herz' },
      { id: 'figuren', name: 'Figuren' },
      { id: 'findlinge', name: 'Findlinge' },
      { id: 'vulkanbrocken', name: 'Vulkanbrocken' },
      { id: 'brunnen', name: 'Brunnen' },
      { id: 'tische-baenke', name: 'Tische / Bänke' },
      { id: 'blumentrog', name: 'Blumentrog' },
      { id: 'vasen', name: 'Vasen' },
    ],
  },
];

const allSubCategories: (SubCategory & { parentId: string })[] = productCategories
  .filter((cat) => cat.subCategories)
  .flatMap((cat) =>
    cat.subCategories!.map((sub) => ({
      ...sub,
      id: sub.id,
      name: sub.name,
      description: `Entdecken Sie unsere Auswahl an ${sub.name}. Platzhalter-Text – Details folgen in Kürze.`,
      image: findImage(`product-placeholder`),
      parentId: cat.id,
    }))
  );

export const getCategoryById = (id: string) => {
  return productCategories.find((cat) => cat.id === id);
};

export const getSubCategoryByIds = (categoryId: string, subCategoryId: string) => {
  return allSubCategories.find(
    (sub) => sub.parentId === categoryId && sub.id === subCategoryId
  );
};

export const getSubCategoriesByParentId = (parentId: string) => {
  return allSubCategories.filter((sub) => sub.parentId === parentId);
}

export const generatePlaceholderProducts = (count: number = 6): Product[] => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Produkt ${i + 1}`,
    description: 'Platzhalterbeschreibung – Details zu diesem Produkt folgen in Kürze. Kontaktieren Sie uns für weitere Informationen.',
    image: findImage('product-placeholder'),
  }));
};

const gartendekoImageCounts: Record<string, { count: number, path: string, name: string }> = {
  herz: { count: 4, path: '/images/5. Gartendeko/1. Herz', name: 'Herz' },
  figuren: { count: 3, path: '/images/5. Gartendeko/2. Figuren', name: 'Figur' },
  findlinge: { count: 13, path: '/images/5. Gartendeko/3. Findlinge', name: 'Findling' },
  brunnen: { count: 4, path: '/images/5. Gartendeko/5. Brunnen', name: 'Brunnen' },
  'tische-baenke': { count: 3, path: '/images/5. Gartendeko/6. Tische  Bänke', name: 'Tisch / Bank' },
  blumentrog: { count: 8, path: '/images/5. Gartendeko/7. Blumentrog', name: 'Blumentrog' },
  vasen: { count: 4, path: '/images/5. Gartendeko/8. Vasen', name: 'Vase' },
};

export const getGartendekoProducts = (subCategoryId: string): Product[] | null => {
  const imageInfo = gartendekoImageCounts[subCategoryId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: `${imageInfo.name} ${i}`,
      description: `Jedes unserer Deko-Elemente ist ein einzigartiges Naturprodukt. Abmessungen, Farbe und Form können variieren.\n\nFür Details zu diesem spezifischen Produkt, Verfügbarkeit und Preisanfragen kontaktieren Sie uns bitte direkt.`,
      image: {
        id: `${subCategoryId}-${i}`,
        description: `${imageInfo.name} ${i}`,
        imageUrl: imageUrl,
        imageHint: subCategoryId.replace('-', ' '),
      },
    });
  }
  return products;
};
