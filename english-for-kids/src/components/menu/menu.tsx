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
      <nav className={isOpen ? 'header__menu menu menu_opened' : 'header__menu menu'}>
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
          <li className="menu__item">
            <NavLink to="/statistics" className="menu__link" onClick={() => dispatch(toggleMenu())}>
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className={isOpen ? 'menu__wrapper menu__wrapper_visible' : 'menu__wrapper'}
        onClick={() => dispatch(toggleMenu())}
      />
    </>
  );
};

export default Menu;
