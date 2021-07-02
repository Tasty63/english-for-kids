import './card.scss';
import { Modes, WordCardProps } from '../../app.api';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const WordCard = (props: WordCardProps) => {
  const { word, image, translation, flip, playPronunciation} = props;
  const mode = useSelector((state: RootState) => state.mode.current)
  
  return (
    <div className="card" onClick={mode === Modes.Train ? playPronunciation : undefined}>
      <div className={mode === Modes.Train ? "card__front" : "card__front card__front_play"}>
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