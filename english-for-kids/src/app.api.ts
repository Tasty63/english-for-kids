import React from 'react';
import { Modes, GameResults } from './utils/config';
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
  LOSE_GAME,
  WIN_GAME,
  TRAIN_CLICK,
  INIT_STATISTIC,
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

export type StatisticTableWord = {
  id: string;
  category: string;
  word: string;
  translation: string;
  trainClicks?: number;
  guesses?: number;
  mistakes?: number;
};

export type StatisticWord = {
  id: string;
  trainClicks: number;
  guesses: number;
  mistakes: number;
};

export type GameWord = {
  word: string;
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

export type PopUpProps = {
  gameResult: GameResults;
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
  guessedWords: GameWord[];
  mistakenWords: GameWord[];
  result: GameResults | null;
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
  id: string;
}

export interface IWordNotGuessed {
  type: typeof WORD_NOT_GUESSED;
  mistakenWord: string;
  id: string;
}

export interface IWinGame {
  type: typeof WIN_GAME;
}

export interface ILoseGame {
  type: typeof LOSE_GAME;
}

export interface ITrainClick {
  type: typeof TRAIN_CLICK;
  id: string;
}
export interface IInitStatistics {
  type: typeof INIT_STATISTIC;
  list: StatisticWord[];
}

export type GameActionType =
  | IStartGame
  | IStopGame
  | IPlayWord
  | IChooseWord
  | IWordGuessed
  | IWordNotGuessed
  | ILoseGame
  | IWinGame;

export type StatisticsActionType = IInitStatistics | ITrainClick;
