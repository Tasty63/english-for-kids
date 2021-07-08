import { PLAY_WORD, START_GAME, STOP_GAME, WORD_GUESSED, WORD_NOT_GUESSED } from '../action-constants';
import { GameActionType, GameState } from '../../app.api';
import { shuffleArray } from '../../utils/helpers';

const InitialGameState: GameState = {
  isStarted: false,
  words: [],
  guessedWords: [],
  mistakenWords: [],
  currentWord: null,
};

const gameReducer = (state = InitialGameState, action: GameActionType): GameState => {
  if (action.type === START_GAME) {
    const shuffledWords = shuffleArray<string>(action.wordsAudioSrc);
    return { ...state, isStarted: true, words: shuffledWords };
  }
  if (action.type === STOP_GAME) {
    return { ...InitialGameState };
  }
  if (action.type === PLAY_WORD) {
    const remainingWords = state.words.filter(word => word !== action.currentWord);
    return { ...state, words: remainingWords, currentWord: action.currentWord };
  }
  if (action.type === WORD_GUESSED) {
    return { ...state, guessedWords: [...state.guessedWords, action.guessedWord] };
  }
  if (action.type === WORD_NOT_GUESSED) {
    return { ...state, mistakenWords: [...state.mistakenWords, action.mistakenWord] };
  }

  return state;
};

export default gameReducer;
