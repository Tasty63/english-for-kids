import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import {
  IMenuAction,
  CategoriesActionType,
  IModeAction,
  GameActionType,
  StatisticsActionType,
  StatisticWord,
  MistakenWord,
  GameWord,
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
  UPDATE_STATISTIC,
  RESET_STATISTIC,
  UPDATE_DIFFICULT_WORDS,
} from './action-constants';
import {
  GameResults,
  lowAccuracyPercent,
  maxDifficultWordsOnPage,
  Sounds,
  wordPronounceDelayMs,
} from '../utils/config';
import { getAccuracyPercentage, playAudio } from '../utils/helpers';

export const toggleMenu = (): IMenuAction => ({ type: TOGGLE_MENU });

export const toggleMode = (): IModeAction => ({ type: TOGGLE_MODE });

export const initCategories = (): ThunkAction<void, RootState, unknown, CategoriesActionType> => async dispatch => {
  dispatch({ type: INIT_CATEGORIES });
};

export const updateDifficultWords =
  (): ThunkAction<void, RootState, unknown, CategoriesActionType> => async (dispatch, getState) => {
    const categoriesWords = getState().categories.list.flatMap(category => category.words);

    const difficultWordsStatistic = getState()
      .statistics.filter(
        word => word.mistakes && getAccuracyPercentage(word.guesses, word.mistakes) <= lowAccuracyPercent,
      )
      .sort((firstWord, secondWord) => secondWord.mistakes - firstWord.mistakes)
      .slice(0, maxDifficultWordsOnPage);

    const difficultWords = categoriesWords.filter(categoryWord =>
      difficultWordsStatistic.some(wordStatistic => wordStatistic.id === categoryWord.id),
    );

    dispatch({ type: UPDATE_DIFFICULT_WORDS, difficultWords });
  };

export const updateStatistics =
  (
    guessedWords: GameWord[],
    mistakenWords: MistakenWord[],
  ): ThunkAction<void, RootState, unknown, StatisticsActionType> =>
  async dispatch => {
    dispatch({ type: UPDATE_STATISTIC, guessedWords, mistakenWords });
    dispatch(updateDifficultWords());
  };

export const endGame =
  (result: GameResults): ThunkAction<void, RootState, unknown, GameActionType> =>
  async (dispatch, getState) => {
    const { guessedWords, mistakenWords } = getState().game;

    dispatch(updateStatistics(guessedWords, mistakenWords));
    dispatch({ type: END_GAME, result });
  };

export const playWord = (): ThunkAction<void, RootState, unknown, GameActionType> => async (dispatch, getState) => {
  const words = getState().game.words.slice();
  const lastWordIndex = words.length - 1;
  const currentWord = words[lastWordIndex];

  setTimeout(() => {
    playAudio(currentWord.audio);
    dispatch({ type: PLAY_WORD, currentWord });
  }, wordPronounceDelayMs);
};

export const startGame =
  (gameWords: GameWord[]): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    if (!gameWords.length) {
      return;
    }
    dispatch({ type: START_GAME, gameWords });
    dispatch(playWord());
  };

export const stopGame = (): GameActionType => ({ type: STOP_GAME });

export const guessedWord =
  (word: GameWord): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    playAudio(Sounds.Correct);
    dispatch({ type: WORD_GUESSED, guessedWord: word });
  };

export const notGuessedWord =
  (word: GameWord): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    playAudio(Sounds.Error);
    dispatch({ type: WORD_NOT_GUESSED, mistakenWord: word });
  };

export const chooseWord =
  (id: string): ThunkAction<void, RootState, unknown, GameActionType> =>
  async (dispatch, getState) => {
    const { currentWord, words } = getState().game;
    const mistakesAmount = getState().game.mistakenWords.length;

    if (!currentWord) {
      return;
    }
    if (currentWord.id !== id) {
      dispatch(notGuessedWord(currentWord));
      return;
    }
    dispatch(guessedWord(currentWord));

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
  dispatch(updateDifficultWords());
};

export const resetStatistics = (): ThunkAction<void, RootState, unknown, StatisticsActionType> => async dispatch => {
  dispatch({ type: RESET_STATISTIC });
  dispatch(updateDifficultWords());
};

export const trainClick =
  (id: string): ThunkAction<void, RootState, unknown, StatisticsActionType> =>
  async dispatch => {
    dispatch({ type: TRAIN_CLICK, id });
  };
