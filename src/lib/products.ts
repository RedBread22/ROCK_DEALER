import { type ImagePlaceholder, PlaceHolderImages } from './placeholder-images';
import { encodeImagePath } from './utils';

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
      { id: 'tuff', name: 'Grauer Gneis' },
      { id: 'muschelkalk', name: 'Muschelkalk' },
      { id: 'bluestone', name: 'Bluestone' },
    ],
  },
  {
    id: 'betonsteine',
    name: 'Betonsteine',
    description: 'Moderne und vielseitige Lösungen für Wege und Mauern.',
    image: findImage('category-betonsteine'),
    subCategories: [
      { id: 'betonplatten', name: 'Betonplatten' },
      { id: 'mauersteine', name: 'Mauersteine' },
      { id: 'palisaden', name: 'Palisaden' },
      { id: 'pflastersteine', name: 'Pflastersteine' },
      { id: 'randleisten', name: 'Randleisten' },
    ],
  },
  {
    id: 'zierkies',
    name: 'Zierkies',
    description: 'Dekorative Kiese und Splitte für individuelle Gartenakzente.',
    image: findImage('category-zierkies'),
    subCategories: [
      { id: 'rundkorn', name: 'Rundkorn' },
      { id: 'kantkorn', name: 'Kantkorn' },
      { id: 'schieferplaettchen', name: 'Schieferplättchen' },
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
      { id: 'findlinge', name: 'Gartenelemente' },
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
    tuff: 'Leichter Naturstein mit warmen Erdtönen – ideal für dekorative Elemente und individuelle Akzente.',
    muschelkalk: 'Heller Naturstein mit feiner Struktur und fossilen Einschlüssen – zeitlos, elegant und ideal für Terrassen, Mauern und klassische Außenanlagen.',
    bluestone: 'Edler blauer Naturstein mit markanter Oberfläche – ideal für exklusive Terrassen und Akzentflächen.',
  },
  betonsteine: {
      betonplatten: 'Großformatige Betonplatten für moderne, ruhige Terrassen- und Weggestaltungen.',
      mauersteine: 'System-Mauersteine aus Beton für stabile und ästhetische Gartenmauern und Abgrenzungen.',
      palisaden: 'Beton-Palisaden zum Abfangen von Hängen, als Einfassung oder zur dekorativen Gliederung.',
      pflastersteine: 'Vielseitige Pflastersteine aus Beton für moderne Wege, Einfahrten und Plätze.',
      randleisten: 'Saubere und stabile Kantenabschlüsse für Beete und Pflasterflächen mit Beton-Randleisten.',
  },
  zierkies: {
      rundkorn: 'Natürlich gerundeter Zierkies für pflegeleichte Flächen, Wege und dekorative Akzente.',
      kantkorn: 'Gebrochener Ziersplitt für stabile, wasserdurchlässige Flächen und moderne Gartengestaltung.',
      schieferplaettchen: 'Flache Schieferplättchen in verschiedenen Farbtönen – ideal als edle Beetabdeckung und für dekorative Gartengestaltungen.',
  },
  gartendeko: {
      herz: 'Dekorative Herzen aus Naturstein als liebevolles und beständiges Symbol in Ihrem Garten.',
      figuren: 'Handgefertigte Figuren aus Stein – einzigartige Kunstwerke und Blickfänge für den Außenbereich.',
      findlinge: 'Natürliche Gartenelemente aus Stein – von Trockenmauern über Solitärsteine bis hin zu handgefertigten Kunstobjekten.',
      brunnen: 'Gartenbrunnen aus Naturstein – beruhigendes Wasserspiel und edler Mittelpunkt.',
      'tische-baenke': 'Robuste und wetterfeste Tische und Bänke aus massivem Naturstein.',
      blumentrog: 'Massive Blumentröge aus Naturstein – langlebig, stilvoll und für jede Pflanze geeignet.',
      vasen: 'Elegante Steinvasen als zeitlose Dekoration für Eingangsbereiche, Terrassen und Gärten.',
  }
};

const subCategoryImages: Record<string, Record<string, string>> = {
  natursteine: {
    granit: '/images/UNSERE-PRODUKTE/Natursteine/Granit.jpg',
    'brasil-quarzit': '/images/UNSERE-PRODUKTE/Natursteine/Brasil. Quarzit/1.jpg',
    'luserna-gneis': '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Allgemein/6.jpg',
    muschelkalk: '/images/UNSERE-PRODUKTE/Natursteine/Muschelkalk/9.jpg',
    porphyr: '/images/UNSERE-PRODUKTE/Natursteine/Porphyr/7.jpg',
    schiefer: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Stelen/9.jpg',
    sandstein: encodeImagePath('/images/UNSERE-PRODUKTE/Sandstein/Sandstein 1.avif'),
    'stainzer-gneis': '/images/UNSERE-PRODUKTE/Natursteine/Stainzer Gneis/1.jpg',
    travertin: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Flamingo 1.AVIF'),
    tuff: '/images/UNSERE-PRODUKTE/Natursteine/Tuff/6.jpg',
    bluestone: '/images/UNSERE-PRODUKTE/Natursteine/BlueStone/BlueStone0.avif',
  },
  betonsteine: {
    betonplatten: '/images/UNSERE-PRODUKTE/Betonsteine/Betonplatten/3.jpg',
    mauersteine: '/images/UNSERE-PRODUKTE/Betonsteine/Mauersteine/4.jpg',
    palisaden: '/images/UNSERE-PRODUKTE/Betonsteine/Palisaden/3.jpg',
    pflastersteine: '/images/UNSERE-PRODUKTE/Betonsteine/Pflastersteine/4.jpg',
    randleisten: '/images/UNSERE-PRODUKTE/Betonsteine/Randleisten/4.jpg',
  },
  zierkies: {
    kantkorn: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/12.jpg',
    rundkorn: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn.jpg',
    schieferplaettchen: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/1.jpg',
  },
  gartendeko: {
    herz: '/images/UNSERE-PRODUKTE/Gartendeko/Herz.jpg',
    figuren: '/images/UNSERE-PRODUKTE/Gartendeko/Elefant.jpg',
    findlinge: '/images/UNSERE-PRODUKTE/Gartendeko/Findlinge.jpg',
    brunnen: '/images/UNSERE-PRODUKTE/Gartendeko/Brunnen.jpg',
    'tische-baenke': '/images/5. Gartendeko/6. TischeBanke/3.jpg',
    blumentrog: '/images/UNSERE-PRODUKTE/Gartendeko/Blumentrog.jpg',
    vasen: '/images/UNSERE-PRODUKTE/Gartendeko/Vasen.jpg',
  }
};

