import './menu.scss';

const Menu = () => {
  return (
  <nav className="header__menu menu">
    <ul className="menu__list">
      <li className="menu__item"><a href="#" className="menu__link">Action (set A)</a></li>
      <li className="menu__item"><a href="#" className="menu__link">Action (set B)</a></li>
      <li className="menu__item"><a href="#" className="menu__link">Animal (set A)</a></li>
      <li className="menu__item"><a href="#" className="menu__link">Animal (set B)</a></li>
      <li className="menu__item"><a href="#" className="menu__link">Clothes</a></li>
      <li className="menu__item"><a href="#" className="menu__link">Emotions</a></li>
      <li className="menu__item"><a href="#" className="menu__link">Fruits</a></li>
      <li className="menu__item"><a href="#" className="menu__link">Vegetables</a></li>
    </ul>
  </nav>
  );
}

export default Menu;