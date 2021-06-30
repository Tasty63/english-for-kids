import './word-card.scss';
import { WordData } from '../../app.api';
import React from 'react';

const WordCard = ({word, image, audioSrc, translation}: WordData) => {

  const flip = (event: React.MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      event.target.closest('.card')?.classList.toggle('card_flipped');
    }
  }

  return (
    <div className="card">
      <div className="card__front">
        <div className="card__image-wrapper">
          <img src={image} alt={word} className="card__image" />
        </div>
        <footer className="card__footer">
          <span className="card__name">{word}</span>
           <button className="card__flip-button" onClick={flip}></button>
        </footer>
      </div>
      <div className="card__back" onMouseLeave={flip}>
        <div className="card__image-wrapper">
          <img src={image} alt={word} className="card__image" />
        </div>
        <footer className="card__footer">
          <span className="card__name">{translation}</span>
        </footer>
      </div>
   </div>
  )
}

export default WordCard;