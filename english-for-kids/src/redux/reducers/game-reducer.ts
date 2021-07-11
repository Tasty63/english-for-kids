import { PLAY_WORD, START_GAME, STOP_GAME, WORD_GUESSED, WORD_NOT_GUESSED, END_GAME } from '../action-constants';
import { GameActionType, GameState, GameWord } from '../../app.api';
import { shuffleArray } from '../../utils/helpers';

const InitialGameState: GameState = {
  isStarted: false,
  words: [],
  guessedWords: [],
  mistakenWords: [],
  currentWord: null,
  result: null,
};

const gameReducer = (state = InitialGameState, action: GameActionType): GameState => {
  if (action.type === START_GAME) {
    const shuffledWords = shuffleArray<GameWord>(action.gameWords);
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
    return { ...state, guessedWords: [...state.guessedWords, { ...action.guessedWord }] };
  }

  if (action.type === WORD_NOT_GUESSED) {
    const isMistakenWordsIncludes = state.mistakenWords.map(item => item.audio).includes(action.mistakenWord.audio);

    if (isMistakenWordsIncludes) {
      return {
        ...state,
        mistakenWords: state.mistakenWords.map(word =>
          word.id === action.mistakenWord.id ? { ...word, mistakesAmount: word.mistakesAmount + 1 } : word,
        ),
      };
    }

    return {
      ...state,
      mistakenWords: [...state.mistakenWords, { ...action.mistakenWord, mistakesAmount: 1 }],
    };
  }

  if (action.type === END_GAME) {
    return { ...state, result: action.result };
  }

  return state;
};

export default gameReducer;
