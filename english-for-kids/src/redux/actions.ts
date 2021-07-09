import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import {
  IMenuAction,
  ICategoriesAction,
  IModeAction,
  GameActionType,
  StatisticsActionType,
  StatisticWord,
} from '../app.api';
import {
  TOGGLE_MENU,
  INIT_CATEGORIES,
  TOGGLE_MODE,
  START_GAME,
  PLAY_WORD,
  WORD_GUESSED,
  WORD_NOT_GUESSED,
  STOP_GAME,
  INIT_STATISTIC,
  TRAIN_CLICK,
  END_GAME,
} from './action-constants';
import { GameResults, Sounds, wordPronounceDelayMs } from '../utils/config';
import { playAudio } from '../utils/helpers';

export const toggleMenu = (): ThunkAction<void, RootState, unknown, IMenuAction> => async dispatch => {
  dispatch({ type: TOGGLE_MENU });
};

export const initCategories = (): ThunkAction<void, RootState, unknown, ICategoriesAction> => async dispatch => {
  dispatch({ type: INIT_CATEGORIES });
};

export const toggleMode = (): IModeAction => ({ type: TOGGLE_MODE });

export const endGame =
  (result: GameResults): ThunkAction<void, RootState, unknown, GameActionType> =>
  async (dispatch, getState) => {
    dispatch({ type: END_GAME, result });
  };

export const playWord = (): ThunkAction<void, RootState, unknown, GameActionType> => async (dispatch, getState) => {
  const words = getState().game.words.slice();
  const lastWordIndex = words.length - 1;
  const currentWord = words[lastWordIndex];

  setTimeout(() => {
    playAudio(currentWord);
    dispatch({ type: PLAY_WORD, currentWord });
  }, wordPronounceDelayMs);
};

export const startGame =
  (wordsAudioSrc: string[]): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    dispatch({ type: START_GAME, wordsAudioSrc });
    dispatch(playWord());
  };

export const stopGame = (): GameActionType => {
  return { type: STOP_GAME };
};

export const guessedWord =
  (word: string, id: string): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    playAudio(Sounds.Correct);
    dispatch({ type: WORD_GUESSED, guessedWord: word, id });
  };

export const notGuessedWord =
  (word: string, id: string): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    playAudio(Sounds.Error);
    dispatch({ type: WORD_NOT_GUESSED, mistakenWord: word, id });
  };

export const chooseWord =
  (word: string, id: string): ThunkAction<void, RootState, unknown, GameActionType> =>
  async (dispatch, getState) => {
    const { currentWord } = getState().game;
    const mistakesAmount = getState().game.mistakenWords.length;
    const words = getState().game.words.slice();

    if (currentWord !== word) {
      dispatch(notGuessedWord(word, id));
      return;
    }
    dispatch(guessedWord(word, id));

    if (words.length) {
      dispatch(playWord());
      return;
    }

    if (mistakesAmount) {
      dispatch(endGame(GameResults.Lose));
      playAudio(Sounds.Failure);
      return;
    }
    dispatch(endGame(GameResults.Win));
    playAudio(Sounds.Success);
  };

export const initStatistics = (): ThunkAction<void, RootState, unknown, StatisticsActionType> => async dispatch => {
  let list: StatisticWord[];
  const localStorageStatistics = localStorage.getItem('tasty63-statistics');
  if (localStorageStatistics) {
    list = JSON.parse(localStorageStatistics);
  } else {
    const result = await fetch('/card-statistics.json');
    list = await result.json();
  }

  dispatch({ type: INIT_STATISTIC, list });
};

export const trainClick =
  (id: string): ThunkAction<void, RootState, unknown, StatisticsActionType> =>
  async dispatch => {
    dispatch({ type: TRAIN_CLICK, id });
  };
