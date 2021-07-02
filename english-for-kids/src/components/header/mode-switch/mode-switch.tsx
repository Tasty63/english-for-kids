import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../../redux/actions';
import { RootState } from '../../../redux/store';
import './mode-switch.scss';

const ModeSwitch = () => {
  const dispatch = useDispatch();
   const mode = useSelector((state: RootState) => state.mode.current)
   
  return (
      <label className="mode-switch" onInput={() => dispatch(toggleMode())}>
        <input className="mode-switch__input" type="checkbox"/>
        <span className="mode-switch__slider" />
        <span className="mode-switch__text">{mode}</span>
      </label>
  );
}

export default ModeSwitch;