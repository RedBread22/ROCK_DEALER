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
      { id: 'basalt', name: 'Basalt' },
      { id: 'tuff', name: 'Grauer Gneis' },
      { id: 'muschelkalk', name: 'Muschelkalk' },
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
      betonplatten: 'Großformatige Betonplatten für moderne, ruhige Terrassen- und Weggestaltungen.',
      mauersteine: 'System-Mauersteine aus Beton für stabile und ästhetische Gartenmauern und Abgrenzungen.',
      palisaden: 'Beton-Palisaden zum Abfangen von Hängen, als Einfassung oder zur dekorativen Gliederung.',
      pflastersteine: 'Vielseitige Pflastersteine aus Beton für moderne Wege, Einfahrten und Plätze.',
      randleisten: 'Saubere und stabile Kantenabschlüsse für Beete und Pflasterflächen mit Beton-Randleisten.',
  },
  zierkies: {
      rundkorn: 'Natürlich gerundeter Zierkies für pflegeleichte Flächen, Wege und dekorative Akzente.',
      kantkorn: 'Gebrochener Ziersplitt für stabile, wasserdurchlässige Flächen und moderne Gartengestaltung.',
  },
  gartendeko: {
      herz: 'Dekorative Herzen aus Naturstein als liebevolles und beständiges Symbol in Ihrem Garten.',
      figuren: 'Handgefertigte Figuren aus Stein – einzigartige Kunstwerke und Blickfänge für den Außenbereich.',
      findlinge: 'Charakterstarke Findlinge und Solitärsteine als natürliche Gestaltungenelemente.',
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
    'stainzer-gneis': '/images/UNSERE-PRODUKTE/Natursteine/Stainzer Gneis/1.jpg',
    travertin: '/images/UNSERE-PRODUKTE/Natursteine/Travertin/1.jpg',
    tuff: '/images/UNSERE-PRODUKTE/Natursteine/Tuff/6.jpg',
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
        id: 'allgemein',
        name: 'Allgemein',
        description: 'Allgemeine Ansichten und Anwendungsbeispiele von Luserna Gneis.',
        image: {
            id: 'luserna-gneis-allgemein-preview',
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Allgemein/6.jpg'),
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
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Luserna Gneis/Gemischt/19.jpg'),
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
];

export const travertinSubCategoriesData: SubCategory[] = [
    {
        id: 'travertin-noce',
        name: 'Travertin Noce',
        description: 'Warmer Travertin mit dunklem, nussbraunem Farbton – ideal für mediterrane Terrassen und Außenflächen.',
        image: {
            id: 'travertin-noce-preview',
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Noce 2.jpg'),
            description: 'Travertin Noce',
            imageHint: 'travertine noce',
        },
    },
    {
        id: 'travertin-vanilla',
        name: 'Travertin Vanilla',
        description: 'Heller, cremefarbener Travertin für elegante und zeitlose Außengestaltungen.',
        image: {
            id: 'travertin-vanilla-preview',
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Vanilla 1.AVIF'),
            description: 'Travertin Vanilla',
            imageHint: 'travertine vanilla',
        },
    },
    {
        id: 'travertin-mix',
        name: 'Travertin Mix',
        description: 'Vielseitige Travertin-Mischung mit natürlichen Farbnuancen für lebendige Flächen.',
        image: {
            id: 'travertin-mix-preview',
            imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Mix 1.AVIF'),
            description: 'Travertin Mix',
            imageHint: 'travertine mix',
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

export const getTravertinSubCategoryById = (id: string) => {
    return travertinSubCategoriesData.find((cat) => cat.id === id);
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

  if (subCategoryId === 'kantkorn') {
    return kantkornProducts.map((p, i) => ({
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
  findlinge: { count: 13, path: '/images/5. Gartendeko/3. Findlinge', name: 'Findling' },
  brunnen: { count: 4, path: '/images/5. Gartendeko/5. Brunnen', name: 'Brunnen' },
  'tische-baenke': { count: 3, path: '/images/5. Gartendeko/6. TischeBanke', name: 'Tisch / Bank' },
  blumentrog: { count: 8, path: '/images/5. Gartendeko/7. Blumentrog', name: 'Blumentrog' },
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
    1: 'Tierfigur aus massivem Naturstein – ein handwerklich gearbeiteter Blickfang, der Gärten und Eingangsbereichen eine besondere Atmosphäre verleiht.',
    2: 'Steinerne Gartenfigur mit detailreicher Gestaltung – wetterfest und standsicher als dauerhafte Bereicherung für jede Gartenanlage.',
    3: 'Skulpturale Naturstein-Figur in kompakter Form – vereint künstlerischen Ausdruck mit der Beständigkeit echten Steins.',
  },
  findlinge: {
    1: 'Mächtiger Findling mit natürlich abgerundeter Form – als Solitärstein ein imposanter Blickfang in großzügigen Gartenanlagen.',
    2: 'Findling mit moosfreundlicher, poröser Oberfläche – entwickelt im Laufe der Zeit eine lebendige, natürliche Patina.',
    3: 'Mittelgroßer Findling in warmem Erdton – ideal als Akzentstein neben Teichen, Wegen oder in Steingärten.',
    4: 'Flacher Findling als dekorativer Trittstein oder Sitzgelegenheit – die glatte Oberseite lädt zum Verweilen ein.',
    5: 'Markanter Findling mit auffälliger Gesteinsmaserung – ein natürliches Kunstwerk, geformt durch Jahrtausende geologischer Prozesse.',
    6: 'Kompakter Findling als Wegbegrenzung oder Beetakzent – dezent und zugleich unverwechselbar durch seine einzigartige Form.',
    7: 'Großer Solitärfindling mit rustikaler Oberfläche – dominiert Vorgärten und Grünflächen als natürlicher Gestaltungsmittelpunkt.',
    8: 'Findling in heller Färbung mit kristallinen Einschlüssen – reflektiert das Licht und setzt funkelnde Akzente im Garten.',
    9: 'Kantiger Findling mit schroffer Bruchkante – bringt alpine Wildheit in die Gartengestaltung und eignet sich als Hangabstützung.',
    10: 'Rundlicher Findling in dunklem Grau – passt zu modernen Gartenkonzepten und bildet einen ruhigen Kontrast zu Pflanzen.',
    11: 'Findling mit Quarzadern und lebhafter Zeichnung – ein geologisches Schmuckstück für anspruchsvolle Garten- und Parkgestaltungen.',
    12: 'Flacher, plattenförmiger Findling – vielseitig einsetzbar als Trittstufe, Brückenplatte oder dekorativer Bodenakzent.',
    13: 'Massiver Findling in beeindruckender Größe – ein naturbelassenes Highlight, das Gärten Charakter und Tiefe verleiht.',
  },
  brunnen: {
    1: 'Gartenbrunnen aus massivem Naturstein mit beruhigendem Wasserfluss – schafft eine entspannende Atmosphäre und dient als akustischer Ruhepol.',
    2: 'Steinbrunnen in klassischer Säulenform – das plätschernde Wasser belebt Innenhöfe, Terrassen und repräsentative Gartenbereiche.',
    3: 'Naturstein-Brunnen mit rustikaler Oberfläche – die Kombination aus Stein und Wasser erzeugt ein natürliches, meditatives Ambiente.',
    4: 'Kompakter Quellstein-Brunnen für kleinere Gärten und Eingangsbereiche – pflegeleicht und ganzjährig ein dekoratives Element.',
  },
  'tische-baenke': {
    1: 'Massive Naturstein-Sitzgarnitur für den Garten – trotzt Wind und Wetter und bietet dauerhaft einen einladenden Sitzplatz im Freien.',
    2: 'Steinbank mit geschliffener Sitzfläche – verbindet Komfort mit Beständigkeit und fügt sich harmonisch in jede Gartenanlage ein.',
    3: 'Naturstein-Tisch in robuster Ausführung – ein Treffpunkt im Garten, der über Generationen Bestand hat.',
  },
  blumentrog: {
    1: 'Massiver Blumentrog aus Naturstein mit großem Pflanzvolumen – ein repräsentatives Gefäß für Stauden, Sträucher oder saisonale Bepflanzungen.',
    2: 'Naturstein-Blumentrog in länglicher Form – ideal als Raumteiler auf Terrassen oder zur Begrünung von Einfahrten und Innenhöfen.',
    3: 'Rustikaler Steintrog mit verwitterter Oberfläche – der antike Charme macht ihn zum Blickfang in ländlichen und romantischen Gärten.',
    4: 'Kompakter Blumentrog für Kräuter und kleine Zierpflanzen – die natürliche Steinoptik wertet Balkone und Eingangsbereiche stilvoll auf.',
    5: 'Großer Naturstein-Pflanztrog als Solitärelement – die schwere, solide Bauweise garantiert Standfestigkeit auch bei starkem Wind.',
    6: 'Blumentrog mit leicht konischer Form und glatter Außenfläche – modern und zeitlos zugleich, passend zu jeder Gartenarchitektur.',
    7: 'Steintrog in quadratischer Form – eignet sich als symmetrisches Gestaltungselement zu beiden Seiten eines Eingangs oder Gartenwegs.',
    8: 'Flacher, breiter Naturstein-Trog für flächige Bepflanzungen – bringt Grün auf Augenhöhe und strukturiert Außenbereiche elegant.',
  },
  vasen: {
    1: 'Steinvase in klassischer Amphoren-Form – ein dekorativer Akzent für Eingangsbereiche, Terrassen und repräsentative Gartenanlagen.',
    2: 'Naturstein-Vase mit schlanker Silhouette – die schlichte Eleganz aus massivem Stein setzt Blumen und Trockensträuße gekonnt in Szene.',
    3: 'Rustikale Steinvase mit natürlicher Patina – verleiht Gärten und Innenhöfen einen Hauch von Antike und Beständigkeit.',
    4: 'Kompakte Ziervase aus poliertem Naturstein – wetterfest und standsicher als ganzjähriges Dekoelement im Außenbereich.',
  },
};

export const getGartendekoProducts = (subCategoryId: string): Product[] | null => {
  const imageInfo = gartendekoImageCounts[subCategoryId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const subcatDescriptions = gartendekoDescriptions[subCategoryId] || {};
  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = encodeImagePath(`${imageInfo.path}/${i}.jpg`);
    products.push({
      name: `${imageInfo.name} ${i}`,
      description: subcatDescriptions[i] || 'Einzigartiges Deko-Element aus Naturstein – jedes Stück ein handverlesenes Unikat, bei dem Abmessungen, Farbe und Form natürlich variieren.',
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
  pflastersteine: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Pflastersteine', name: 'Pflasterstein' },
  randleisten: { count: 2, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Randleisten', name: 'Randleiste' },
  granitplatte: { count: 4, path: '/images/UNSERE-PRODUKTE/Natursteine/Granit/Granitplatte', name: 'Granitplatte' },
};

const granitDescriptions: Record<string, string> = {
  blockstufen: 'Massiv geschnittene Granit-Blockstufe mit gespaltener oder gesägter Oberfläche – trittsicher, frostbeständig und prädestiniert für Eingangstreppen, Gartenstufen und Hangbefestigungen.',
  pflastersteine: 'Granit-Pflasterstein in klassischer Würfelform – extrem druckfest und unverwüstlich, bestens geeignet für Einfahrten, Höfe und repräsentative Platzgestaltungen.',
  randleisten: 'Granitrandleiste als sauberer Abschluss für Pflasterflächen und Beeteinfassungen – formstabil, frostfest und in verschiedenen Längen verfügbar.',
  granitplatte: 'Großformatige Granitplatte mit gleichmäßiger Oberfläche – ideal für Terrassen, Gehwege und Außenbereiche, die eine ruhige, elegante Flächenwirkung erfordern.',
};

export const getGranitProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = granitImageCounts[productGroupId];
  if (!imageInfo || imageInfo.count === 0) {
    return null;
  }

  const products: Product[] = [];

  if (productGroupId === 'blockstufen') {
    // Skip images 5 and 7; rename images 2, 3, 6 to "Blockstufe Luserna Gneis"
    const lusernaImages = new Set([2, 3, 6]);
    const skipImages = new Set([5, 7]);
    for (let i = 1; i <= imageInfo.count; i++) {
      if (skipImages.has(i)) continue;
      const isLuserna = lusernaImages.has(i);
      const displayName = isLuserna ? 'Blockstufe Luserna Gneis' : `${imageInfo.name} ${i}`;
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: displayName,
        description: granitDescriptions.blockstufen,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `${productGroupId}-${i}`,
          description: displayName,
          imageUrl: imageUrl,
          imageHint: isLuserna ? 'luserna gneiss blockstufe' : `granite ${productGroupId.slice(0, -1)}`,
        },
      });
    }
    // Named AVIF images
    for (let i = 1; i <= 2; i++) {
      products.push({
        name: `Granit Blockstufen ${i}`,
        description: granitDescriptions.blockstufen,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `blockstufen-avif-${i}`,
          description: `Granit Blockstufen ${i}`,
          imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Granit/Blockstufen/Granit Blockstufen ${i}.AVIF`),
          imageHint: 'granite steps',
        },
      });
    }
  } else if (productGroupId === 'randleisten') {
    // Numbered images
    for (let i = 1; i <= imageInfo.count; i++) {
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: `${imageInfo.name} ${i}`,
        description: granitDescriptions.randleisten,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `${productGroupId}-${i}`,
          description: `${imageInfo.name} ${i}`,
          imageUrl: imageUrl,
          imageHint: `granite ${productGroupId.slice(0, -1)}`,
        },
      });
    }
    // Named AVIF images
    for (let i = 1; i <= 2; i++) {
      products.push({
        name: `Granit Randleiste ${i}`,
        description: granitDescriptions.randleisten,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `randleisten-avif-${i}`,
          description: `Granit Randleiste ${i}`,
          imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Granit/Randleisten/Granit Randleiste ${i}.AVIF`),
          imageHint: 'granite curbs',
        },
      });
    }
  } else {
    // Standard logic for pflastersteine and granitplatte
    const desc = granitDescriptions[productGroupId] || 'Granit-Naturstein für den Außenbereich – frostfest und vielseitig einsetzbar.';
    for (let i = 1; i <= imageInfo.count; i++) {
      const imageUrl = `${imageInfo.path}/${i}.jpg`;
      products.push({
        name: `${imageInfo.name} ${i}`,
        description: desc,
        meta: 'Granit, frostfest & witterungsbeständig',
        image: {
          id: `${productGroupId}-${i}`,
          description: `${imageInfo.name} ${i}`,
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

export const getSchieferProducts = (productGroupId: string): Product[] | null => {
  const imageInfo = schieferImageCounts[productGroupId];
  if (!imageInfo) {
    return null;
  }

  const desc = schieferDescriptions[productGroupId] || 'Schiefer-Naturstein mit charaktervoller Struktur – vielseitig einsetzbar im Außenbereich.';
  const products: Product[] = [];
  for (let i = 1; i <= imageInfo.count; i++) {
    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: `${imageInfo.name} ${i}`,
      description: desc,
      meta: 'Schiefer, frostfest & witterungsbeständig',
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

const lusernaGneisDescriptions: Record<string, string> = {
  allgemein: 'Luserna Gneis in seiner ganzen Vielfalt – ein grün-grauer Naturstein mit feiner Schieferung, der sich durch seine Frostbeständigkeit und natürliche Eleganz für nahezu jede Außengestaltung eignet.',
  gemischt: 'Verschiedene Formate und Anwendungen von Luserna Gneis – die lebendige Farbgebung von Silbergrau bis Olivgrün macht jeden Stein zu einem Unikat.',
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

  const desc = lusernaGneisDescriptions[productGroupId] || 'Luserna Gneis – ein vielseitiger Naturstein mit grün-grauer Farbgebung für anspruchsvolle Außenprojekte.';
  const products: Product[] = [];
  let displayCounter = 1;
  for (let i = 1; i <= imageInfo.count; i++) {
    // Skip deleted images
    if (productGroupId === 'gemischt' && i >= 7 && i <= 9) continue;
    if (productGroupId === 'mauersteine' && i === 9) continue;

    const imageUrl = encodeImagePath(`${imageInfo.path}/${i}.jpg`);
    products.push({
      name: `${imageInfo.name} ${displayCounter++}`,
      description: desc,
      meta: 'Luserna Gneis, frostfest & witterungsbeständig',
      image: {
        id: `luserna-${productGroupId}-${i}`,
        description: `${imageInfo.name} ${displayCounter - 1}`,
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
  let displayCounter = 1;
  for (let i = 1; i <= imageInfo.count; i++) {
    // Skip index 3 for Randleisten
    if (subCategoryId === 'randleisten' && i === 3) continue;
    // Skip index 4 for Betonplatten
    if (subCategoryId === 'betonplatten' && i === 4) continue;

    const imageUrl = `${imageInfo.path}/${i}.jpg`;
    products.push({
      name: `${imageInfo.name} ${displayCounter++}`,
      description: betonsteineDescriptions[subCategoryId] || 'Betonstein für den Außenbereich – frostfest und vielseitig einsetzbar.',
      meta: 'Betonstein, frostfest & langlebig',
      image: {
        id: `betonsteine-${subCategoryId}-${i}`,
        description: `${imageInfo.name} ${displayCounter - 1}`,
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
      name: `Stainzer Gneis Variante ${i}`,
      description: stainzerGneisDescriptions[i] || 'Regionaler Gneis-Naturstein mit lebendiger Struktur – robust und vielseitig für den Außenbereich.',
      meta: 'Regionaler Naturstein, robust & witterungsbeständig',
      image: {
        id: `stainzer-gneis-${i}`,
        description: `Stainzer Gneis Variante ${i}`,
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
      name: `Brasil. Quarzit Variante ${i}`,
      description: brasilQuarzitDescriptions[i] || 'Brasil Quarzit – extrem hart, edel und widerstandsfähig für anspruchsvolle Außenprojekte.',
      meta: 'Extrem widerstandsfähig, frostfest',
      image: {
        id: `brasil-quarzit-${i}`,
        description: `Brasil. Quarzit Variante ${i}`,
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

export const getTravertinProducts = (productGroupId?: string): Product[] | null => {
  if (!productGroupId) {
    return [
      {
        name: 'Travertin',
        description: 'Travertin-Platte mit offenporiger Oberfläche und warmem Beigeton – der Klassiker für mediterrane Terrassen, Poolbereiche und sonnige Sitzplätze.',
        meta: 'Frostfest & witterungsbeständig',
        image: {
          id: 'travertin-allgemein-1',
          description: 'Travertin',
          imageUrl: '/images/UNSERE-PRODUKTE/Natursteine/Travertin/1.jpg',
          imageHint: 'travertine tile'
        }
      },
      {
        name: 'Travertin Flamingo',
        description: 'Travertin Flamingo mit zartem Rosa-Schimmer und charakteristischer Porenstruktur – verleiht Terrassen und Außenflächen einen unverwechselbar warmen, südländischen Akzent.',
        meta: 'Frostfest & witterungsbeständig',
        image: {
          id: 'travertin-flamingo-1',
          description: 'Travertin Flamingo',
          imageUrl: encodeImagePath('/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Flamingo 1.AVIF'),
          imageHint: 'travertine flamingo stone'
        }
      },
    ];
  }

  if (productGroupId === 'travertin-noce') {
    return Array.from({ length: 4 }, (_, i) => ({
      name: `Travertin Noce ${i + 1}`,
      description: 'Travertin Noce mit satter, nussbrauner Färbung und markanter Porenstruktur – bringt Wärme und mediterranen Charakter auf Terrassen, in Eingangsbereiche und rund um Poolanlagen.',
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: `travertin-noce-${i + 1}`,
        description: `Travertin Noce ${i + 1}`,
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Noce ${i + 1}.jpg`),
        imageHint: 'travertine noce stone',
      },
    }));
  }

  if (productGroupId === 'travertin-vanilla') {
    return Array.from({ length: 3 }, (_, i) => ({
      name: `Travertin Vanilla ${i + 1}`,
      description: 'Travertin Vanilla in hellem Cremeton mit feiner, gleichmäßiger Struktur – wirkt zurückhaltend elegant und passt zu klassischen wie modernen Gartenarchitekturen.',
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: `travertin-vanilla-${i + 1}`,
        description: `Travertin Vanilla ${i + 1}`,
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Vanilla ${i + 1}.AVIF`),
        imageHint: 'travertine vanilla stone',
      },
    }));
  }

  if (productGroupId === 'travertin-mix') {
    return Array.from({ length: 5 }, (_, i) => ({
      name: `Travertin Mix ${i + 1}`,
      description: 'Travertin Mix aus verschiedenen Farbnuancen von Beige über Creme bis Braun – die natürliche Farbvielfalt erzeugt ein lebendiges, abwechslungsreiches Flächenbild.',
      meta: 'Frostfest & witterungsbeständig',
      image: {
        id: `travertin-mix-${i + 1}`,
        description: `Travertin Mix ${i + 1}`,
        imageUrl: encodeImagePath(`/images/UNSERE-PRODUKTE/Natursteine/Travertin/Travertin Mix ${i + 1}.AVIF`),
        imageHint: 'travertine mix stone',
      },
    }));
  }

  return null;
};

const tuffDescriptions: Record<number, string> = {
  1: 'Grauer Gneis als Mauerstein mit silbrig-grauer Oberfläche – verleiht Gartenmauern und Einfassungen eine ruhige, natürliche Ausstrahlung.',
  2: 'Grauer Gneis in Plattenform mit dezenter Schichtung – gut geeignet als Wegebelag oder Terrassenplatte in zurückhaltend-elegantem Design.',
  3: 'Grauer Gneis als Bruchstein mit lebendiger Textur – vielseitig verwendbar für Trockenmauern, Steingärten und rustikale Gestaltungselemente.',
  4: 'Grauer Gneis als Stufenplatte – die spaltraue Oberfläche bietet natürlichen Halt und fügt sich harmonisch in naturnahe Gartenkonzepte ein.',
  5: 'Grauer Gneis in Quaderform – eignet sich für präzise Mauerwerke und architektonisch klare Gartenstrukturen mit regionalem Charakter.',
  6: 'Grauer Gneis als dekorativer Solitärstein – die wechselnden Grautöne und die natürliche Patina machen ihn zum Blickfang in jeder Gartenanlage.',
};

export const getTuffProducts = (): Product[] => {
  const products: Product[] = [];
  const count = 6;
  for (let i = 1; i <= count; i++) {
    products.push({
      name: `Grauer Gneis Variante ${i}`,
      description: tuffDescriptions[i] || 'Grauer Gneis – ein dezenter Naturstein mit warmen Grautönen für vielseitige Außengestaltungen.',
      meta: 'Natürlich, dezent, vielseitig',
      image: {
        id: `tuff-${i}`,
        description: `Grauer Gneis Variante ${i}`,
        imageUrl: `/images/UNSERE-PRODUKTE/Natursteine/Tuff/${i}.jpg`,
        imageHint: 'grey gneiss stone',
      },
    });
  }
  return products;
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
      name: `Porphyr Variante ${i}`,
      description: porphyrDescriptions[i] || 'Porphyr – äußerst robuster, rutschfester Naturstein für stark beanspruchte Außenflächen.',
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

export const getMuschelkalkProducts = (): Product[] => {
  const products: Product[] = [];
  const count = 9;
  for (let i = 1; i <= count; i++) {
    products.push({
      name: `Muschelkalk Variante ${i}`,
      description: muschelkalkDescriptions[i] || 'Muschelkalk – heller Naturstein mit fossilen Einschlüssen für zeitlose Außengestaltungen.',
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
