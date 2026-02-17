import { type ImagePlaceholder, PlaceHolderImages } from './placeholder-images';

export type Product = {
  name: string;
  description: string;
  meta?: string;
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
      { id: 'porphyr', name: 'Porphyr' },
      { id: 'basalt', name: 'Basalt' },
      { id: 'tuff', name: 'Tuff' },
      { id: 'muschelkalk', name: 'Muschelkalk' },
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

const subCategoryDescriptions: Record<string, Record<string, string>> = {
  natursteine: {
    granit: 'Extrem harter und widerstandsfähiger Naturstein, ideal für stark beanspruchte Bereiche.',
    travertin: 'Warmer Naturstein mit mediterraner Optik – ideal für Terrassen und elegante Außenflächen.',
    schiefer: 'Vielseitiger Naturstein mit charaktervoller Struktur.',
    sandstein: 'Natürliche Farbtöne und angenehme Haptik – vielseitig einsetzbar für Wege, Stufen und Terrassen.',
    'brasil-quarzit': 'Extrem widerstandsfähig und edel in der Wirkung – ideal für stark beanspruchte Außenbereiche.',
    'luserna-gneis': 'Klassischer Gneis mit hoher Festigkeit – beliebt für Platten, Stufen und langlebige Außenanlagen.',
    'stainzer-gneis': 'Regionaler Charakterstein mit lebendiger Struktur – robust und vielseitig für Garten- und Hofbereiche.',
    porphyr: 'Rutschfest und extrem wetterbeständig – optimal für Einfahrten, Wege und Pflasterflächen.',
    basalt: 'Dunkler, dichter Naturstein mit moderner Wirkung – sehr belastbar und langlebig im Außenbereich.',
    tuff: 'Leichter Naturstein mit warmen Erdtönen – ideal für dekorative Elemente und individuelle Akzente.',
    muschelkalk: 'Heller Naturstein mit feiner Struktur und fossilen Einschlüssen – zeitlos, elegant und ideal für Terrassen, Mauern und klassische Außenanlagen.',
  },
  betonsteine: {
      pflastersteine: 'Vielseitige Pflastersteine aus Beton für moderne Wege, Einfahrten und Plätze.',
      mauersteine: 'System-Mauersteine aus Beton für stabile und ästhetische Gartenmauern und Abgrenzungen.',
      randleisten: 'Saubere und stabile Kantenabschlüsse für Beete und Pflasterflächen mit Beton-Randleisten.',
      betonplatten: 'Großformatige Betonplatten für moderne, ruhige Terrassen- und Weggestaltungen.',
      palisaden: 'Beton-Palisaden zum Abfangen von Hängen, als Einfassung oder zur dekorativen Gliederung.',
  },
  zierkies: {
      rundkorn: 'Natürlich gerundeter Zierkies für pflegeleichte Flächen, Wege und dekorative Akzente.',
      kantkorn: 'Gebrochener Ziersplitt für stabile, wasserdurchlässige Flächen und moderne Gartengestaltung.',
  },
  gartendeko: {
      herz: 'Dekorative Herzen aus Naturstein als liebevolles und beständiges Symbol in Ihrem Garten.',
      figuren: 'Handgefertigte Figuren aus Stein – einzigartige Kunstwerke und Blickfänge für den Außenbereich.',
      findlinge: 'Charakterstarke Findlinge und Solitärsteine als natürliche Gestaltungselemente.',
      vulkanbrocken: 'Poröse Vulkanbrocken für einzigartige, leichte und naturnahe Gartendekorationen.',
      brunnen: 'Gartenbrunnen aus Naturstein – beruhigendes Wasserspiel und edler Mittelpunkt.',
      'tische-baenke': 'Robuste und wetterfeste Tische und Bänke aus massivem Naturstein.',
      blumentrog: 'Massive Blumentröge aus Naturstein – langlebig, stilvoll und für jede Pflanze geeignet.',
      vasen: 'Elegante Steinvasen als zeitlose Dekoration für Eingangsbereiche, Terrassen und Gärten.',
  }
};

const subCategoryImages: Record<string, Record<string, string>> = {
  natursteine: {
    granit: '/images/UNSERE-PRODUKTE/Natursteine/Granit.jpg',
    basalt: '/images/UNSERE-PRODUKTE/Natursteine/Basalt.jpg',
    'brasil-quarzit': '/images/UNSERE-PRODUKTE/Natursteine/Brasil. Quarzit/1.jpg',
    'luserna-gneis': '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Allgemein/6.jpg',
    muschelkalk: '/images/UNSERE-PRODUKTE/Natursteine/Muschelkalk/9.jpg',
    porphyr: '/images/UNSERE-PRODUKTE/Natursteine/Porphyr/7.jpg',
    schiefer: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Stelen/9.jpg',
    sandstein: '/images/UNSERE-PRODUKTE/Natursteine/Sandstein.jpg',
    'stainzer-gneis': '/images/UNSERE-PRODUKTE/Natursteine/Stainzer Gneis.jpg',
    travertin: '/images/UNSERE-PRODUKTE/Natursteine/Travertin/1.jpg',
    tuff: '/images/UNSERE-PRODUKTE/Natursteine/Tuff/6.jpg',
  },
  betonsteine: {
    pflastersteine: '/images/UNSERE-PRODUKTE/Betonsteine/Pflastersteine.jpg',
    mauersteine: '/images/UNSERE-PRODUKTE/Betonsteine/Mauersteine.jpg',
    randleisten: '/images/UNSERE-PRODUKTE/Betonsteine/Randleisten.jpg',
    betonplatten: '/images/UNSERE-PRODUKTE/Betonsteine/Betonplatten.jpg',
    palisaden: '/images/UNSERE-PRODUKTE/Betonsteine/Palisaden.jpg',
  },
  zierkies: {
    kantkorn: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/12.jpg',
    rundkorn: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn.jpg',
  },
  gartendeko: {
    herz: '/images/UNSERE-PRODUKTE/Gartendeko/Herz.jpg',
    figuren: '/images/UNSERE-PRODUKTE/Gartendeko/Elefant.jpg',
    findlinge: '/images/UNSERE-PRODUKTE/Gartendeko/Findlinge.jpg',
    vulkanbrocken: '/images/UNSERE-PRODUKTE/Gartendeko/Vulkanbrocken.jpg',
    brunnen: '/images/UNSERE-PRODUKTE/Gartendeko/Brunnen.jpg',
    'tische-baenke': '/images/5. Gartendeko/6. TischeBanke/3.jpg',
    blumentrog: '/images/UNSERE-PRODUKTE/Gartendeko/Blumentrog.jpg',
    vasen: '/images/UNSERE-PRODUKTE/Gartendeko/Vasen.jpg',
  }
};

const allSubCategories: (SubCategory & { parentId: string })[] = productCategories
  .filter((cat) => cat.subCategories)
  .flatMap((cat) =>
    cat.subCategories!.map((sub) => {
      const imageUrl = subCategoryImages[cat.id]?.[sub.id];
      const image: ImagePlaceholder = imageUrl
        ? {
            id: `${cat.id}-${sub.id}`,
            description: `Bild für ${sub.name}`,
            imageUrl: imageUrl,
            imageHint: sub.name.toLowerCase().replace('.', ''),
          }
        : findImage('product-placeholder');

      return {
        ...sub,
        id: sub.id,
        name: sub.name,
        description:
          subCategoryDescriptions[cat.id]?.[sub.id] ||
          `Entdecken Sie unsere Auswahl an ${sub.name}.`,
        image: image,
        parentId: cat.id,
      };
    })
  );

export const granitSubCategoriesData: SubCategory[] = [
    {
      id: 'blockstufen',
      name: 'Blockstufen',
      description: 'Massive und langlebige Stufen aus Granit für den Außenbereich.',
      image: {
        id: 'granit-blockstufen',
        imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen/1.jpg',
        description: 'Granit Blockstufen',
        imageHint: 'granite steps',
      },
    },
    {
      id: 'bodenplatten',
      name: 'Bodenplatten',
      description: 'Elegante und robuste Bodenplatten für Terrassen und Wege.',
      image: {
        id: 'granit-bodenplatten',
        imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Bodenplatten/1.jpg',
        description: 'Granit Bodenplatten',
        imageHint: 'granite slabs',
      },
    },
    {
      id: 'mauersteine',
      name: 'Mauersteine',
      description: 'Vielseitige Mauersteine für stabile und ästhetische Gartenmauern.',
      image: {
        id: 'granit-mauersteine',
        imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Mauersteine/1.jpg',
        description: 'Granit Mauersteine',
        imageHint: 'granite bricks',
      },
    },
    {
        id: 'pflastersteine',
        name: 'Pflastersteine',
        description: 'Klassische Pflastersteine für zeitlose Einfahrten und Wege.',
        image: {
          id: 'granit-pflastersteine',
          imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Pflastersteine/1.jpg',
          description: 'Granit Pflastersteine',
          imageHint: 'granite pavers',
        },
    },
    {
        id: 'randleisten',
        name: 'Randleisten',
        description: 'Saubere und stabile Abschlüsse für Beete und Pflasterflächen.',
        image: {
          id: 'granit-randleisten',
          imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Randleisten/1.jpg',
          description: 'Granit Randleisten',
          imageHint: 'granite curbs',
        },
    },
];

export const schieferSubCategoriesData: SubCategory[] = [
    {
      id: 'blockstufen',
      name: 'Blockstufen',
      description: 'Massive und langlebige Stufen aus Schiefer für den Außenbereich.',
      image: {
        id: 'schiefer-blockstufen',
        imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Blockstufen/5.jpg',
        description: 'Schiefer Blockstufen',
        imageHint: 'slate steps',
      },
    },
    {
      id: 'bodenplatten',
      name: 'Bodenplatten',
      description: 'Elegante und robuste Bodenplatten für Terrassen und Wege.',
      image: {
        id: 'schiefer-bodenplatten',
        imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Bodenplatten/5.jpg',
        description: 'Schiefer Bodenplatten',
        imageHint: 'slate slabs',
      },
    },
    {
      id: 'mauersteine',
      name: 'Mauersteine',
      description: 'Vielseitige Mauersteine für stabile und ästhetische Gartenmauern.',
      image: {
        id: 'schiefer-mauersteine',
        imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Mauersteine/28.jpg',
        description: 'Schiefer Mauersteine',
        imageHint: 'slate bricks',
      },
    },
    {
        id: 'polygonalplatten',
        name: 'Polygonalplatten',
        description: 'Natürlich gebrochene Platten für rustikale und individuelle Flächen.',
        image: {
          id: 'schiefer-polygonalplatten',
          imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Polygonalplatten/4.jpg',
          description: 'Schiefer Polygonalplatten',
          imageHint: 'slate polygonal',
        },
    },
    {
        id: 'stelen',
        name: 'Stelen',
        description: 'Moderne und schlanke Elemente zur Gartengestaltung und als Sichtschutz.',
        image: {
          id: 'schiefer-stelen',
          imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Stelen/9.jpg',
          description: 'Schiefer Stelen',
          imageHint: 'slate steles',
        },
    },
];

export const lusernaGneisSubCategoriesData: SubCategory[] = [
    {
        id: 'allgemein',
        name: 'Allgemein',
        description: 'Allgemeine Ansichten und Anwendungsbeispiele von Luserna Gneis.',
        image: {
            id: 'luserna-gneis-allgemein-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Allgemein/6.jpg',
            description: 'Luserna Gneis Allgemein',
            imageHint: 'gneiss stone',
        },
    },
    {
        id: 'gemischt',
        name: 'Gemischt',
        description: 'Verschiedene Formate und Anwendungen von Luserna Gneis gemischt.',
        image: {
            id: 'luserna-gneis-gemischt-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Gemischt/19.jpg',
            description: 'Luserna Gneis Gemischt',
            imageHint: 'gneiss mix',
        },
    },
    {
        id: 'mauersteine',
        name: 'Mauersteine',
        description: 'Robuste Mauersteine aus Luserna Gneis für Mauern und Abgrenzungen.',
        image: {
            id: 'luserna-gneis-mauersteine-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Mauersteine/12.jpg',
            description: 'Luserna Gneis Mauersteine',
            imageHint: 'gneiss wall',
        },
    },
    {
        id: 'pflasterwuerfel',
        name: 'Pflasterwürfel',
        description: 'Klassische Pflasterwürfel für langlebige und stilvolle Wege.',
        image: {
            id: 'luserna-gneis-pflasterwuerfel-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Pflasterwuerfel/5.jpg',
            description: 'Luserna Gneis Pflasterwürfel',
            imageHint: 'gneiss pavers',
        },
    },
    {
        id: 'polygonal-platten',
        name: 'Polygonal Platten',
        description: 'Natürlich gebrochene Platten für rustikale und individuelle Flächen.',
        image: {
            id: 'luserna-gneis-polygonal-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Polygonal Platten/4.jpg',
            description: 'Luserna Gneis Polygonal Platten',
            imageHint: 'gneiss polygonal',
        },
    },
    {
        id: 'trittplatten',
        name: 'Trittplatten',
        description: 'Großformatige Platten als Trittsteine für Gartenwege.',
        image: {
            id: 'luserna-gneis-trittplatten-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Trittplatten/4.jpg',
            description: 'Luserna Gneis Trittplatten',
            imageHint: 'gneiss stepping stones',
        },
    },
    {
        id: 'randleisten',
        name: 'Randleisten',
        description: 'Saubere Kantenabschlüsse für Beete und Flächen aus Luserna Gneis.',
        image: {
            id: 'luserna-gneis-randleisten-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Randleisten/4.jpg',
            description: 'Luserna Gneis Randleisten',
            imageHint: 'gneiss curbs',
        },
    },
];

export const getCategoryById = (id: string) => {
  return productCategories.find((cat) => cat.id === id);
};

export const getSubCategoryByIds = (categoryId: string, subCategoryId: string) => {
  return allSubCategories.find(
    (sub) => sub.parentId === categoryId && sub.id === subCategoryId
  );
};

export const getGranitSubCategoryById = (id: string) => {
    return granitSubCategoriesData.find((cat) => cat.id === id);
};

export const getSchieferSubCategoryById = (id: string) => {
    return schieferSubCategoriesData.find((cat) => cat.id === id);
};

export const getLusernaGneisSubCategoryById = (id: string) => {
    return lusernaGneisSubCategoriesData.find((cat) => cat.id === id);
};

export const getSubCategoriesByParentId = (parentId: string) => {
  return allSubCategories.filter((sub) => sub.parentId === parentId);
}

export const generatePlaceholderProducts = (count: number = 6): Product[] => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Produkt ${i + 1}`,
    description: 'Details zu diesem Produkt folgen in Kürze. Kontaktieren Sie uns für weitere Informationen zu Verfügbarkeit und Preisen.',
    meta: 'Frostfest & witterungsbeständig',
    image: findImage('product-placeholder'),
  }));
};

const zierkiesImageCounts: Record<string, { count: number, path: string, name: string }> = {
  kantkorn: { count: 12, path: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn', name: 'Kantkorn' },
};

export const getZierkiesProducts = (subCategoryId: string): Product[] | null => {
  const imageInfo = zierkiesImageCounts[subCategoryId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: `${imageInfo.name} ${i}`,
      description: `Produktdetails folgen.`,
      meta: 'Dekoratives Kantkorn für Flächen und Akzente',
      image: {
        id: `${subCategoryId}-${i}`,
        description: `${imageInfo.name} ${i}`,
        imageUrl: imageUrl,
        imageHint: 'decorative gravel',
      },
    });
  }
  return products;
};

const gartendekoImageCounts: Record<string, { count: number, path: string, name: string }> = {
  herz: { count: 4, path: '/images/5. Gartendeko/1. Herz', name: 'Herz' },
  figuren: { count: 3, path: '/images/5. Gartendeko/2. Figuren', name: 'Figur' },
  findlinge: { count: 13, path: '/images/5. Gartendeko/3. Findlinge', name: 'Findling' },
  brunnen: { count: 4, path: '/images/5. Gartendeko/5. Brunnen', name: 'Brunnen' },
  'tische-baenke': { count: 3, path: '/images/5. Gartendeko/6. TischeBanke', name: 'Tisch / Bank' },
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
      meta: 'Unikat aus Naturstein',
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

const granitImageCounts: Record<string, { count: number, path: string, name: string }> = {
  blockstufen: { count: 7, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen', name: 'Blockstufe' },
  bodenplatten: { count: 13, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Bodenplatten', name: 'Bodenplatte' },
  mauersteine: { count: 6, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Mauersteine', name: 'Mauerstein' },
  pflastersteine: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Pflastersteine', name: 'Pflasterstein' },
  randleisten: { count: 2, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Randleisten', name: 'Randleiste' },
};

export const getGranitProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = granitImageCounts[productGroupId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: `${imageInfo.name} ${i}`,
      description: `Robust und langlebig – ideal für den Außenbereich. Für Details zu diesem spezifischen Produkt, Verfügbarkeit und Preisanfragen kontaktieren Sie uns bitte direkt.`,
      meta: 'Granit, frostfest und witterungsbeständig',
      image: {
        id: `${productGroupId}-${i}`,
        description: `${imageInfo.name} ${i}`,
        imageUrl: imageUrl,
        imageHint: `granite ${productGroupId.slice(0, -1)}`,
      },
    });
  }
  return products;
};

const schieferImageCounts: Record<string, { count: number, path: string, name: string }> = {
  blockstufen: { count: 5, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Blockstufen', name: 'Schiefer Blockstufe' },
  bodenplatten: { count: 5, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Bodenplatten', name: 'Schiefer Bodenplatte' },
  mauersteine: { count: 28, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Mauersteine', name: 'Schiefer Mauerstein' },
  polygonalplatten: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Polygonalplatten', name: 'Schiefer Polygonalplatte' },
  stelen: { count: 9, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Stelen', name: 'Schiefer Stele' },
};

export const getSchieferProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = schieferImageCounts[productGroupId];
  if (!imageInfo) {
    return null;
  }

  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: `${imageInfo.name} ${i}`,
      description: `Produktdetails folgen.\n\nKontaktieren Sie uns für weitere Informationen zu Verfügbarkeit und Preisen.`,
      meta: 'Schiefer, frostfest und witterungsbeständig',
      image: {
        id: `schiefer-${productGroupId}-${i}`,
        description: `${imageInfo.name} ${i}`,
        imageUrl: imageUrl,
        imageHint: `slate ${productGroupId.replace(/s$/, '')}`,
      },
    });
  }
  return products;
};

const lusernaGneisImageCounts: Record<string, { count: number; path: string; name: string }> = {
    allgemein: { count: 6, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Allgemein', name: 'Luserna Gneis - Allgemein' },
    gemischt: { count: 19, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Gemischt', name: 'Luserna Gneis - Gemischt' },
    mauersteine: { count: 12, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Mauersteine', name: 'Luserna Gneis - Mauerstein' },
    pflasterwuerfel: { count: 5, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Pflasterwuerfel', name: 'Luserna Gneis - Pflasterwürfel' },
    'polygonal-platten': { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Polygonal Platten', name: 'Luserna Gneis - Polygonal Platte' },
    trittplatten: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Trittplatten', name: 'Luserna Gneis - Trittplatte' },
    randleisten: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Randleisten', name: 'Luserna Gneis - Randleiste' },
};

export const getLusernaGneisProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = lusernaGneisImageCounts[productGroupId];
  if (!imageInfo) {
    return null;
  }

  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: `${imageInfo.name} ${i}`,
      description: `Robust und langlebig – ideal für den Außenbereich. Für Details zu diesem spezifischen Produkt, Verfügbarkeit und Preisanfragen kontaktieren Sie uns bitte direkt.`,
      meta: 'Luserna Gneis, frostfest und witterungsbeständig',
      image: {
        id: `luserna-${productGroupId}-${i}`,
        description: `${imageInfo.name} ${i}`,
        imageUrl: imageUrl,
        imageHint: `luserna gneiss ${productGroupId.replace('-', ' ')}`,
      },
    });
  }
  return products;
};

export const getBrasilQuarzitProducts = (): Product[] => {
  const products: Product[] = [];
  for (let i = 1; i <= 4; i++) {
    products.push({
      name: `Brasil. Quarzit Variante ${i}`,
      description: 'Hochwertiger Brasil Quarzit besticht durch seine extreme Härte und edle Optik. Er ist besonders widerstandsfähig und eignet sich daher perfekt für stark beanspruchte Außenbereiche wie Terrassen, Wege und Poolumrandungen. Für Details zu diesem Produkt, Verfügbarkeit und Preisanfragen kontaktieren Sie uns bitte direkt.',
      meta: 'Extrem widerstandsfähig, frostfest',
      image: {
        id: `brasil-quarzit-${i}`,
        description: `Brasil. Quarzit Variante ${i}`,
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Brasil. Quarzit/${i}.jpg`,
        imageHint: 'brazilian quartzite',
      },
    });
  }
  return products;
};

