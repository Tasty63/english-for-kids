import './card.scss';
import { WordData } from '../../app.api';
import React from 'react';

const WordCard = ({ word, image, audioSrc, translation }: WordData) => {
  //TODO:  аудио + бтн + начать плеймод(редакс)?

  const flip = (event: React.MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      event.target.closest('.card')?.classList.toggle('card_flipped');
    }
  }
  const pronunciation = new Audio();
  pronunciation.src = audioSrc;
  console.log(audioSrc);
  

  return (
    <div className="card" onClick={() => pronunciation.play()}>
      <div className="card__front">
        <div className="card__image-wrapper">
          <img src={image} alt={word} className="card__image" />
        </div>
        <footer className="card__footer">
          <span className="card__name">{word}</span>
          <div className="card__flip" onClick={flip}></div>
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