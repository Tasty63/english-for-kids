import { TOGGLE_MENU, INIT_CATEGORIES } from './redux/action-constants';

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
export type CategoriesState = {
  list: Category[];
};

export interface IMenuAction {
  type: typeof TOGGLE_MENU;
}
export interface ICategoriesAction {
  type: typeof INIT_CATEGORIES;
}
