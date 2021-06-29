import './burger.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../../redux/actions';
import {RootState} from '../../../redux/store';

const Burger = () => {

  const dispatch = useDispatch();
  const isOpen = useSelector((store: RootState) => store.menu.isOpen)

 
  return (
      <div className={isOpen ? "header__burger burger burger_active" : "header__burger burger"} onClick={() => dispatch(toggleMenu())}>
        <div className="burger__line burger__line_top" />
        <div className="burger__line burger__line_mid" />
        <div className="burger__line burger__line_bottom" />
      </div>
  );
}

export default Burger;