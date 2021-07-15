import './menu.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeSpacesfromWord } from '../../utils/helpers';
import { toggleLoginPopUp, toggleMenu } from '../../redux/actions';

const Menu: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const categories = useSelector((state: RootState) => state.categories.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className={isOpen ? 'header__menu menu menu_opened' : 'header__menu menu'}>
        <nav className="header__nav nav">
          <ul className="nav__list">
            {categories.map(category => {
              const nameWithoutSpaces = removeSpacesfromWord(category.name);
              return (
                <li className="nav__item" key={category.id}>
                  <NavLink
                    to={`/category/${nameWithoutSpaces}`}
                    className="nav__link"
                    onClick={() => dispatch(toggleMenu())}
                  >
                    {category.name}
                  </NavLink>
                </li>
              );
            })}
            <li className="nav__item">
              <NavLink to="/statistics" className="nav__link" onClick={() => dispatch(toggleMenu())}>
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu__login">
          <button className="menu__login-button" type="button" onClick={() => dispatch(toggleLoginPopUp())}>
            Log In
          </button>
        </div>
      </div>
      <div
        className={isOpen ? 'menu__wrapper menu__wrapper_visible' : 'menu__wrapper'}
        onClick={() => dispatch(toggleMenu())}
      />
    </>
  );
};

export default Menu;
