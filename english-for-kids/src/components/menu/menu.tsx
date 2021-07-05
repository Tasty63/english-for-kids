import './menu.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeSpacesfromWord } from '../../utils/helpers';

const Menu: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const className = isOpen ? 'header__menu menu menu_opened' : 'header__menu menu';
  const categories = useSelector((state: RootState) => state.categories.list);

  return (
    <nav className={className}>
      <ul className="menu__list">
        {categories.map(category => {
          const nameWithoutSpaces = removeSpacesfromWord(category.name);

          return (
            <li className="menu__item" key={category.id}>
              <NavLink to={`/category/${nameWithoutSpaces}`} className="menu__link">
                {category.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
