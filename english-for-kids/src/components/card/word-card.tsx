import './card.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { WordCardProps } from '../../app.api';
import { RootState } from '../../redux/store';
import { Modes, toBack, toFront } from '../../utils/config';

const WordCard: React.FC<WordCardProps> = ({ word, image, translation, playPronunciation, id }: WordCardProps) => {
  const mode = useSelector((state: RootState) => state.mode.current);
  const [flipped, flip] = useState(toFront);

  return (
    <div
      className={`card ${flipped ? 'card_flipped' : ''}`}
      onClick={mode === Modes.Train ? playPronunciation : undefined}
      onMouseLeave={() => flip(toFront)}
      key={id}
    >
      <div className={`card__front ${mode === Modes.Play ? 'card__front_play' : ''}`}>
        <div className="card__image-wrapper">
          <img src={image} alt={word} className="card__image" />
        </div>
        <footer className="card__footer">
          <span className="card__name">{word}</span>
          <div className="card__flip" onClick={() => flip(toBack)} />
        </footer>
      </div>
      <div className="card__back">
        <div className="card__image-wrapper">
          <img src={image} alt={word} className="card__image" />
        </div>
        <footer className="card__footer">
          <span className="card__name">{translation}</span>
        </footer>
      </div>
    </div>
  );
};

export default WordCard;
