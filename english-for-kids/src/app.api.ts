import { Modes, GameResults, SortDirections, SortKeys } from './utils/config';
import {
  TOGGLE_MENU,
  GET_CATEGORIES,
  TOGGLE_MODE,
  START_GAME,
  PLAY_WORD,
  CHOOSE_WORD,
  WORD_GUESSED,
  WORD_NOT_GUESSED,
  STOP_GAME,
  GET_STATISTIC,
  END_GAME,
  UPDATE_DIFFICULT_WORDS,
  TRAIN_CLICK,
  TOGGLE_LOGIN_POPUP,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  LOGOUT,
  INIT_LOGIN,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CLEAR_MESSAGE,
  CREATE_WORD,
  DELETE_WORD,
  UPDATE_WORD,
} from './redux/action-constants';
import { ReactNode } from 'react';

export type Category = {
  _id: string;
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
  trained?: number;
  guesses?: number;
  mistakes?: number;
  accuracy?: number;
};

export type StatisticWord = {
  _id?: string;
  id: string;
  trained: number;
  guesses: number;
  mistakes: number;
};

export type GameWord = {
  audio: string;
  id: string;
  mistakesAmount?: number;
};

export type MistakenWord = {
  audio: string;
  id: string;
  mistakesAmount: number;
};

export type UserData = {
  token: string | null;
  userId: string | null;
};

export type SortConfigType = {
  direction: SortDirections;
  key: SortKeys;
};

export type CategoryCardProps = {
  name: string;
  preview: string;
};

export type AdminCategoryCardProps = {
  name: string;
  wordsAmount: number;
  preview: string;
  id: string;
};

export type CardCategoryFormProps = {
  name?: string;
  initialPreview?: string;
  setEdit: (state: boolean) => void;
  setPreview: (file: string | null) => void;
  previewImage?: string | null;
  handleSubmit: (event: React.FormEvent, categoryName: string, image: Blob | null) => void;
};

export type CardWordFormProps = {
  categoryId?: string;
  name?: string;
  translation?: string;
  setEdit: (state: boolean) => void;
  setPreview: (file: string | null) => void;
  previewImage?: string | null;
  handleSubmit: (
    event: React.FormEvent,
    name: string,
    translation: string,
    image: Blob | null,
    audio: Blob | null,
  ) => void;
};

export type StatisticsProps = {
  requestSort: (key: SortKeys) => void;
  table: StatisticTableWord[];
  tableColumns: SortKeys[];
};

export type StartButtonProps = {
  gameWords: GameWord[] | undefined;
};

export type GameStarsProps = {
  mistakes: [];
  guesses: [];
};

export type GamePopUpProps = {
  gameResult: GameResults;
};

export type UseRouteProps = {
  isAuthenticated: boolean;
};

export type RouteParams = {
  name: string;
};

export type PopUpProps = {
  children: ReactNode;
};

export type LoginFormType = {
  username: string;
  password: string;
};

export type CategoryForm = {
  categoryName: string;
  image: Blob | null;
};

export type CardForm = {
  wordName: string;
  translation: string;
  image: Blob | null;
  audio: Blob | null;
};

export type MenuState = {
  isOpen: boolean;
};

export type LoginState = {
  isPopUpOpened: boolean;
  isLogged: boolean;
  message: string | null;
  userData: UserData;
};

export type CategoriesState = {
  list: Category[];
  difficultWords: WordData[];
};

export type ModeState = {
  current: Modes;
};

export type GameState = {
  isStarted: boolean;
  words: GameWord[];
  currentWord: GameWord | null;
  guessedWords: GameWord[];
  mistakenWords: MistakenWord[];
  result: GameResults | null;
};

export interface IMenuAction {
  type: typeof TOGGLE_MENU;
}

export interface IGetCategories {
  type: typeof GET_CATEGORIES;
  list: Category[];
}

export interface ICreateCategory {
  type: typeof CREATE_CATEGORY;
  list: Category[];
}

export interface IUpdateCategory {
  type: typeof UPDATE_CATEGORY;
  list: Category[];
}

export interface IDeleteCategory {
  type: typeof DELETE_CATEGORY;
  list: Category[];
}

export interface ICreateWord {
  type: typeof CREATE_WORD;
}

export interface IDeleteWord {
  type: typeof DELETE_WORD;
}

export interface IUpdateWord {
  type: typeof UPDATE_WORD;
}

export interface IGetDifficultWords {
  type: typeof UPDATE_DIFFICULT_WORDS;
  difficultWords: WordData[];
}

export interface IModeAction {
  type: typeof TOGGLE_MODE;
}

export interface IStartGame {
  type: typeof START_GAME;
  gameWords: GameWord[];
}

export interface IStopGame {
  type: typeof STOP_GAME;
}

export interface IPlayWord {
  type: typeof PLAY_WORD;
  currentWord: GameWord;
}
export interface IChooseWord {
  type: typeof CHOOSE_WORD;
  currentWord: GameWord;
}

export interface IWordGuessed {
  type: typeof WORD_GUESSED;
  guessedWord: GameWord;
}

export interface IWordNotGuessed {
  type: typeof WORD_NOT_GUESSED;
  mistakenWord: GameWord;
}

export interface IEndGame {
  type: typeof END_GAME;
  result: GameResults;
}

export interface ITrainClick {
  type: typeof TRAIN_CLICK;
  id: string;
}

export interface IGetStatistics {
  type: typeof GET_STATISTIC;
  statistics: StatisticWord[];
}

export interface IToggleLoginPopUp {
  type: typeof TOGGLE_LOGIN_POPUP;
}

export interface ILoginFailed {
  type: typeof LOGIN_FAILED;
  message: string;
}

export interface IClearMessage {
  type: typeof CLEAR_MESSAGE;
}

export interface ILoginSucceed {
  type: typeof LOGIN_SUCCEED;
  userData: UserData;
}
export interface ILogout {
  type: typeof LOGOUT;
}
export interface IInitLogin {
  type: typeof INIT_LOGIN;
  userData: UserData;
}

export type GameActionType =
  | IStartGame
  | IStopGame
  | IPlayWord
  | IChooseWord
  | IWordGuessed
  | IWordNotGuessed
  | IEndGame;

export type StatisticsActionType = IGetStatistics | ITrainClick;
export type CategoriesActionType =
  | IGetCategories
  | IGetDifficultWords
  | ICreateCategory
  | IUpdateCategory
  | IDeleteCategory
  | ICreateWord
  | IDeleteWord
  | IUpdateWord;

export type LoginActionType = IInitLogin | IToggleLoginPopUp | ILoginFailed | IClearMessage | ILoginSucceed | ILogout;
