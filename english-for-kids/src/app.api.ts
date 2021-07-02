import React from 'react';
import { TOGGLE_MENU, INIT_CATEGORIES, TOGGLE_MODE } from './redux/action-constants';

export type Category = {
  id: string;
  name: string;
  preview: string;
  words: WordData[];
};

export type WordData = {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
};

export type WordCardProps = {
  word: string;
  image: string;
  translation: string;
  flip: ({ target }: React.MouseEvent) => void;
  playPronunciation: ({ target }: React.MouseEvent) => void;
};

export type RouteParams = {
  name: string;
};

// export enum CategoryNames {
//   ActionSetA = 'Action (set A)',
//   ActionSetB = 'Action (set B)',
//   AnimalSetA = 'Animal (set A)',
//   AnimalSetB = 'Animal (set B)',
//   Clothes = 'Clothes',
//   Emotions = 'Emotions',
// }

export enum Modes {
  Train = 'Train',
  Play = 'Play',
}

export type MenuState = {
  isOpen: boolean;
};
export type CategoriesState = {
  list: Category[];
};
export type ModeState = {
  current: Modes;
};

export interface IMenuAction {
  type: typeof TOGGLE_MENU;
  target: EventTarget;
}
export interface ICategoriesAction {
  type: typeof INIT_CATEGORIES;
}
export interface IModeAction {
  type: typeof TOGGLE_MODE;
}
