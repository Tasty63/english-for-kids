import './mode-switch.scss';

const ModeSwitch = () => {
  return (
      <label className="mode-switch">
        <input className="mode-switch__input" type="checkbox"/>
        <span className="mode-switch__slider" />
        <span className="mode-switch__text">Train</span>
      </label>
  );
}

export default ModeSwitch;