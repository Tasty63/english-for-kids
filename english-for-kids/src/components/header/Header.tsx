import './header.scss';
import Burger from './burger/burger';
import Logo from './logo/Logo';
import ModeSwitch from './mode-switch/mode-switch';

const Header = () => (
  <div className="header">
    <Burger />
    <Logo />
    <ModeSwitch />
  </div>
);

export default Header;