const allSubCategories: (SubCategory & { parentId: string })[] = productCategories
  .filter((cat) => cat.id !== 'feinsteinzeug' && cat.subCategories)
  .flatMap((cat) =>
    cat.subCategories!.map((sub) => {
      let imageUrl = subCategoryImages[cat.id]?.[sub.id];

      const image: ImagePlaceholder = imageUrl
        ? {
            id: `${cat.id}-${sub.id}`,
            description: `Bild für ${sub.name}`,
            imageUrl: encodeImagePath(imageUrl),
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
    {
        id: 'granitplatte',
        name: 'Granitplatte',
        description: 'Hochwertige Granitplatten – robust, frostbeständig und vielseitig einsetzbar.',
        image: {
          id: 'granit-granitplatte',
          imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Granitplatte/1.jpg',
          description: 'Granitplatte',
          imageHint: 'granite slab plate',
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
    {
        id: 'bodenplatten',
        name: 'Bodenplatten',
        description: 'Robuste Bodenplatten aus Schiefer für Terrassen, Wege und Eingangsbereiche.',
        image: {
          id: 'schiefer-bodenplatten',
          imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Bodenplatten/2.jpg',
          description: 'Schiefer Bodenplatten',
          imageHint: 'slate floor tiles',
        },
    },
];

export const lusernaGneisSubCategoriesData: SubCategory[] = [
    {
        id: 'bodenplatten',
        name: 'Bodenplatten',
        description: 'Luserna Gneis Bodenplatten in verschiedenen Formaten – ideal für Terrassen, Wege und Außenflächen.',
        image: {
            id: 'luserna-gneis-bodenplatten-preview',
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Allgemein/6.jpg'),
            description: 'Luserna Gneis Bodenplatten',
            imageHint: 'gneiss floor tiles',
        },
    },
    {
        id: 'mauersteine',
        name: 'Mauersteine',
        description: 'Robuste Mauersteine aus Luserna Gneis für Mauern und Abgrenzungen.',
        image: {
            id: 'luserna-gneis-mauersteine-preview',
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Mauersteine/12.jpg'),
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
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Pflasterwuerfel/5.jpg'),
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
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Polygonal Platten/4.jpg'),
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
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Trittplatten/4.jpg'),
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
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Randleisten/4.jpg'),
            description: 'Luserna Gneis Randleisten',
            imageHint: 'gneiss curbs',
        },
    },
    {
        id: 'blockstufen',
        name: 'Blockstufen',
        description: 'Massiv geschnittene Blockstufen aus Luserna Gneis – trittsicher und frostbeständig für Treppen und Hangbefestigungen.',
        image: {
            id: 'luserna-gneis-blockstufen-preview',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen/2.jpg',
            description: 'Luserna Gneis Blockstufen',
            imageHint: 'luserna gneiss steps',
        },
    },
];

export const tuffSubCategoriesData: SubCategory[] = [
    {
        id: 'polygonalplatten',
        name: 'Polygonalplatten',
        description: 'Unregelmäßig gebrochene Gneis-Platten für natürliche, lebendige Flächen – ideal für Terrassen, Wege und Sitzplätze mit individuellem Charakter.',
        image: {
            id: 'tuff-polygonalplatten',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Tuff/1.jpg',
            description: 'Grauer Gneis Polygonalplatten',
            imageHint: 'grey gneiss polygonal plates',
        },
    },
    {
        id: 'bodenplatten',
        name: 'Bodenplatten',
        description: 'Gleichmäßig geschnittene Gneis-Platten für geordnete, elegante Flächen – perfekt für Terrassen, Eingangsbereiche und Gartenwege.',
        image: {
            id: 'tuff-bodenplatten',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Tuff/3.jpg',
            description: 'Grauer Gneis Bodenplatten',
            imageHint: 'grey gneiss floor plates',
        },
    },
];

export const muschelkalkSubCategoriesData: SubCategory[] = [
    {
        id: 'mauersteine',
        name: 'Mauersteine',
        description: 'Muschelkalk-Mauersteine mit fossilen Einschlüssen und heller, gleichmäßiger Färbung – ideal für repräsentative Gartenmauern, Einfriedungen und klassische Außenanlagen.',
        image: {
            id: 'muschelkalk-mauersteine',
            imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Muschelkalk/2.jpg',
            description: 'Muschelkalk Mauersteine',
            imageHint: 'shell limestone wall stones',
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

export const getTuffSubCategoryById = (id: string) => {
    return tuffSubCategoriesData.find((cat) => cat.id === id);
};

export const getMuschelkalkSubCategoryById = (id: string) => {
    return muschelkalkSubCategoriesData.find((cat) => cat.id === id);
};

export const getSubCategoriesByParentId = (parentId: string) => {
  return allSubCategories.filter((sub) => sub.parentId === parentId);
}

export const generatePlaceholderProducts = (count: number = 6): Product[] => {
  return Array.from({ length: count }, (_, i) => ({
    name: 'Produkt',
    description: 'Details zu diesem Produkt folgen in Kürze. Kontaktieren Sie uns für weitere Informationen zu Verfügbarkeit und Preisen.',
    meta: 'Frostfest & witterungsbeständig',
    image: findImage('product-placeholder'),
  }));
};

const kantkornProducts: { name: string; image: string }[] = [
  { name: 'Kantkorn 1', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/1.jpg' },
  { name: 'Kantkorn 2', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/2.jpg' },
  { name: 'Kantkorn 3', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/3.jpg' },
  { name: 'Kantkorn 4', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/4.jpg' },
  { name: 'Kantkorn 5', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/5.jpg' },
  { name: 'Kantkorn 6', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/6.jpg' },
  { name: 'Kantkorn 7', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/7.jpg' },
  { name: 'Kantkorn 8', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/8.jpg' },
  { name: 'Kantkorn 9', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/9.jpg' },
  { name: 'Kantkorn 10', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/10.jpg' },
  { name: 'Kantkorn 11', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/11.jpg' },
  { name: 'Kantkorn 12', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/12.jpg' },
  { name: 'Marmorsplitt Matt-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Matt-weiß.png' },
  { name: 'Marmorsplitt Wolken-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Wolken-weiß.png' },
  { name: 'Marmorbruch Wolken-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorbruch Wolken-weiß.png' },
  { name: 'Marmorsplitt Carrara-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Carrara-weiß.png' },
  { name: 'Marmorsplitt Chateau-beige', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Chateau-beige.png' },
  { name: 'Marmorbruch Chateau-beige', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorbruch Chateau-beige.png' },
  { name: 'Marmorsplitt Rosé-bunt', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Rosé-bunt.png' },
  { name: 'Marmorbruch Rosé-bunt', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorbruch Rosé-bunt.png' },
  { name: 'Marmorsplitt Rosa-corallo', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Rosa-corallo.png' },
  { name: 'Marmorsplitt Black & white', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Black & white.png' },
  { name: 'Marmorsplitt Anthrazit-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorsplitt Anthrazit-weiß.png' },
  { name: 'Marmorbruch Schwarz-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Marmorbruch Schwarz-weiß.png' },
  { name: 'Basaltsplitt Schwarz', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Basaltsplitt Schwarz.png' },
  { name: 'Basaltbruch Schwarz', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Basaltbruch Schwarz.png' },
  { name: 'Schieferplättchen Schwarz', image: '/images/UNSERE-PRODUKTE/Zierkies/Kantkorn/Schieferplättchen Schwarz.png' },
];

const rundkornProducts: { name: string; image: string }[] = [
  { name: 'Flusskiesel, Bunt', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Flusskiesel, Bunt.png' },
  { name: 'Teichkies, Bunt', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Teichkies, Bunt.png' },
  { name: 'Alpenkies, Rosé-bunt', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Alpenkies, Rosé-bunt.png' },
  { name: 'Naturkies, Weiß-grau', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Naturkies, Weiß-grau.png' },
  { name: 'Quarzkies, Weiß-bunt', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Quarzkies, Weiß-bunt.png' },
  { name: 'Flusskiesel, Anthrazit', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Flusskiesel, Anthrazit.png' },
  { name: 'Marmorzierkies, Wolken-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Wolken-weiß.png' },
  { name: 'Marmorzierkies, Carrara-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Carrara-weiß.png' },
  { name: 'Marmorzierkies, Schneeweiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Schneeweiß.png' },
  { name: 'Marmorzierkies, Matt-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Matt-weiß.png' },
  { name: 'Gletscherkiesel, Chateau-beige', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Gletscherkiesel, Chateau-beige.png' },
  { name: 'Marmorzierkies, Royal-rot', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Royal-rot.png' },
  { name: 'Marmorzierkies, Anthrazit-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Anthrazit-weiß.png' },
  { name: 'Marmorzierkies, Ebano-schwarz', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Ebano-schwarz.png' },
  { name: 'Marmorzierkies, Donau-blau', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Donau-blau.png' },
  { name: 'Marmorzierkies, Dachstein-blau', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Dachstein-blau.png' },
  { name: 'Marmorzierkies, Gold-ocker', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Gold-ocker.png' },
  { name: 'Marmorzierkies, Siena-gelb', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Siena-gelb.png' },
  { name: 'Marmorzierkies, Sunrise', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Sunrise.png' },
  { name: 'Marmorzierkies, Verona-rot', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Verona-rot.png' },
  { name: 'Marmorzierkies, Alpen-grün', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Marmorzierkies, Alpen-grün.png' },
  { name: 'Engelstein, Grün-weiß', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Engelstein, Grün-weiß.png' },
  { name: 'Granitzierkiesel, Salz-Pfeffer', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Granitzierkiesel, Salz-Pfeffer.png' },
  { name: 'Diskus-Granitzierkiesel, Salz-Pfeffer', image: '/images/UNSERE-PRODUKTE/Zierkies/Rundkorn/Diskus-Granitzierkiesel, Salz-Pfeffer.png' },
];

const rundkornDescriptions: Record<string, string> = {
  'Flusskiesel, Bunt': 'Bunt gemischte Flusskiesel mit glatter, natürlich gerundeter Oberfläche – ein Klassiker für Teichumrandungen, Beetabdeckungen und dekorative Gartenakzente.',
  'Teichkies, Bunt': 'Farbenfroher, abgerundeter Teichkies für naturnahe Teich- und Bachgestaltungen. Auch als Drainage- und Filtermaterial bestens geeignet.',
  'Alpenkies, Rosé-bunt': 'Natürlicher Alpenkies in warmen Rosé- und Erdtönen – verleiht Gartenflächen und Wegen eine mediterrane, einladende Ausstrahlung.',
  'Naturkies, Weiß-grau': 'Dezent gemischter Naturkies in hellen Weiß-Grau-Tönen – universell einsetzbar für Wege, Einfahrten und als pflegeleichte Beetabdeckung.',
  'Quarzkies, Weiß-bunt': 'Schimmernder Quarzkies mit bunten Einschlüssen – setzt durch seine leicht glänzende Oberfläche besondere Akzente in Vorgärten und Steingärten.',
  'Flusskiesel, Anthrazit': 'Dunkelgraue Flusskiesel mit samtig-glatter Oberfläche – ideal für moderne Gartenkonzepte und als kontrastreiche Beetabdeckung.',
  'Marmorzierkies, Wolken-weiß': 'Strahlend weißer Marmorzierkies mit sanfter Wolkenstruktur – besonders edel in Zen-Gärten, um Brunnen und als Highlight auf dunklen Flächen.',
  'Marmorzierkies, Carrara-weiß': 'Klassisch-weißer Marmorzierkies im Carrara-Stil – verleiht Flächen eine edle, mediterrane Eleganz und reflektiert angenehm das Licht.',
  'Marmorzierkies, Schneeweiß': 'Reiner, schneeweiß gewaschener Marmorzierkies – schafft klare, helle Flächen und lässt Pflanzen und Grünflächen besonders leuchten.',
  'Marmorzierkies, Matt-weiß': 'Sanft-matter Marmorzierkies in gebrochenem Weiß – wirkt zurückhaltend elegant und passt zu nahezu jeder Gartengestaltung.',
  'Gletscherkiesel, Chateau-beige': 'Exklusiver Gletscherkiesel in warmem Chateau-Beige – ideal für repräsentative Flächen, Poolumrandungen und großzügige Gartenanlagen.',
  'Marmorzierkies, Royal-rot': 'Kräftig rotbrauner Marmorzierkies mit lebendiger Farbgebung – ein echter Blickfang für Beete, Einfahrten und dekorative Gestaltungen.',
  'Marmorzierkies, Anthrazit-weiß': 'Kontrastreiche Mischung aus Anthrazit und Weiß – moderner Marmorzierkies für zeitgemäße Gärten und architektonisch anspruchsvolle Außenbereiche.',
  'Marmorzierkies, Ebano-schwarz': 'Tiefschwarzer, edler Marmorzierkies mit glatter Oberfläche – erzeugt eindrucksvolle Kontraste und verleiht Flächen eine exklusive Optik.',
  'Marmorzierkies, Donau-blau': 'Marmorzierkies in sanften Blau-Grau-Tönen – erinnert an Flusslandschaften und bringt eine natürlich-kühle Note in den Garten.',
  'Marmorzierkies, Dachstein-blau': 'Blau-grauer Marmorzierkies mit alpenländischem Charakter – harmoniert besonders gut mit Naturstein und modernen Gartenkonzepten.',
  'Marmorzierkies, Gold-ocker': 'Warm leuchtender Marmorzierkies in Gold-Ocker – bringt südländisches Flair in Gärten und eignet sich hervorragend als Wegebelag.',
  'Marmorzierkies, Siena-gelb': 'Sonnengelber Marmorzierkies mit toskanischer Anmutung – ideal für warme, einladende Gartengestaltungen und Terrassenumrandungen.',
  'Marmorzierkies, Sunrise': 'Marmorzierkies in sanften Sonnenaufgangsfarben – eine harmonische Mischung aus warmen Tönen für lebendige, natürliche Flächen.',
  'Marmorzierkies, Verona-rot': 'Leuchtend roter Marmorzierkies aus Verona – ein mediterraner Akzentstein, der Beete und Flächen mit kräftiger Farbe belebt.',
  'Marmorzierkies, Alpen-grün': 'Grüner Marmorzierkies mit natürlicher Frische – fügt sich harmonisch in Gartenlandschaften ein und betont Pflanzflächen dezent.',
  'Engelstein, Grün-weiß': 'Grün-weißer Engelstein mit lebendiger Maserung – ein seltener Zierkies, der durch seine unverwechselbare Farbkombination besticht.',
  'Granitzierkiesel, Salz-Pfeffer': 'Gesprenkelter Granitzierkiesel in Salz-Pfeffer-Optik – äußerst strapazierfähig und farbbeständig, ideal für stark frequentierte Flächen.',
  'Diskus-Granitzierkiesel, Salz-Pfeffer': 'Flacher, scheibenförmiger Granitzierkiesel in Salz-Pfeffer – einzigartige Form für besonders flächige, ruhige Gartengestaltungen.',
};

const kantkornDescriptions: Record<string, string> = {
  'Kantkorn 1': 'Gebrochener Ziersplitt in natürlichen Erdtönen – vielseitig einsetzbar als Beetabdeckung, Wegebelag oder zur Flächengestaltung im Garten.',
  'Kantkorn 2': 'Kantiger Ziersplitt mit kräftiger Farbgebung – die unregelmäßigen Bruchkanten sorgen für guten Halt und eine lebendige Flächenstruktur.',
  'Kantkorn 3': 'Dekorativer Edelsplitt in warmer Farbmischung – bildet eine stabile, wasserdurchlässige Schicht und setzt natürliche Akzente.',
  'Kantkorn 4': 'Kantkorn-Splitt mit dezenter, heller Färbung – ideal für Zierflächen, japanische Gärten und als Mulchersatz rund um Gehölze.',
  'Kantkorn 5': 'Gebrochener Naturstein-Splitt mit grau-beiger Nuance – verbindet zurückhaltende Eleganz mit hoher Trittfestigkeit.',
  'Kantkorn 6': 'Farbintensiver Ziersplitt mit kantiger Struktur – widersteht Witterung und UV-Strahlung und behält dauerhaft seine Farbe.',
  'Kantkorn 7': 'Kantkorn in mittlerer Körnung mit lebhafter Farbmischung – ein pflegeleichter Allrounder für Vorgärten, Wege und Dachbegrünungen.',
  'Kantkorn 8': 'Robuster Edelsplitt mit natürlicher Bruchkante – die raue Oberfläche bietet guten Halt und verhindert Verschiebungen auf Schrägen.',
  'Kantkorn 9': 'Ziersplitt in markanter Farbgebung – eignet sich als dekorativer Bodenbelag in Kombination mit Natursteinplatten und Pflaster.',
  'Kantkorn 10': 'Gebrochener Splitt in ausgewogener Farbmischung – schafft eine natürliche, ordentliche Flächenoptik in Beeten und Einfassungen.',
  'Kantkorn 11': 'Kantkorn-Variante mit charakteristischer Farbzeichnung – ein Gestaltungselement, das durch seine individuelle Optik jeden Gartenbereich aufwertet.',
  'Kantkorn 12': 'Kantiger Ziersplitt in klassischer Körnung – bewährt für Drainage, Beetabdeckung und als stabiler Untergrund auf Gartenwegen.',
  'Marmorsplitt Matt-weiß': 'Fein gebrochener Marmorsplitt in mattem Weiß – dezent und elegant als Beetabdeckung, für Wege oder zur Dachbegrünungs-Drainage.',
  'Marmorsplitt Wolken-weiß': 'Wolkig-weißer Marmorsplitt mit leicht unregelmäßiger Oberfläche – erzeugt eine lebendige, helle Flächenoptik in Gärten und Vorgärten.',
  'Marmorbruch Wolken-weiß': 'Grob gebrochener Marmorbruch in Wolken-Weiß – ideal für großflächige Abdeckungen, Gabionenfüllungen und naturnahe Gartenakzente.',
  'Marmorsplitt Carrara-weiß': 'Klassischer Carrara-Marmorsplitt mit edler Ausstrahlung – der Premiumsplitt für repräsentative Flächen und anspruchsvolle Außengestaltungen.',
  'Marmorsplitt Chateau-beige': 'Warmer Marmorsplitt in Chateau-Beige – schafft eine einladende, südländische Atmosphäre auf Wegen, Terrassen und in Steingärten.',
  'Marmorbruch Chateau-beige': 'Grobkörniger Marmorbruch in warmem Beige – perfekt für Gabionenfüllungen, Hangbefestigungen und großzügige Flächengestaltungen.',
  'Marmorsplitt Rosé-bunt': 'Farbenfroher Marmorsplitt in Rosé-Tönen – bringt lebendige, warme Akzente in Beete und Zierflächen.',
  'Marmorbruch Rosé-bunt': 'Markanter Marmorbruch in Rosé-Bunt – ein dekorativer Blickfang für Gabionen und großflächige Gartengestaltungen.',
  'Marmorsplitt Rosa-corallo': 'Korallenrosa Marmorsplitt mit mediterranem Charme – verleiht Flächen eine warme, exotische Note.',
  'Marmorsplitt Black & white': 'Kontrastreicher Marmorsplitt in Schwarz-Weiß – ein modernes Gestaltungselement für minimalistische Gärten und Außenanlagen.',
  'Marmorsplitt Anthrazit-weiß': 'Anthrazit-weißer Marmorsplitt mit elegantem Farbspiel – ideal für zeitgenössische Garten- und Terrassenkonzepte.',
  'Marmorbruch Schwarz-weiß': 'Grober Marmorbruch in Schwarz-Weiß – markant und ausdrucksstark für Gabionen und dekorative Naturstein-Akzente.',
  'Basaltsplitt Schwarz': 'Tiefschwarzer Basaltsplitt – extrem hart und farbbeständig, ideal als Mulchersatz, für Dachbegrünungen und moderne Gartengestaltungen.',
  'Basaltbruch Schwarz': 'Schwarzer Basaltbruch in grober Körnung – witterungsresistent und formstabil, perfekt für Gabionenfüllungen und großflächige Akzente.',
  'Schieferplättchen Schwarz': 'Flache, schwarze Schieferplättchen mit natürlicher Schichtung – schaffen eine besonders edle, dunkle Flächenoptik in Beeten und Zierflächen.',
};

// Schieferplättchen: images 1-12 from Kantkorn
const schieferplaettchenProducts = kantkornProducts.slice(0, 12);

export const getZierkiesProducts = (subCategoryId: string): Product[] | null => {
  if (subCategoryId === 'rundkorn') {
    return rundkornProducts.map((p, i) => ({
      name: p.name,
      description: rundkornDescriptions[p.name] || 'Natürlich gerundeter Zierkies für vielseitige Garten- und Außengestaltungen.',
      meta: 'Dekorativer Rundkorn-Zierkies',
      image: {
        id: `rundkorn-${i + 1}`,
        description: p.name,
        imageUrl: encodeImagePath(p.image),
        imageHint: 'decorative round gravel',
      },
    }));
  }

  if (subCategoryId === 'schieferplaettchen') {
    return schieferplaettchenProducts.map((p, i) => ({
      name: 'Schieferplättchen',
      description: kantkornDescriptions[p.name] || 'Flache Schieferplättchen mit natürlicher Schichtung – schaffen eine edle, dunkle Flächenoptik in Beeten und Zierflächen.',
      meta: 'Dekorative Schieferplättchen',
      image: {
        id: `schieferplaettchen-${i + 1}`,
        description: 'Schieferplättchen',
        imageUrl: encodeImagePath(p.image),
        imageHint: 'decorative slate chips',
      },
    }));
  }

  if (subCategoryId === 'kantkorn') {
    // Only the named products (index 12+), not the first 12 which moved to Schieferplättchen
    const remainingKantkorn = kantkornProducts.slice(12);
    return remainingKantkorn.map((p, i) => ({
      name: p.name,
      description: kantkornDescriptions[p.name] || 'Gebrochener Ziersplitt für stabile, wasserdurchlässige Flächen und individuelle Gartengestaltung.',
      meta: 'Dekorativer Kantkorn-Ziersplitt',
      image: {
        id: `kantkorn-${i + 1}`,
        description: p.name,
        imageUrl: encodeImagePath(p.image),
        imageHint: 'decorative angular gravel',
      },
    }));
  }

  return null;
};

const gartendekoImageCounts: Record<string, { count: number, path: string, name: string }> = {
  herz: { count: 4, path: '/images/5. Gartendeko/1. Herz', name: 'Herz' },
  figuren: { count: 3, path: '/images/5. Gartendeko/2. Figuren', name: 'Figur' },
  findlinge: { count: 13, path: '/images/5. Gartendeko/3. Findlinge', name: 'Gartenelement' },
  brunnen: { count: 5, path: '/images/5. Gartendeko/5. Brunnen', name: 'Brunnen' },
  'tische-baenke': { count: 3, path: '/images/5. Gartendeko/6. TischeBanke', name: 'Tisch / Bank' },
  blumentrog: { count: 8, path: '/images/5. Gartendeko/7. Blumentrog', name: 'Blumentrog' }, // image 6 moved to Brunnen
  vasen: { count: 4, path: '/images/5. Gartendeko/8. Vasen', name: 'Vase' },
};

const gartendekoDescriptions: Record<string, Record<number, string>> = {
  herz: {
    1: 'Handgearbeitetes Steinherz in massiver Ausführung – ein zeitloses Symbol, das als Gartendeko, Grabschmuck oder Geschenk gleichermaßen berührt.',
    2: 'Naturstein-Herz mit polierter Oberfläche und natürlicher Maserung – jedes Stück ein Unikat mit individueller Zeichnung.',
    3: 'Rustikales Steinherz mit grob behauener Oberfläche – verleiht Blumenbeeten und Eingangsbereichen eine persönliche, warmherzige Note.',
    4: 'Dekoratives Herz aus hellem Naturstein – die schlichte Form und das natürliche Material schaffen einen bleibenden Akzent im Garten.',
  },
  figuren: {
    1: 'Gartenfigur Elefant – dekoratives Steinelement für Garten und Terrasse.',
    2: 'Gartenfigur – charmante Dekoration aus Naturstein für jeden Außenbereich.',
    3: 'Gartenfigur Pferd – edles Dekorelement aus Naturstein, wetterfest und langlebig.',
  },
  findlinge: {
    1: 'Natursteinanlage für den Garten – individuell gestaltbar als Beetbegrenzung oder Hangbefestigung.',
    2: 'Natursteingestaltung – harmonische Gartengestaltung mit verschiedenen Steinelementen.',
    3: 'Naturstein-Trockenmauer – robust, natürlich und langlebig für Gartenanlagen.',
    4: 'Natürlicher Solitärstein – markantes Einzelelement für Garten und Außenanlage.',
    5: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    6: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    7: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    8: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    9: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    10: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    11: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    12: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
    13: 'Naturstein-Kunstobjekt – jedes Stück ein Unikat, handgefertigt aus natürlichem Gestein.',
  },
  brunnen: {
    1: 'Dekorativer Zierbrunnen mit Ornamentrelief – handgefertigt aus Naturstein, ideal als Gartenmittelpunkt.',
    2: 'Runder Trogbrunnen in Steinoptik – klassisches Design für Garten und Terrasse.',
    3: 'Granit-Trogbrunnen – massiv und langlebig, für Außenbereiche und Einfahrten geeignet.',
    4: 'Granit-Wandbrunnen mit Zapfhahn – funktional und dekorativ, wetterfest und pflegeleicht.',
    5: 'Granit-Waschbecken aus einem Stück – zeitlos, robust und ideal für den Außenbereich.',
  },
  'tische-baenke': {
    1: 'Granit-Outdoorküche – maßgefertigte Außenküche aus Naturstein, wetterfest und langlebig.',
    2: 'Granit-Gartentisch – modernes Design, kratzfest und witterungsbeständig für jede Terrasse.',
    3: 'Rustikaler Naturstein-Tisch – handgefertigt aus einem Stück, jedes Exemplar ein Unikat.',
  },
  blumentrog: {
    1: 'Blumentrog mit Ornamentrelief – dekorativ und funktional, ideal für Terrasse und Garten.',
    2: 'Granit-Blumentrog rustikal – natürliche Oberfläche, frostbeständig und langlebig.',
    3: 'Naturstein-Blumentrog in Rosétönen – wetterfest und ein echter Blickfang im Garten.',
    4: 'Moderner Blumentrog in Weiß – klare Linien, pflegeleicht und für jeden Stil geeignet.',
    5: 'Blumentrog in Anthrazit – modernes Design, robust und witterungsbeständig.',
    7: 'Blumentröge in verschiedenen Größen – für Terrasse, Einfahrt und Gartengestaltung.',
    8: 'Blumentröge im Außenbereich – vielseitig einsetzbar als Raumteiler oder Bepflanzungselement.',
  },
  vasen: {
    1: 'Naturstein-Vase mit Blattdekor und Henkeln – mediterranes Dekorelement für Terrasse und Garten.',
    2: 'Hohe Naturstein-Vase mit filigranem Blattrelief – eleganter Blickfang für jeden Außenbereich.',
    3: 'Naturstein-Krug mit geschwungenem Henkel – stilvolles Gartenaccessoire in klassischer Form.',
    4: 'Naturstein-Pflanzkübel mit Ornamentrelief – robust, frostbeständig und dekorativ zugleich.',
  },
};

export const getGartendekoProducts = (subCategoryId: string): Product[] | null => {
  const imageInfo = gartendekoImageCounts[subCategoryId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const subcatDescriptions = gartendekoDescriptions[subCategoryId] || {};
  const products: Product[] = [];

  if (subCategoryId === 'brunnen') {
    // Original 4 Brunnen images
    for (let i = 1; i <= 4; i++) {
      const imageUrl = encodeImagePath(`${imageInfo.path}/${i}.jpg`);
      products.push({
        name: imageInfo.name,
        description: subcatDescriptions[i] || 'Gartenbrunnen aus Naturstein – ein dekoratives Wasserspiel, das jedem Außenbereich eine besondere Atmosphäre verleiht.',
        meta: 'Unikat aus Naturstein',
        image: {
          id: `${subCategoryId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: 'brunnen',
        },
      });
    }
    // Image 6 from Blumentrog moved here as Brunnen 5
    products.push({
      name: imageInfo.name,
      description: subcatDescriptions[5] || 'Gartenbrunnen aus Naturstein – ein dekoratives Wasserspiel, das jedem Außenbereich eine besondere Atmosphäre verleiht.',
      meta: 'Unikat aus Naturstein',
      image: {
        id: 'brunnen-from-blumentrog-6',
        description: 'Brunnen',
        imageUrl: encodeImagePath('/images/5. Gartendeko/7. Blumentrog/6.jpg'),
        imageHint: 'brunnen',
      },
    });
    return products;
  }

  if (subCategoryId === 'blumentrog') {
    // Skip image 6 (moved to Brunnen)
    for (let i = 1; i <= imageInfo.count; i++) {
      if (i === 6) continue;
      const imageUrl = encodeImagePath(`${imageInfo.path}/${i}.jpg`);
      products.push({
        name: imageInfo.name,
        description: subcatDescriptions[i] || 'Einzigartiges Deko-Element aus Naturstein – jedes Stück ein handverlesenes Unikat, bei dem Abmessungen, Farbe und Form natürlich variieren.',
        meta: 'Unikat aus Naturstein',
        image: {
          id: `${subCategoryId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: subCategoryId.replace('-', ' '),
        },
      });
    }
    return products;
  }

  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = encodeImagePath(`${imageInfo.path}/${i}.jpg`);
    products.push({
      name: imageInfo.name,
      description: subcatDescriptions[i] || 'Einzigartiges Deko-Element aus Naturstein – jedes Stück ein handverlesenes Unikat, bei dem Abmessungen, Farbe und Form natürlich variieren.',
      meta: 'Unikat aus Naturstein',
      image: {
        id: `${subCategoryId}-${i}`,
        description: imageInfo.name,
        imageUrl: imageUrl,
        imageHint: subCategoryId.replace('-', ' '),
      },
    });
  }
  return products;
};

const granitImageCounts: Record<string, { count: number, path: string, name: string }> = {
  blockstufen: { count: 7, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen', name: 'Blockstufe' },
  pflastersteine: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Pflastersteine', name: 'Pflasterstein' },
  randleisten: { count: 2, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Randleisten', name: 'Randleiste' },
  granitplatte: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Granitplatte', name: 'Granitplatte' },
};

const granitDescriptions: Record<string, string> = {
  blockstufen: 'Massiv geschnittene Granit-Blockstufe mit gespaltener oder gesägter Oberfläche – trittsicher, frostbeständig und prädestiniert für Eingangstreppen, Gartenstufen und Hangbefestigungen.',
  pflastersteine: 'Granit-Pflasterstein in klassischer Würfelform – extrem druckfest und unverwüstlich, bestens geeignet für Einfahrten, Höfe und repräsentative Platzgestaltungen.',
  randleisten: 'Granitrandleiste als sauberer Abschluss für Pflasterflächen und Beeteinfassungen – formstabil, frostfest und in verschiedenen Längen verfügbar.',
  granitplatte: 'Granitplatte in verschiedenen Formaten – ob als großformatige Terrassenplatte oder als kompakter Bodenbelag, überzeugt dieser frostbeständige Naturstein durch seine gleichmäßige Struktur, hohe Belastbarkeit und zeitlose Eleganz für jeden Außenbereich.',
};

const granitwuerfelDescriptions: Record<number, string> = {
  1: 'Granit-Pflasterwürfel gespalten – natürliche raue Oberfläche, ideal für rustikale Einfahrten, Wege und Hofpflasterungen.',
  2: 'Granit-Pflasterwürfel geschnitten und gestrahlt – gleichmäßige Oberfläche, rutschhemmend und pflegeleicht. Für moderne Außenanlagen.',
  3: 'Granit-Pflasterwürfel in gespaltener Form – massiv und langlebig, klassischer Naturstein für Garten und Einfahrt.',
  4: 'Granit-Pflasterwürfel in verschiedenen Ausführungen erhältlich – frostbeständig, salzbeständig und für alle Außenbereiche geeignet.',
};

const granitRandleistenDescriptions: Record<number, string> = {
  1: 'Granit-Randleiste gespalten – natürliche raue Oberfläche, ideal als Beetbegrenzung, Wegrandstein oder Gartenabschluss.',
  2: 'Granit-Randleiste gespalten und aufrecht – robuste Einfassung für Wege, Einfahrten und Grünflächen.',
  3: 'Granit-Randleiste geschnitten und gestrahlt – gleichmäßige Kanten, saubere Optik. Lieferbereit auf Palette in verschiedenen Formaten.',
  4: 'Granit-Randleiste geschnitten, gestrahlt mit Fase – edle Ausführung für repräsentative Einfahrten und hochwertige Außenanlagen.',
};

export const getGranitProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = granitImageCounts[productGroupId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const products: Product[] = [];

  if (productGroupId === 'blockstufen') {
    const blockstufeDescriptions: Record<string, string> = {
      '1': 'Granit-Blockstufen im Außenbereich – robust, witterungsbeständig und natürlich wirkend. Ideal für Gartentreppen und Hangbefestigungen.',
      '4': 'Granit-Blockstufen geschnitten und gestrahlt – gleichmäßige Oberfläche, rutschhemmend und langlebig. Perfekt für repräsentative Eingangsbereiche.',
      'avif-1': 'Granit-Blockstufen auf Palette – lieferbereit in verschiedenen Formaten. Frostbeständig und für den Außenbereich geeignet.',
      'avif-2': 'Granit-Blockstufen gestapelt auf Palette – hohe Stückzahl verfügbar, ideal für größere Bauprojekte und Außenanlagen.',
    };
    // Skip images 2, 3, 6 (moved to Luserna Gneis Blockstufen) and 5, 7 (deleted)
    const skipImages = new Set([2, 3, 5, 6, 7]);
    for (let i = 1; i <= imageInfo.count; i++) {
      if (skipImages.has(i)) continue;
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: imageInfo.name,
        description: blockstufeDescriptions[String(i)] || granitDescriptions.blockstufen,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `${productGroupId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: 'granite blockstufe',
        },
      });
    }
    // Named AVIF images
    for (let i = 1; i <= 2; i++) {
      products.push({
        name: 'Blockstufe',
        description: blockstufeDescriptions[`avif-${i}`] || granitDescriptions.blockstufen,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `blockstufen-avif-${i}`,
          description: 'Granit Blockstufe',
          imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen/Granit Blockstufen ${i}.AVIF`),
          imageHint: 'granite steps',
        },
      });
    }
  } else if (productGroupId === 'pflastersteine') {
    // Per-image descriptions for Granitwürfel
    for (let i = 1; i <= imageInfo.count; i++) {
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: imageInfo.name,
        description: granitwuerfelDescriptions[i] || granitDescriptions.pflastersteine,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `${productGroupId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: 'granite paving cube',
        },
      });
    }
  } else if (productGroupId === 'randleisten') {
    // Numbered images (1 & 2: gespalten)
    for (let i = 1; i <= imageInfo.count; i++) {
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: imageInfo.name,
        description: granitRandleistenDescriptions[i] || granitDescriptions.randleisten,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `${productGroupId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: 'granite curb',
        },
      });
    }
    // Named AVIF images (3: geschnitten/gestrahlt, 4: geschnitten/gestrahlt mit Fase)
    for (let i = 1; i <= 2; i++) {
      products.push({
        name: 'Randleiste',
        description: granitRandleistenDescriptions[i + 2] || granitDescriptions.randleisten,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `randleisten-avif-${i}`,
          description: 'Granit Randleiste',
          imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Granit/Randleisten/Granit Randleiste ${i}.AVIF`),
          imageHint: 'granite curbs',
        },
      });
    }
  } else {
    // Per-image descriptions for Granitplatte
    const granitplatteDescriptions: Record<number, string> = {
      1: 'Granitplatte geschliffen und gestrahlt – gleichmäßige Oberfläche, ideal für Terrassen und Eingangsbereiche. Frostbeständig und pflegeleicht.',
      2: 'Granitplatte im kleineren Format – vielseitig einsetzbar als Terrassenplatte oder Wegbelag. Derselbe hochwertige Granit, frostbeständig und langlebig.',
      3: 'Granitplatten auf Palette – lieferbereit in großer Stückzahl. Ideal für größere Flächen wie Einfahrten, Terrassen oder Gartenwege.',
      4: 'Granitplatte in verschiedenen Formaten erhältlich – derselbe Stein, angepasst an jeden Einsatzbereich. Rutschhemmend, witterungsbeständig und zeitlos schön.',
    };
    const fallbackDesc = granitDescriptions[productGroupId] || 'Granit-Naturstein für den Außenbereich – frostfest und vielseitig einsetzbar.';
    for (let i = 1; i <= imageInfo.count; i++) {
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: imageInfo.name,
        description: granitplatteDescriptions[i] || fallbackDesc,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `${productGroupId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: `granite ${productGroupId.slice(0, -1)}`,
        },
      });
    }
  }
  return products;
};

const schieferImageCounts: Record<string, { count: number, path: string, name: string }> = {
  blockstufen: { count: 5, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Blockstufen', name: 'Schiefer Blockstufe' },
  mauersteine: { count: 28, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Mauersteine', name: 'Schiefer Mauerstein' },
  polygonalplatten: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Polygonalplatten', name: 'Schiefer Polygonalplatte' },
  stelen: { count: 9, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Stelen', name: 'Schiefer Stele' },
  bodenplatten: { count: 5, path: '/images/UNSERE-PRODUKTE/Natursteine/Schiefer/Bodenplatten', name: 'Schiefer Bodenplatte' },
};

const schieferDescriptions: Record<string, string> = {
  blockstufen: 'Schiefer-Blockstufe mit markanter Schichtstruktur und natürlich spaltrauer Oberfläche – trittsicher bei Nässe und ein gestalterisches Highlight für Gartentreppen und Hanglagen.',
  mauersteine: 'Schiefer-Mauerstein mit unregelmäßiger, lebendiger Oberfläche – eignet sich hervorragend für Trockenmauern, Hangstützungen und als dekoratives Gestaltungselement.',
  polygonalplatten: 'Polygonalplatte aus Schiefer mit natürlich gebrochenen Kanten – schafft einzigartige, individuelle Verlegemuster für Terrassen, Gartenwege und Sitzplätze.',
  stelen: 'Schlanke Schiefer-Stele mit natürlicher Spaltung – ein markanter Blickfang als Sichtschutz, Wegbegrenzung oder skulpturales Element im Garten.',
  bodenplatten: 'Schiefer-Bodenplatte mit natürlicher Schieferung und spaltrauer Oberfläche – ideal für Terrassen, Gartenwege und Eingangsbereiche mit rutschfester Trittsicherheit.',
};

// Schiefer Mauerstein: reordered image groups, image 23 deleted
const schieferMauersteinOrder = [1, 12, 17, 18, 21, 2, 9, 13, 20, 3, 14, 15, 16];

export const getSchieferProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = schieferImageCounts[productGroupId];
  if (!imageInfo) {
    return null;
  }

  const desc = schieferDescriptions[productGroupId] || 'Schiefer-Naturstein mit charaktervoller Struktur – vielseitig einsetzbar im Außenbereich.';
  const products: Product[] = [];

  if (productGroupId === 'mauersteine') {
    // Use custom order, excluding image 23
    for (const i of schieferMauersteinOrder) {
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: imageInfo.name,
        description: desc,
        meta: 'Schiefer, frostfest & witterungsbeständig',
        image: {
          id: `schiefer-${productGroupId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: `slate ${productGroupId.replace(/s$/, '')}`,
        },
      });
    }
    // Add remaining images not in the specific order (4-8, 10-11, 19, 22, 24-28) excluding 23
    for (let i = 1; i <= imageInfo.count; i++) {
      if (schieferMauersteinOrder.includes(i) || i === 23) continue;
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: imageInfo.name,
        description: desc,
        meta: 'Schiefer, frostfest & witterungsbeständig',
        image: {
          id: `schiefer-${productGroupId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: `slate ${productGroupId.replace(/s$/, '')}`,
        },
      });
    }
  } else {
    for (let i = 1; i <= imageInfo.count; i++) {
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: imageInfo.name,
        description: desc,
        meta: 'Schiefer, frostfest & witterungsbeständig',
        image: {
          id: `schiefer-${productGroupId}-${i}`,
          description: imageInfo.name,
          imageUrl: imageUrl,
          imageHint: `slate ${productGroupId.replace(/s$/, '')}`,
        },
      });
    }
  }
  return products;
};

const lusernaGneisImageCounts: Record<string, { count: number; path: string; name: string }> = {
    bodenplatten: { count: 0, path: '', name: 'Luserna Gneis - Bodenplatte' }, // custom handling
    mauersteine: { count: 12, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Mauersteine', name: 'Luserna Gneis - Mauerstein' },
    pflasterwuerfel: { count: 5, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Pflasterwuerfel', name: 'Luserna Gneis - Pflasterwürfel' },
    'polygonal-platten': { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Polygonal Platten', name: 'Luserna Gneis - Polygonal Platte' },
    trittplatten: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Trittplatten', name: 'Luserna Gneis - Trittplatte' },
    randleisten: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Randleisten', name: 'Luserna Gneis - Randleiste' },
    blockstufen: { count: 3, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen', name: 'Blockstufe Luserna Gneis' },
};

const lusernaGneisDescriptions: Record<string, string> = {
  bodenplatten: 'Luserna Gneis Bodenplatte in verschiedenen Formaten – die lebendige Farbgebung von Silbergrau bis Olivgrün und die natürliche Frostbeständigkeit machen diesen Stein ideal für Terrassen, Wege und anspruchsvolle Außenflächen.',
  mauersteine: 'Luserna-Gneis-Mauerstein mit natürlicher Bruchkante – ideal für freistehende Gartenmauern, Stützmauern und als gestalterische Abgrenzung von Grünflächen.',
  pflasterwuerfel: 'Pflasterwürfel aus Luserna Gneis mit spaltrauer Oberfläche – rutschfest, extrem belastbar und traditionell bewährt für Wege, Plätze und Hofeinfahrten.',
  'polygonal-platten': 'Polygonalplatte aus Luserna Gneis mit unregelmäßig gebrochenen Kanten – erzeugt natürliche, lebendige Verlegemuster auf Terrassen und Gartenwegen.',
  trittplatten: 'Großformatige Luserna-Gneis-Trittplatte als Schrittstein durch Rasenflächen und Beete – kombiniert Funktionalität mit natürlicher Ästhetik.',
  randleisten: 'Randleiste aus Luserna Gneis als eleganter Abschluss für Pflasterflächen und Beeteinfassungen – passt farblich zu vielen Naturstein-Kombinationen.',
};

export const getLusernaGneisProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = lusernaGneisImageCounts[productGroupId];
  if (!imageInfo) {
    return null;
  }

  if (productGroupId === 'blockstufen') {
    const imageNumbers = [2, 3, 6];
    return imageNumbers.map((num) => ({
      name: 'Blockstufe Luserna Gneis',
      description: 'Massiv geschnittene Blockstufe aus Luserna Gneis – trittsicher, frostbeständig und ideal für Eingangstreppen, Gartenstufen und Hangbefestigungen.',
      meta: 'Luserna Gneis, frostfest & witterungsbeständig',
      image: {
        id: `luserna-blockstufen-${num}`,
        description: 'Blockstufe Luserna Gneis',
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen/${num}.jpg`,
        imageHint: 'luserna gneiss blockstufe',
      },
    }));
  }

  // Merged Bodenplatten: Allgemein (keep 1, 2, 6) + Gemischt (skip 7-9)
  if (productGroupId === 'bodenplatten') {
    const desc = lusernaGneisDescriptions.bodenplatten;
    const products: Product[] = [];
    // Allgemein images: keep 1, 2, 6 (remove 3, 4, 5)
    for (const i of [1, 2, 6]) {
      products.push({
        name: 'Luserna Gneis - Bodenplatte',
        description: desc,
        meta: 'Luserna Gneis, frostfest & witterungsbeständig',
        image: {
          id: `luserna-bodenplatten-allg-${i}`,
          description: 'Luserna Gneis Bodenplatte',
          imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Allgemein/${i}.jpg`),
          imageHint: 'luserna gneiss floor tile',
        },
      });
    }
    // Gemischt images: skip 7-9
    for (let i = 1; i <= 19; i++) {
      if (i >= 7 && i <= 9) continue;
      products.push({
        name: 'Luserna Gneis - Bodenplatte',
        description: desc,
        meta: 'Luserna Gneis, frostfest & witterungsbeständig',
        image: {
          id: `luserna-bodenplatten-gem-${i}`,
          description: 'Luserna Gneis Bodenplatte',
          imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Gemischt/${i}.jpg`),
          imageHint: 'luserna gneiss floor tile',
        },
      });
    }
    return products;
  }

  const desc = lusernaGneisDescriptions[productGroupId] || 'Luserna Gneis – ein vielseitiger Naturstein mit grün-grauer Farbgebung für anspruchsvolle Außenprojekte.';
  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    if (productGroupId === 'mauersteine' && i === 9) continue;
    // Trittplatten: skip image 2
    if (productGroupId === 'trittplatten' && i === 2) continue;

    const imageUrl = encodeImagePath(`${imageInfo.path}/${i}.jpg`);
    products.push({
      name: imageInfo.name,
      description: desc,
      meta: 'Luserna Gneis, frostfest & witterungsbeständig',
      image: {
        id: `luserna-${productGroupId}-${i}`,
        description: imageInfo.name,
        imageUrl: imageUrl,
        imageHint: `luserna gneiss ${productGroupId.replace('-', ' ')}`,
      },
    });
  }
  return products;
};

const betonsteineImageCounts: Record<string, { count: number, path: string, name: string }> = {
  betonplatten: { count: 9, path: '/images/UNSERE-PRODUKTE/Betonsteine/Betonplatten', name: 'Betonplatte' },
  mauersteine: { count: 4, path: '/images/UNSERE-PRODUKTE/Betonsteine/Mauersteine', name: 'Beton-Mauerstein' },
  palisaden: { count: 3, path: '/images/UNSERE-PRODUKTE/Betonsteine/Palisaden', name: 'Beton-Palisade' },
  pflastersteine: { count: 4, path: '/images/UNSERE-PRODUKTE/Betonsteine/Pflastersteine', name: 'Beton-Pflasterstein' },
  randleisten: { count: 4, path: '/images/UNSERE-PRODUKTE/Betonsteine/Randleisten', name: 'Beton-Randleiste' },
};

const betonsteineDescriptions: Record<string, string> = {
  betonplatten: 'Großformatige Betonplatte mit glatter oder strukturierter Oberfläche – ideal für moderne Terrassen, Gartenwege und minimalistische Außengestaltungen.',
  mauersteine: 'Beton-Mauerstein im Systemformat für den einfachen Aufbau von Gartenmauern, Hochbeeten und dekorativen Raumteilern – formstabil und witterungsbeständig.',
  palisaden: 'Beton-Palisade zur Hangabstützung, Beeteinfassung oder als gestalterisches Gliederungselement – in verschiedenen Höhen verfügbar und einfach zu setzen.',
  pflastersteine: 'Beton-Pflasterstein in bewährter Verbundform – belastbar, rutschfest und prädestiniert für Einfahrten, Gehwege und Parkplatzflächen.',
  randleisten: 'Beton-Randleiste als sauberer Kantenabschluss zwischen Pflaster und Grünfläche – verhindert seitliches Abrutschen und sorgt für ein gepflegtes Erscheinungsbild.',
};

export const getBetonsteineProducts = (subCategoryId: string): Product[] | null => {
  const imageInfo = betonsteineImageCounts[subCategoryId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    // Skip index 3 for Randleisten
    if (subCategoryId === 'randleisten' && i === 3) continue;
    // Skip index 4 for Betonplatten
    if (subCategoryId === 'betonplatten' && i === 4) continue;

    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: imageInfo.name,
      description: betonsteineDescriptions[subCategoryId] || 'Betonstein für den Außenbereich – frostfest und vielseitig einsetzbar.',
      meta: 'Betonstein, frostfest & langlebig',
      image: {
        id: `betonsteine-${subCategoryId}-${i}`,
        description: imageInfo.name,
        imageUrl: imageUrl,
        imageHint: `betonstein ${subCategoryId.replace(/s$/, '')}`,
      },
    });
  }
  return products;
};

const stainzerGneisDescriptions: Record<number, string> = {
  1: 'Stainzer Gneis als Mauersteinformat – die grün-graue, lebendige Oberfläche verleiht Trockenmauern und Hangbefestigungen einen regionaltypischen Charakter.',
  2: 'Polygonale Stainzer-Gneis-Platte mit unregelmäßiger Bruchkante – erzeugt natürliche Verlegemuster auf Terrassen und Sitzplätzen.',
  3: 'Stainzer Gneis als Trittstein oder Bodenplatte – die spaltraue Oberfläche bietet sicheren Halt und eine authentische Naturstein-Optik.',
  4: 'Stainzer-Gneis-Bruchstein in rustikaler Form – vielseitig einsetzbar für Mauerbau, Beetumrandungen und individuelle Gartenakzente.',
  5: 'Großformatiger Stainzer Gneis als dekoratives Solitärelement – ein markanter Blickfang mit lebhafter Maserung und regionaler Herkunft.',
  11: 'Stainzer Gneis als Stufenplatte – die natürliche Schieferung sorgt für Trittsicherheit und passt zu traditionellen wie modernen Gartenkonzepten.',
  12: 'Verarbeiteter Stainzer Gneis als Wandverkleidung oder Terrassenbelag – die wechselnden Grau- und Grüntöne schaffen ein lebendiges Flächenbild.',
  13: 'Stainzer Gneis in Quaderform – eignet sich besonders für exakte Mauerwerke, Pfeiler und architektonisch anspruchsvolle Gestaltungen im Garten.',
};

export const getStainzerGneisProducts = (): Product[] => {
  const products: Product[] = [];
  const indices = [1, 2, 3, 4, 5, 11, 12, 13];
  for (const i of indices) {
    products.push({
      name: 'Stainzer Gneis',
      description: stainzerGneisDescriptions[i] || 'Regionaler Gneis-Naturstein mit lebendiger Struktur – robust und vielseitig für den Außenbereich.',
      meta: 'Regionaler Naturstein, robust & witterungsbeständig',
      image: {
        id: `stainzer-gneis-${i}`,
        description: 'Stainzer Gneis',
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Stainzer Gneis/${i}.jpg`),
        imageHint: 'stainzer gneiss',
      },
    });
  }
  return products;
};

const brasilQuarzitDescriptions: Record<number, string> = {
  1: 'Brasil Quarzit als Terrassenplatte – die goldbraune bis ockergelbe Oberfläche schimmert je nach Lichteinfall und verleiht Außenflächen ein exotisches Flair.',
  2: 'Brasil Quarzit in spaltrauer Ausführung – extrem kratzfest und säurebeständig, ideal für Poolumrandungen und stark frequentierte Barfußbereiche.',
  3: 'Brasil Quarzit als Bodenbelag mit natürlicher Rutschfestigkeit – widersteht Frost, Hitze und UV-Strahlung ohne Farbverlust.',
  4: 'Brasil Quarzit in Plattenformat – die lebendige Maserung mit warmen Erdtönen macht jede Platte zu einem Unikat für Terrassen und Eingangsbereiche.',
};

export const getBrasilQuarzitProducts = (): Product[] => {
  const products: Product[] = [];
  for (let i = 1; i <= 4; i++) {
    products.push({
      name: 'Brasil. Quarzit',
      description: brasilQuarzitDescriptions[i] || 'Brasil Quarzit – extrem hart, edel und widerstandsfähig für anspruchsvolle Außenprojekte.',
      meta: 'Extrem widerstandsfähig, frostfest',
      image: {
        id: `brasil-quarzit-${i}`,
        description: 'Brasil. Quarzit',
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Brasil. Quarzit/${i}.jpg`),
        imageHint: 'brazilian quartzite',
      },
    });
  }
  products.push({
    name: 'Brasil Quarzit',
    description: 'Brasil Quarzit in großformatiger Ansicht – die einzigartige Kombination aus Härte, Farbenspiel und natürlicher Eleganz macht diesen Stein zur Premiumwahl für exklusive Außengestaltungen.',
    meta: 'Extrem widerstandsfähig, frostfest',
    image: {
      id: 'brasil-quarzit-avif-1',
      description: 'Brasil Quarzit',
      imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Brasil. Quarzit/Brasil Quarzit 1.AVIF'),
      imageHint: 'brazilian quartzite',
    },
  });
  return products;
};

export const getSandsteinProducts = (): Product[] => {
  return [
    {
      name: 'Sandstein Mint',
      description: 'SANDSTEIN – Natursteinplatten, Handbekantet, Oberfläche bruchrau, begehbar. Farbe: MINT (Gelb-mint-bräunlich). Kategorie: Natursteinplatten & Feinsteinzeug.',
      meta: 'Sandstein, natürliche Farbtöne',
      image: {
        id: 'sandstein-mint',
        description: 'Sandstein Mint',
        imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Sandstein/Sandstein 1.avif'),
        imageHint: 'mint sandstone slab',
      },
    },
    {
      name: 'Sandstein Modak',
      description: 'SANDSTEIN – Natursteinplatten, Handbekantet, Oberfläche bruchrau, begehbar. Farbe: MODAK (Rötlich-bräunlich-gelblich). Kategorie: Natursteinplatten & Feinsteinzeug.',
      meta: 'Sandstein, natürliche Farbtöne',
      image: {
        id: 'sandstein-modak',
        description: 'Sandstein Modak',
        imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Sandstein/Sandstein 2.avif'),
        imageHint: 'modak sandstone slab',
      },
    },
    {
      name: 'Sandstein Kandia Grey',
      description: 'SANDSTEIN – Natursteinplatten, Handbekantet, Oberfläche bruchrau, begehbar. Farbe: KANDIA GREY (Grau-bräunlich). Kategorie: Natursteinplatten & Feinsteinzeug.',
      meta: 'Sandstein, natürliche Farbtöne',
      image: {
        id: 'sandstein-kandia-grey',
        description: 'Sandstein Kandia Grey',
        imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Sandstein/Sandstein 3.avif'),
        imageHint: 'kandia grey sandstone slab',
      },
    },
    {
      name: 'Sandstein Feinsteinzeug',
      description: 'SANDSTEIN – Feinsteinzeug-Terrassenplatte. Rutschhemmend (R11), pflegeleicht, Frost- und Tausalzbeständig. Farbe: Beige. Kategorie: Natursteinplatten & Feinsteinzeug / Feinsteinzeug.',
      meta: 'Sandstein, natürliche Farbtöne',
      image: {
        id: 'sandstein-feinsteinzeug',
        description: 'Sandstein Feinsteinzeug',
        imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Sandstein/Sandstein 4.avif'),
        imageHint: 'sandstone porcelain tile',
      },
    },
  ];
};

export const getBluestoneProducts = (): Product[] => {
  return Array.from({ length: 4 }, (_, i) => ({
    name: 'Bluestone',
    description: 'Edler blauer Naturstein mit markanter Oberfläche und lebhafter Farbgebung – ideal für exklusive Terrassen, Eingangsbereiche und Akzentflächen.',
    meta: 'Frostfest & witterungsbeständig',
    image: {
      id: `bluestone-${i}`,
      description: 'Bluestone',
      imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/BlueStone/BlueStone${i}.avif`,
      imageHint: 'blue stone natural stone',
    },
  }));
};

export const getTravertinProducts = (): Product[] => {
  const travertinNoceDescriptions: Record<number, string> = {
    1: 'Travertin Noce – satte, nussbraune Färbung mit natürlicher Textur. Ideal für Terrassen und Eingangsbereiche die Wärme und Stil ausstrahlen sollen.',
    2: 'Travertin Noce – offenporige Oberfläche mit warmem Braunton. Klassiker für mediterrane Außengestaltungen.',
    3: 'Travertin Noce im verlegten Zustand – harmonisches Erscheinungsbild durch natürliche Farbvariationen im Braunton.',
    4: 'Travertin Noce – zeitloser Naturstein mit charakteristischer Maserung. Frostbeständig und für Innen- und Außenbereiche geeignet.',
  };
  const travertinVanillaDescriptions: Record<number, string> = {
    1: 'Travertin Vanilla – heller, cremefarbener Naturstein mit feiner Maserung. Bringt Leichtigkeit und Eleganz in jeden Außenbereich.',
    2: 'Travertin Vanilla – gleichmäßige, helle Oberfläche mit subtilen Farbverläufen. Perfekt für moderne und mediterrane Terrassen.',
    3: 'Travertin Vanilla – in verschiedenen Formaten erhältlich. Zeitlos schön, witterungsbeständig und pflegeleicht.',
  };
  const travertinMixDescriptions: Record<number, string> = {
    1: 'Travertin Mix – lebhafte Mischung aus warmen Rot-, Orange- und Beigetönen. Jede Platte ein Unikat.',
    2: 'Travertin Mix – ausgeprägte Farbvielfalt durch natürliche Mineraleinschlüsse. Verlegt entsteht ein einzigartiges, lebendiges Bodenbild.',
    3: 'Travertin Mix – kontrastreiche Farbgebung von cremeweiß bis kräftigem Rot. Ideal für Akzentflächen und repräsentative Bereiche.',
    4: 'Travertin Mix – warme Erdtöne mit intensiver Maserung. Jede Fläche erhält dadurch ein individuelles, natürliches Erscheinungsbild.',
    5: 'Travertin Mix – naturbelassene Oberfläche mit charakteristischer Poren- und Farbstruktur. Robust, frostbeständig und langlebig.',
  };

  return [
    // Travertin Flamingo
    {
      name: 'Travertin Flamingo',
      description: 'Travertin Flamingo – warme Rosétöne mit lebhafter Maserung. Verleiht Terrassen und Außenbereichen einen mediterranen, eleganten Charakter.',
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: 'travertin-flamingo-1',
        description: 'Travertin Flamingo',
        imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Flamingo 1.AVIF'),
        imageHint: 'travertine flamingo stone'
      }
    },
    // Travertin Noce (4 images)
    ...Array.from({ length: 4 }, (_, i) => ({
      name: 'Travertin Noce',
      description: travertinNoceDescriptions[i + 1],
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: `travertin-noce-${i + 1}`,
        description: 'Travertin Noce',
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Noce ${i + 1}.jpg`),
        imageHint: 'travertine noce stone',
      },
    })),
    // Travertin Vanilla (3 images)
    ...Array.from({ length: 3 }, (_, i) => ({
      name: 'Travertin Vanilla',
      description: travertinVanillaDescriptions[i + 1],
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: `travertin-vanilla-${i + 1}`,
        description: 'Travertin Vanilla',
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Vanilla ${i + 1}.AVIF`),
        imageHint: 'travertine vanilla stone',
      },
    })),
    // Travertin Mix (5 images)
    ...Array.from({ length: 5 }, (_, i) => ({
      name: 'Travertin Mix',
      description: travertinMixDescriptions[i + 1],
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: `travertin-mix-${i + 1}`,
        description: 'Travertin Mix',
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Mix ${i + 1}.AVIF`),
        imageHint: 'travertine mix stone',
      },
    })),
  ];
};

const tuffPolygonalDescriptions: Record<number, string> = {
  1: 'Grauer Gneis als Mauerstein mit silbrig-grauer Oberfläche – verleiht Gartenmauern und Einfassungen eine ruhige, natürliche Ausstrahlung.',
  2: 'Grauer Gneis in Plattenform mit dezenter Schichtung – gut geeignet als Wegebelag oder Terrassenplatte in zurückhaltend-elegantem Design.',
  5: 'Grauer Gneis in Quaderform – eignet sich für präzise Mauerwerke und architektonisch klare Gartenstrukturen mit regionalem Charakter.',
  6: 'Grauer Gneis als dekorativer Solitärstein – die wechselnden Grautöne und die natürliche Patina machen ihn zum Blickfang in jeder Gartenanlage.',
};

const tuffBodenplattenDescriptions: Record<number, string> = {
  3: 'Grauer Gneis als Bruchstein mit lebendiger Textur – vielseitig verwendbar für Trockenmauern, Steingärten und rustikale Gestaltungselemente.',
  4: 'Grauer Gneis als Stufenplatte – die spaltraue Oberfläche bietet natürlichen Halt und fügt sich harmonisch in naturnahe Gartenkonzepte ein.',
};

export const getTuffProducts = (productGroupId?: string): Product[] | null => {
  if (productGroupId === 'polygonalplatten') {
    // Bilder 1, 2, 5, 6
    return [1, 2, 5, 6].map((i) => ({
      name: 'Polygonalplatte',
      description: tuffPolygonalDescriptions[i],
      meta: 'Natürlich, dezent, vielseitig',
      image: {
        id: `tuff-polygonal-${i}`,
        description: 'Grauer Gneis Polygonalplatte',
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Tuff/${i}.jpg`,
        imageHint: 'grey gneiss polygonal plate',
      },
    }));
  }

  if (productGroupId === 'bodenplatten') {
    // Bilder 3, 4
    return [3, 4].map((i) => ({
      name: 'Bodenplatte',
      description: tuffBodenplattenDescriptions[i],
      meta: 'Natürlich, dezent, vielseitig',
      image: {
        id: `tuff-boden-${i}`,
        description: 'Grauer Gneis Bodenplatte',
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Tuff/${i}.jpg`,
        imageHint: 'grey gneiss floor plate',
      },
    }));
  }

  return null;
};

const porphyrDescriptions: Record<number, string> = {
  1: 'Porphyr-Pflasterstein in klassischer Würfelform – die rotbraune Färbung und extreme Abriebfestigkeit machen ihn zum Favoriten für Einfahrten und historische Platzgestaltungen.',
  2: 'Porphyr-Platte mit spaltrauer Oberfläche – rutschfest auch bei Nässe und Frost, ideal für Gartenwege und Treppenanlagen.',
  3: 'Porphyr als Mauerstein mit lebendiger, rötlich-violetter Färbung – verleiht Gartenmauern und Einfassungen einen markanten, alpinen Charakter.',
  4: 'Porphyr in großformatiger Plattenausführung – vereint natürliche Rutschsicherheit mit einer warmen, erdigen Farbpalette für Terrassen und Sitzplätze.',
  5: 'Porphyr-Bruchstein für Trockenmauern und Hangbefestigungen – die unregelmäßige Bruchkante erzeugt ein authentisches, naturnahes Erscheinungsbild.',
  6: 'Porphyr als Randstein oder Beeteinfassung – widersteht Tausalz, mechanischer Belastung und extremen Temperaturschwankungen ohne sichtbare Abnutzung.',
  7: 'Porphyr in Stelen- oder Quaderform – ein vielseitiger Gestaltungsstein für Pfeiler, Sichtschutz und architektonische Akzente im Garten.',
};

export const getPorphyrProducts = (): Product[] => {
  const products: Product[] = [];
  const count = 7;
  for (let i = 1; i <= count; i++) {
    products.push({
      name: 'Porphyr',
      description: porphyrDescriptions[i] || 'Porphyr – äußerst robuster, rutschfester Naturstein für stark beanspruchte Außenflächen.',
      meta: 'Rutschfest, extrem wetterbeständig',
      image: {
        id: `porphyr-${i}`,
        description: 'Porphyr',
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Porphyr/${i}.jpg`,
        imageHint: 'porphyry stone',
      },
    });
  }
  return products;
};

const muschelkalkDescriptions: Record<number, string> = {
  1: 'Muschelkalk als Terrassenplatte mit fein geschliffener Oberfläche – die helle, gleichmäßige Färbung und sichtbare Fossilieneinschlüsse verleihen Außenflächen zeitlose Eleganz.',
  2: 'Muschelkalk-Mauerstein in Quaderform – eignet sich für repräsentative Gartenmauern und Einfriedungen, die Tradition und Beständigkeit ausstrahlen.',
  3: 'Muschelkalk als Blockstufe – die fein strukturierte Oberfläche bietet angenehme Haptik und sicheren Tritt bei Gartentreppen und Eingangsbereichen.',
  4: 'Muschelkalk in polygonaler Form – erzeugt individuelle, organisch wirkende Verlegemuster für Terrassen und Gartenwege im klassischen Stil.',
  5: 'Muschelkalk als Bodenplatte im Großformat – schafft ein ruhiges, helles Flächenbild und harmoniert besonders gut mit mediterranen Bepflanzungen.',
  6: 'Muschelkalk-Bruchstein mit natürlicher Bruchkante – verleiht Trockenmauern, Hochbeeten und Garteneingrenzungen einen traditionellen, ländlichen Charme.',
  7: 'Muschelkalk als Randstein oder Einfassung – die dezente Beige-Grau-Tönung passt zu nahezu jeder Gartengestaltung und lässt Grünflächen besonders leuchten.',
  8: 'Muschelkalk in Stelen- oder Pfeilerform – ein gestalterisches Highlight als Sichtschutz, Wegmarkierung oder skulpturales Element.',
  9: 'Muschelkalk als dekorative Abdeckplatte – schützt Mauerkronen vor Witterung und rundet das Gesamtbild von Muschelkalk-Mauern stilvoll ab.',
};

export const getMuschelkalkProducts = (productGroupId?: string): Product[] | null => {
  if (productGroupId === 'mauersteine') {
    const products: Product[] = [];
    const count = 9;
    for (let i = 1; i <= count; i++) {
      products.push({
        name: 'Muschelkalk Mauerstein',
        description: muschelkalkDescriptions[i] || 'Muschelkalk – heller Naturstein mit fossilen Einschlüssen für zeitlose Außengestaltungen.',
        meta: 'Elegant, zeitlos, fossilienreich',
        image: {
          id: `muschelkalk-${i}`,
          description: 'Muschelkalk Mauerstein',
          imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Muschelkalk/${i}.jpg`,
          imageHint: 'shell limestone wall stone',
        },
      });
    }
    return products;
  }

  return null;
};
