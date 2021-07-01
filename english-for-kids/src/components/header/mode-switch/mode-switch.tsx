import { useDispatch } from 'react-redux';
import { toggleMode } from '../../../redux/actions';
import './mode-switch.scss';

const ModeSwitch = () => {
  const dispatch = useDispatch();
  
  return (
      <label className="mode-switch" onInput={() => dispatch(toggleMode())}>
        <input className="mode-switch__input" type="checkbox"/>
        <span className="mode-switch__slider" />
        <span className="mode-switch__text">Train</span>
      </label>
  );
}

export default ModeSwitch;