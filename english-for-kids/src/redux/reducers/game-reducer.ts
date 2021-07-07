import { PLAY_WORD, REPEAT_WORD, START_GAME } from '../action-constants';
import { GameActionType, GameState } from '../../app.api';
import { playPronunciation, shuffleArray } from '../../utils/helpers';

const InitialGameState: GameState = {
  isStarted: false,
  words: [],
  currentWord: null,
};

const gameReducer = (state = InitialGameState, action: GameActionType): GameState => {
  if (action.type === START_GAME) {
    const shuffledWords = shuffleArray<string>(action.wordsAudioSrc);
    return { ...state, isStarted: true, words: shuffledWords };
  }
  if (action.type === PLAY_WORD) {
    const lastIndex = state.words.length - 1;
    const remainingWords = state.words.slice(0, lastIndex);

    if (remainingWords.length > 0) {
      return { ...state, words: remainingWords, currentWord: action.currentWord };
    }
  }
  if (action.type === REPEAT_WORD) {
    return { ...state };
  }
  return state;
};

export default gameReducer;
