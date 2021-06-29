import { TOGGLE_MENU } from './redux/action-constants';
export type CardCategoryProps = {
  categories: Category[];
};

export type Category = {
  id: string;
  name: string;
  image: string;
  words: Word[];
};

export type Word = {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
};

export enum CategoryNames {
  ActionSetA = 'Action (set A)',
  ActionSetB = 'Action (set B)',
  AnimalSetA = 'Animal (set A)',
  AnimalSetB = 'Animal (set B)',
  Clothes = 'Clothes',
  Emotions = 'Emotions',
}

export type MenuState = {
  isOpen: boolean;
};

export interface IMenuAction {
  type: typeof TOGGLE_MENU;
}
