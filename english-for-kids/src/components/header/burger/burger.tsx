import React from 'react';
import './burger.scss';

const Burger = () => {

  const toggleMenu = ({target}: React.MouseEvent) => {
    if (!(target instanceof HTMLElement)) {
      return;
    }
    
    const burger: HTMLElement | null = target.closest('.burger');

    if (!burger) {
      return;
    }
    
    burger.classList.toggle('burger_active');
  }

  return (
      <div className="header__burger burger" onClick={toggleMenu}>
        <div className="burger__line burger__line_top" />
        <div className="burger__line burger__line_mid" />
        <div className="burger__line burger__line_bottom" />
      </div>
  );
}

export default Burger;