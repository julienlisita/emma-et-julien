// src/config/illustrations.ts
// Inventaire des illustrations (source : handoff/assets/MANIFEST.md). Fichiers d'origine, jamais retouchés.

const DIR = '/images/illustrations';

export const ILLUSTRATIONS = {
  parisSeine: {
    src: `${DIR}/01-paris-seine.png`,
    alt: 'Emma, la tête posée contre moi, au bord de la Seine face à Notre-Dame',
  },
  mainsSpitz: {
    src: `${DIR}/02-mains-spitz-matin.jpg`,
    alt: 'Nos mains sur le pelage de notre Spitz, dans la lumière dorée du matin',
  },
  emmaSpitzCuisine: {
    src: `${DIR}/03-emma-spitz-cuisine.webp`,
    alt: 'Emma souriante, serrant notre Spitz dans ses bras',
  },
  oceanJoueContreJoue: {
    src: `${DIR}/04-ocean-joue-contre-joue.jpg`,
    alt: 'Emma et moi, joue contre joue, souriants sur la plage',
  },
  praguVltava: {
    src: `${DIR}/05-prague-vltava.png`,
    alt: 'Emma souriante au bord de la Vltava, à Prague',
  },
  lacPins: {
    src: `${DIR}/06a-lac-pins.png`,
    alt: 'Emma et moi au bord du lac, sous les pins',
  },
  soireeSpitz: {
    src: `${DIR}/06b-soiree-spitz-maison.jpg`,
    alt: 'Emma, notre Spitz et moi, blottis un soir à la maison',
  },
  cafePetitDejeuner: {
    src: `${DIR}/06c-cafe-petit-dejeuner.png`,
    alt: 'Emma souriante à la table d’un café, devant un petit-déjeuner',
  },
  bordeauxRobeBlanche: {
    src: `${DIR}/07-bordeaux-robe-blanche.jpg`,
    alt: 'Emma en robe de dentelle blanche et moi, côte à côte sur une place pavée de Bordeaux',
  },
  bordeauxNuitSpitz: {
    src: `${DIR}/08-bordeaux-nuit-spitz.jpg`,
    alt: 'Emma, notre Spitz et moi, un soir à Bordeaux, réunis dans la lumière du soleil couchant',
  },
  baiserPlaceDeLaBourse: {
    src: `${DIR}/10-baiser-place-de-la-bourse.png`,
    alt: 'Emma et moi nous embrassant sur la place de la Bourse, à Bordeaux',
  },
} as const;

export type IllustrationKey = keyof typeof ILLUSTRATIONS;
