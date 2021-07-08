import React from 'react';
import { Modes } from './utils/config';
import {
  TOGGLE_MENU,
  INIT_CATEGORIES,
  TOGGLE_MODE,
  START_GAME,
  PLAY_WORD,
  CHOOSE_WORD,
  WORD_GUESSED,
  WORD_NOT_GUESSED,
  STOP_GAME,
} from './redux/action-constants';

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
  playAudioOnClick: (event: React.MouseEvent) => void;
};

export type CategoryCardProps = {
  name: string;
  preview: string;
};

export type StartButtonProps = {
  wordsAudioSrc: string[];
};
export type GameStarsProps = {
  mistakes: [];
  guesses: [];
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
  words: string[];
  currentWord: string | null;
  guessedWords: string[];
  mistakenWords: string[];
};

export interface IMenuAction {
  type: typeof TOGGLE_MENU;
}

export interface ICategoriesAction {
  type: typeof INIT_CATEGORIES;
}

export interface IModeAction {
  type: typeof TOGGLE_MODE;
}

export interface IStartGame {
  type: typeof START_GAME;
  wordsAudioSrc: string[];
}
export interface IStopGame {
  type: typeof STOP_GAME;
}
export interface IPlayWord {
  type: typeof PLAY_WORD;
  currentWord: string;
}
export interface IChooseWord {
  type: typeof CHOOSE_WORD;
  currentWord: string;
}
export interface IWordGuessed {
  type: typeof WORD_GUESSED;
  guessedWord: string;
}
export interface IWordNotGuessed {
  type: typeof WORD_NOT_GUESSED;
  mistakenWord: string;
}

export type GameActionType = IStartGame | IStopGame | IPlayWord | IChooseWord | IWordGuessed | IWordNotGuessed;
