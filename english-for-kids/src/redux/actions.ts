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
  LoginActionType,
  LoginFormType,
  UserData,
  CategoryForm,
} from '../app.api';
import {
  TOGGLE_MENU,
  GET_CATEGORIES,
  TOGGLE_MODE,
  START_GAME,
  PLAY_WORD,
  WORD_GUESSED,
  WORD_NOT_GUESSED,
  STOP_GAME,
  GET_STATISTIC,
  END_GAME,
  UPDATE_DIFFICULT_WORDS,
  TOGGLE_LOGIN_POPUP,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  LOGOUT,
  INIT_LOGIN,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
} from './action-constants';
import {
  GameResults,
  lowAccuracyPercent,
  maxDifficultWordsOnPage,
  serverURL,
  Sounds,
  userDataStorageName,
  wordPronounceDelayMs,
} from '../utils/config';
import { getAccuracyPercentage, playAudio } from '../utils/helpers';

export const toggleMenu = (): IMenuAction => ({ type: TOGGLE_MENU });
export const toggleLoginPopUp = (): LoginActionType => ({ type: TOGGLE_LOGIN_POPUP });
export const toggleMode = (): IModeAction => ({ type: TOGGLE_MODE });

export const initLogin = (): ThunkAction<void, RootState, unknown, LoginActionType> => async dispatch => {
  const jsonUserData = localStorage.getItem(userDataStorageName);
  if (!jsonUserData) {
    return;
  }
  const userData = JSON.parse(jsonUserData);

  dispatch({ type: INIT_LOGIN, userData });
};

export const logout = (): ThunkAction<void, RootState, unknown, LoginActionType> => async dispatch => {
  localStorage.removeItem(userDataStorageName);
  dispatch({ type: LOGOUT });
};

export const loginSucceed =
  (userData: UserData): ThunkAction<void, RootState, unknown, LoginActionType> =>
  async dispatch => {
    localStorage.setItem(userDataStorageName, JSON.stringify(userData));
    dispatch({ type: LOGIN_SUCCEED, userData });
  };

export const loginFailed =
  (message: string): ThunkAction<void, RootState, unknown, LoginActionType> =>
  async dispatch => {
    dispatch({ type: LOGIN_FAILED, message });
  };

export const tryLogin =
  (form: LoginFormType): ThunkAction<void, RootState, unknown, LoginActionType> =>
  async dispatch => {
    const response = await fetch(`${serverURL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const { message } = await response.json();
      dispatch(loginFailed(message));
      return;
    }

    const result: UserData = await response.json();

    dispatch(loginSucceed(result));
  };

export const getCategories = (): ThunkAction<void, RootState, unknown, CategoriesActionType> => async dispatch => {
  const response = await fetch(`${serverURL}/api/category`);
  const list = await response.json();

  dispatch({ type: GET_CATEGORIES, list });
};

export const createCategory =
  (categoryName: string, image: Blob | null): ThunkAction<void, RootState, unknown, CategoriesActionType> =>
  async dispatch => {
    const formData = new FormData();

    if (image) {
      formData.append('image', image);
    }
    formData.append('categoryName', categoryName);

    const response = await fetch(`${serverURL}/api/category/create`, {
      method: 'POST',
      body: formData,
    });
    const list = await response.json();

    dispatch({ type: CREATE_CATEGORY, list });
  };

export const deleteCategory =
  (id: string): ThunkAction<void, RootState, unknown, CategoriesActionType> =>
  async dispatch => {
    const response = await fetch(`${serverURL}/api/category/${id}`, {
      method: 'DELETE',
    });
    const list = await response.json();

    dispatch({ type: DELETE_CATEGORY, list });
  };

export const updateCategory =
  (
    id: string,
    categoryName?: string,
    image?: Blob | null,
  ): ThunkAction<void, RootState, unknown, CategoriesActionType> =>
  async dispatch => {
    if (!image && !categoryName) {
      return;
    }

    const formData = new FormData();

    if (image) {
      formData.append('image', image);
    }

    if (categoryName) {
      formData.append('categoryName', categoryName);
    }

    const response = await fetch(`${serverURL}/api/category/${id}`, {
      method: 'PUT',
      body: formData,
    });
    const list = await response.json();

    dispatch({ type: DELETE_CATEGORY, list });
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

export const getStatistics = (): ThunkAction<void, RootState, unknown, StatisticsActionType> => async dispatch => {
  const result = await fetch(`${serverURL}/api/statistics`);
  const statistics: StatisticWord[] = await result.json();

  dispatch({ type: GET_STATISTIC, statistics });
  dispatch(updateDifficultWords());
};

export const updateStatistics =
  (
    guessedWords: GameWord[],
    mistakenWords: MistakenWord[],
  ): ThunkAction<void, RootState, unknown, StatisticsActionType> =>
  async (dispatch, getState) => {
    const playedCategoryStatistics = getState()
      .statistics.map(word => {
        return guessedWords.some(guessWord => word.id === guessWord.id) ? { ...word, guesses: word.guesses + 1 } : word;
      })
      .map(word => {
        const currentMistakenWord = mistakenWords.find(mistakenWord => word.id === mistakenWord.id);
        return currentMistakenWord ? { ...word, mistakes: word.mistakes + currentMistakenWord.mistakesAmount } : word;
      });

    await fetch(`${serverURL}/api/statistics`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(playedCategoryStatistics),
    });
    dispatch(getStatistics());
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
  (gameWords: GameWord[] | undefined): ThunkAction<void, RootState, unknown, GameActionType> =>
  async dispatch => {
    if (!gameWords || !gameWords.length) {
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

export const resetStatistics = (): ThunkAction<void, RootState, unknown, StatisticsActionType> => async dispatch => {
  await fetch(`${serverURL}/api/statistics/reset`, {
    method: 'PUT',
  });
  dispatch(getStatistics());
};

export const trainClick =
  (id: string): ThunkAction<void, RootState, unknown, StatisticsActionType> =>
  async (dispatch, getState) => {
    const clickedWord = getState().statistics.find(word => word.id === id)!;
    clickedWord.trained += 1;

    await fetch(`${serverURL}/api/statistics/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(clickedWord),
    });
    dispatch(getStatistics());
  };