export const getFeinsteinzeugProducts = (): Product[] => {
  return [
    {
      name: 'Feinsteinzeug Ashima',
      description: 'Hochwertige Feinsteinzeugplatte in eleganter Steinoptik. Ideal für moderne Terrassen und Außenbereiche. Pflegeleicht und extrem widerstandsfähig.',
      meta: '2 cm, R11 Rutschhemmung, Frostfest',
      image: {
        id: 'feinsteinzeug-1',
        description: 'Feinsteinzeug Ashima',
        imageUrl: '/images/UNSERE-PRODUKTE/Feinsteinzeug/1.jpg',
        imageHint: 'porcelain tile',
      },
    },
    {
      name: 'Feinsteinzeug Atakama',
      description: 'Robuste Feinsteinzeugplatte mit natürlicher Ausstrahlung. Perfekt für langlebige und stilvolle Außenflächen.',
      meta: '2 cm, R11 Rutschhemmung, Frostfest',
      image: {
        id: 'feinsteinzeug-2',
        description: 'Feinsteinzeug Atakama',
        imageUrl: '/images/UNSERE-PRODUKTE/Feinsteinzeug/2.jpg',
        imageHint: 'stone look tile',
      },
    },
    {
      name: 'Feinsteinzeug Basalt',
      description: 'Dunkle Feinsteinzeugplatte in Basaltoptik. Verleiht Außenbereichen eine moderne und edle Note.',
      meta: '2 cm, R11 Rutschhemmung, Frostfest',
      image: {
        id: 'feinsteinzeug-3',
        description: 'Feinsteinzeug Basalt',
        imageUrl: '/images/UNSERE-PRODUKTE/Feinsteinzeug/3.jpg',
        imageHint: 'dark porcelain tile',
      },
    },
  ];
};

