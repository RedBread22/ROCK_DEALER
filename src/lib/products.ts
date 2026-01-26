import { type ImagePlaceholder, PlaceHolderImages } from './placeholder-images';

export type Product = {
  name: string;
  description: string;
  image: ImagePlaceholder;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  products: Product[];
};

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const productCategories: ProductCategory[] = [
  {
    id: 'kies-zierkies',
    name: 'Kies & Zierkies',
    description: 'Vielseitige und robuste Kiese für Wege, Beete und dekorative Flächen.',
    products: [
      {
        name: 'Flusskies',
        description:
          'Unser Flusskies ist ein vielseitiger Naturbaustoff, der durch seine abgerundeten Formen und seine natürliche Farbgebung besticht. Er eignet sich hervorragend für die Gestaltung von Wegen, Beeten und als Untergrund für Terrassen. Flusskies ist nicht nur optisch ansprechend, sondern auch äußerst robust und langlebig.',
        image: findImage('kies-1'),
      },
      {
        name: 'Marmor-Zierkies',
        description:
          'Marmor-Zierkies ist ein edler Naturstein, der durch seine glatte Oberfläche, seine vielfältigen Farben und seine Langlebigkeit besticht. Er verleiht Ihrem Garten eine luxuriöse Note und ist eine beliebte Wahl für anspruchsvolle Gartenbesitzer. Erhältlich in 25kg PE-Sack, 500kg Medium Bag oder 1000kg Big-Bag.',
        image: findImage('kies-2'),
      },
      {
        name: 'Diskus Granitziegel',
        description:
          'Diskus-Granitziegel sind eine besonders elegante und langlebige Variante der klassischen Granitziegel. Ihre runde Form erinnert an eine Diskus-Scheibe und verleiht jedem Garten oder jeder Terrasse einen modernen und zugleich natürlichen Touch. Granit hat besonders Schmutzabweisende Eigenschaften, daher ist die Reinigung sehr leicht.',
        image: findImage('kies-3'),
      },
    ],
  },
  {
    id: 'bruchstein',
    name: 'Bruchstein',
    description: 'Charakterstarke Bruchsteine für Mauern, Gabionen und markante Gartenelemente.',
    products: [
      {
        name: 'MARMORBRUCH, Verona-rot',
        description:
          'Mit dem Marmorbruch Verona Rot holen Sie sich ein Stück mediterrane Lebensfreude in Ihren Garten. Das kräftige Rot sorgt für einen warmen und lebendigen Eindruck und verleiht Ihrem Garten eine besondere Ausstrahlung. Perfekt für Terrassen, Sitzplätze oder als Blickfang in großen Gärten.',
        image: findImage('bruch-1'),
      },
      {
        name: 'MARMORBRUCH, Rosé-bunt',
        description:
          'Der Marmorbruch Rosé-Bunt verleiht Ihrem Garten eine zarte, romantische Note. Die sanften Rosétöne, durchzogen von feinen Adern in verschiedenen Nuancen, schaffen eine warme und einladende Atmosphäre. Ob als Wegbelag, Beeteinfassung oder Füllung für Gabionen – dieser Marmorbruch ist ein echter Blickfang und setzt elegante Akzente.',
        image: findImage('bruch-2'),
      },
      {
        name: 'MARMORBRUCH, Anthrazit-weiß',
        description:
          'Der Marmorbruch Anthrazit-Weiß ist die perfekte Wahl für einen modernen und zeitlosen Garten. Das Zusammenspiel von dunklem Anthrazit und hellem Weiß erzeugt einen spannenden Kontrast und verleiht Ihrem Garten eine klare Struktur. Ideal für minimalistische Gestaltungskonzepte und als Kontrast zu üppiger Bepflanzung.',
        image: findImage('bruch-3'),
      },
    ],
  },
  {
    id: 'naturstein-platten',
    name: 'Naturstein-Platten',
    description: 'Hochwertige Platten für Terrassen, Wege und stilvolle Außenbereiche.',
    products: [
      {
        name: 'Natursteinplatte Grau',
        description: 'Platzhalterbeschreibung – Details folgen in Kürze.',
        image: findImage('naturstein-1'),
      },
      {
        name: 'Natursteinplatte Beige',
        description: 'Platzhalterbeschreibung – Details folgen in Kürze.',
        image: findImage('naturstein-2'),
      },
      {
        name: 'Natursteinplatte Dunkel/Grob',
        description: 'Platzhalterbeschreibung – Details folgen in Kürze.',
        image: findImage('naturstein-3'),
      },
      {
        name: 'Gold-Gneis',
        description: 'Platzhalterbeschreibung – Details folgen in Kürze.',
        image: findImage('naturstein-4'),
      },
      {
        name: 'Sandstein Modak',
        description: 'Platzhalterbeschreibung – Details folgen in Kürze.',
        image: findImage('naturstein-5'),
      },
      {
        name: 'Südtiroler Porphyr',
        description: 'Platzhalterbeschreibung – Details folgen in Kürze.',
        image: findImage('naturstein-6'),
      },
    ],
  },
];
