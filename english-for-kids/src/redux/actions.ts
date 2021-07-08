import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import { IMenuAction, ICategoriesAction, IModeAction, GameActionType } from '../app.api';
import {
  TOGGLE_MENU,
  INIT_CATEGORIES,
  TOGGLE_MODE,
  START_GAME,
  PLAY_WORD,
  WORD_GUESSED,
  WORD_NOT_GUESSED,
  STOP_GAME,
} from './action-constants';
import { Sounds, wordPronounceDelayMs } from '../utils/config';
import { playAudio } from '../utils/helpers';

export const toggleMenu = (): ThunkAction<void, RootState, unknown, IMenuAction> => async dispatch => {
  dispatch({ type: TOGGLE_MENU });
};

export const initCategories = (): ThunkAction<void, RootState, unknown, ICategoriesAction> => async dispatch => {
  dispatch({ type: INIT_CATEGORIES });
};

export const toggleMode = (): IModeAction => ({ type: TOGGLE_MODE });

export const playWord = (): ThunkAction<void, RootState, unknown, GameActionType> => async (dispatch, getState) => {
  const words = getState().game.words.slice();

  if (words.length === 0) {
    return;
  }

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
  (guessedWordSrc: string): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    playAudio(Sounds.Correct);
    dispatch({ type: WORD_GUESSED, guessedWordSrc });
  };

export const notGuessedWord = (): ThunkAction<void, RootState, unknown, GameActionType> => async dispatch => {
  playAudio(Sounds.Error);
  dispatch({ type: WORD_NOT_GUESSED });
};

export const chooseWord =
  (wordAudioSrc: string): ThunkAction<void, RootState, unknown, GameActionType> =>
  async (dispatch, getState) => {
    const currentWordAudioSrc = getState().game.currentWord;

    if (currentWordAudioSrc === wordAudioSrc) {
      dispatch(guessedWord(wordAudioSrc));
      dispatch(playWord());
    } else {
      dispatch(notGuessedWord());
    }
  };
