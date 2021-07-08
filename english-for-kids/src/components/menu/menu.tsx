import './menu.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeSpacesfromWord } from '../../utils/helpers';
import { toggleMenu } from '../../redux/actions';

const Menu: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const categories = useSelector((state: RootState) => state.categories.list);
  const dispatch = useDispatch();

  return (
    <>
      <nav className={`header__menu menu ${isOpen ? 'menu_opened' : ''}`}>
        <ul className="menu__list">
          {categories.map(category => {
            const nameWithoutSpaces = removeSpacesfromWord(category.name);

            return (
              <li className="menu__item" key={category.id}>
                <NavLink
                  to={`/category/${nameWithoutSpaces}`}
                  className="menu__link"
                  onClick={() => dispatch(toggleMenu())}
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={`menu__wrapper ${isOpen ? 'menu__wrapper_visible' : ''}`}
        onClick={() => dispatch(toggleMenu())}
      />
    </>
  );
};

export default Menu;
