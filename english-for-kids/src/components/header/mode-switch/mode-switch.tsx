import { useDispatch, useSelector } from 'react-redux';
import { stopGame, toggleMode } from '../../../redux/actions';
import { RootState } from '../../../redux/store';
import './mode-switch.scss';

const ModeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.current);
  const isGameStarted = useSelector((state: RootState) => state.game.isStarted);

  const toggleSwitch = () => {
    dispatch(toggleMode());
    if (isGameStarted) {
      dispatch(stopGame());
    }
  };

  return (
    <label className="mode-switch" onInput={() => toggleSwitch()}>
      <input className="mode-switch__input" type="checkbox" />
      <span className="mode-switch__slider" />
      <span className="mode-switch__text">{mode}</span>
    </label>
  );
};

export default ModeSwitch;
