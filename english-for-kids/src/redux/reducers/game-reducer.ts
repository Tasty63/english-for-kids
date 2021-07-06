import { REPEAT_WORD, START_GAME } from '../action-constants';
import { GameActionType, GameState } from '../../app.api';

const InitialMenuState: GameState = {
  isStarted: false,
};

const gameReducer = (state = InitialMenuState, action: GameActionType): GameState => {
  if (action.type === START_GAME) {
    return { ...state, isStarted: true };
  }
  if (action.type === REPEAT_WORD) {
    return { ...state, isStarted: true };
  }
  return state;
};

export default gameReducer;