export const getTravertinProducts = (): Product[] => {
  return [
    {
      name: 'Travertin – Beispiel',
      description: 'Platzhalterbeschreibung – Details folgen',
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: 'travertin-beispiel-1',
        description: 'Travertin – Beispiel',
        imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Travertin/1.jpg',
        imageHint: 'travertine tile'
      }
    }
  ];
};

export const getTuffProducts = (): Product[] => {
  const products: Product[] = [];
  const count = 6;
  for (let i = 1; i <= count; i++) {
    products.push({
      name: `Tuff Variante ${i}`,
      description: 'Leichter und poröser Naturstein mit warmen Erdtönen. Ideal für dekorative Elemente und individuelle Akzente im Garten. Für Details zu diesem Produkt, Verfügbarkeit und Preisanfragen kontaktieren Sie uns bitte direkt.',
      meta: 'Leicht, porös, dekorativ',
      image: {
        id: `tuff-${i}`,
        description: `Tuff Variante ${i}`,
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Tuff/${i}.jpg`,
        imageHint: 'tuff stone',
      },
    });
  }
  return products;
};

export const getPorphyrProducts = (): Product[] => {
  const products: Product[] = [];
  const count = 7;
  for (let i = 1; i <= count; i++) {
    products.push({
      name: `Porphyr Variante ${i}`,
      description: 'Äußerst robuster und rutschfester Naturstein, perfekt für stark beanspruchte Flächen wie Einfahrten und Wege. Für Details zu diesem Produkt, Verfügbarkeit und Preisanfragen kontaktieren Sie uns bitte direkt.',
      meta: 'Rutschfest, extrem wetterbeständig',
      image: {
        id: `porphyr-${i}`,
        description: `Porphyr Variante ${i}`,
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Porphyr/${i}.jpg`,
        imageHint: 'porphyry stone',
      },
    });
  }
  return products;
};

export const getMuschelkalkProducts = (): Product[] => {
  const products: Product[] = [];
  const count = 9;
  for (let i = 1; i <= count; i++) {
    products.push({
      name: `Muschelkalk Variante ${i}`,
      description: 'Eleganter, heller Naturstein mit charakteristischen fossilen Einschlüssen. Ideal für zeitlose Terrassen, Mauern und klassische Außenanlagen. Für Details zu diesem Produkt, Verfügbarkeit und Preisanfragen kontaktieren Sie uns bitte direkt.',
      meta: 'Elegant, zeitlos, fossilienreich',
      image: {
        id: `muschelkalk-${i}`,
        description: `Muschelkalk Variante ${i}`,
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Muschelkalk/${i}.jpg`,
        imageHint: 'shell limestone',
      },
    });
  }
  return products;
};
