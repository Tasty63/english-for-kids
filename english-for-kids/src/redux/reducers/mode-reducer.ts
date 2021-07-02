import { TOGGLE_MODE } from '../action-constants';
import { IModeAction, ModeState, Modes } from '../../app.api';

const InitialMenuState: ModeState = {
  current: Modes.Train,
};

const modeReducer = (state = InitialMenuState, action: IModeAction): ModeState => {
  if (action.type === TOGGLE_MODE) {
    return { ...state, current: state.current === Modes.Play ? Modes.Train : Modes.Play };
  }
  return state;
};

export default modeReducer;
