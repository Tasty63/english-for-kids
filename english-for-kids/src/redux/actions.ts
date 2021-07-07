import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import { IMenuAction, ICategoriesAction, IModeAction, GameActionType } from '../app.api';
import {
  TOGGLE_MENU,
  INIT_CATEGORIES,
  TOGGLE_MODE,
  START_GAME,
  REPEAT_WORD,
  PLAY_WORD,
  CHOOSE_WORD,
} from './action-constants';
import { wordPronounceDelayMs } from '../utils/config';
import { playPronunciation } from '../utils/helpers';

export const toggleMenu =
  (target: EventTarget): ThunkAction<void, RootState, unknown, IMenuAction> =>
  async dispatch => {
    dispatch({ type: TOGGLE_MENU, target });
  };

export const initCategories = (): ThunkAction<void, RootState, unknown, ICategoriesAction> => async dispatch => {
  dispatch({ type: INIT_CATEGORIES });
};

export const toggleMode = (): IModeAction => ({ type: TOGGLE_MODE });
export const playWord = (): ThunkAction<void, RootState, unknown, GameActionType> => async (dispatch, getState) => {
  const words = getState().game.words.slice();
  const lastWordIndex = words.length - 1;
  const currentWord = words[lastWordIndex];

  playPronunciation(currentWord);
  setTimeout(() => dispatch({ type: PLAY_WORD, currentWord }), wordPronounceDelayMs);
};

export const startGame =
  (wordsAudioSrc: string[]): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    dispatch({ type: START_GAME, wordsAudioSrc });
    dispatch(playWord());
  };

export const repeatWord = (currentWord: string): GameActionType => {
  playPronunciation(currentWord);
  return { type: REPEAT_WORD };
};

export const chooseWord = (): GameActionType => ({ type: CHOOSE_WORD });
