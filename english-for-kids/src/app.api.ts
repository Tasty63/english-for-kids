import React from 'react';
import { Modes } from './utils/config';
import { TOGGLE_MENU, INIT_CATEGORIES, TOGGLE_MODE, START_GAME, REPEAT_WORD } from './redux/action-constants';

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
  id: string;
};

export type WordCardProps = {
  word: string;
  image: string;
  translation: string;
  id: string;
  playPronunciation: (event: React.MouseEvent) => void;
};

export type CategoryCardProps = {
  name: string;
  preview: string;
};

export type RouteParams = {
  name: string;
};

export type MenuState = {
  isOpen: boolean;
};
export type CategoriesState = {
  list: Category[];
};
export type ModeState = {
  current: Modes;
};
export type GameState = {
  isStarted: boolean;
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

export interface IStartGame {
  type: typeof START_GAME;
}
export interface IRepeatWord {
  type: typeof REPEAT_WORD;
}
export type GameActionType = IStartGame | IRepeatWord;
