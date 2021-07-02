import './header.scss';
import Burger from './burger/burger';
import Logo from './logo/Logo';
import ModeSwitch from './mode-switch/mode-switch';

const Header = () => {
  return (
    <div className="header">
      <Burger></Burger>
      <Logo></Logo>
      <ModeSwitch></ModeSwitch>
    </div>
  );
}

export default Header;