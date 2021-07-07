import './card.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WordData } from '../../app.api';
import { RootState } from '../../redux/store';
import { Modes, toBack, toFront } from '../../utils/config';
import { chooseWord } from '../../redux/actions';
import { playAudio } from '../../utils/helpers';

const WordCard: React.FC<WordData> = ({ word, image, translation, audioSrc, id }: WordData) => {
  const [flipped, flip] = useState(toFront);
  const mode = useSelector((state: RootState) => state.mode.current);
  const isGuessed = useSelector((state: RootState) => state.game.guessedWordsSrc.includes(audioSrc));

  const dispatch = useDispatch();

  const playAudioOnClick = ({ target }: React.MouseEvent, src: string): void => {
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const isTargetFlipButton = target.classList.contains('card__flip');

    if (!isTargetFlipButton) {
      playAudio(src);
    }
  };

  return (
    <div
      className={`card ${flipped ? 'card_flipped' : ''} ${isGuessed ? 'card_guessed' : ''}`}
      onClick={mode === Modes.Train ? event => playAudioOnClick(event, audioSrc) : () => dispatch(chooseWord(audioSrc))}
      onMouseLeave={() => flip(toFront)}
      key={id}
    >
      <div className="card__translucent-background" />
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
