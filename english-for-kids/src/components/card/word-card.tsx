import './card.scss';
import { WordCardProps } from '../../app.api';
import React from 'react';

const WordCard = (props: WordCardProps) => {
  const { word, image, translation, flip, playPronunciation} = props;
  
  return (
    <div className="card" onClick={playPronunciation}>
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