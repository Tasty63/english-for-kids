import { TOGGLE_MODE } from '../action-constants';
import { IModeAction, ModeState } from '../../app.api';
import { Modes } from '../../utils/config';

const InitialModeState: ModeState = {
  current: Modes.Train,
};

const modeReducer = (state = InitialModeState, action: IModeAction): ModeState => {
  if (action.type === TOGGLE_MODE) {
    return { ...state, current: state.current === Modes.Play ? Modes.Train : Modes.Play };
  }
  return state;
};

export default modeReducer;
