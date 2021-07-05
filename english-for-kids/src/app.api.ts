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
  flip: (event: React.MouseEvent) => void;
  playPronunciation: (event: React.MouseEvent) => void;
};

export type CategoryCardProps = {
  name: string;
  preview: string;
};

export type RouteParams = {
  name: string;
};

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
