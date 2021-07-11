import './word-card.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WordData } from '../../../app.api';
import { RootState } from '../../../redux/store';
import { Modes } from '../../../utils/config';
import { chooseWord, trainClick } from '../../../redux/actions';
import { playAudio } from '../../../utils/helpers';

const WordCard: React.FC<WordData> = ({ word, image, translation, audioSrc, id }: WordData) => {
  const toBack = true;
  const toFront = false;
  const [flipped, flip] = useState(toFront);

  const mode = useSelector((state: RootState) => state.mode.current);
  const isGameStarted = useSelector((state: RootState) => state.game.isStarted);
  const isGuessed = useSelector((state: RootState) =>
    state.game.guessedWords.map(item => item.audio).includes(audioSrc),
  );

  const dispatch = useDispatch();

  const playAudioOnClick = ({ target }: React.MouseEvent, audio: string): void => {
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const isTargetFlipButton = target.classList.contains('word-card__flip');

    if (!isTargetFlipButton) {
      playAudio(audio);
    }
  };

  const handleTrainClick = (event: React.MouseEvent, audio: string, wordId: string) => {
    playAudioOnClick(event, audio);
    dispatch(trainClick(wordId));
  };

  return (
    <div
      className={`word-card card ${flipped ? 'word-card_flipped' : ''} ${isGuessed ? 'word-card_guessed' : ''}`}
      onClick={isGameStarted ? () => dispatch(chooseWord(id)) : event => handleTrainClick(event, audioSrc, id)}
      onMouseLeave={() => flip(toFront)}
      key={id}
    >
      <div className="word-card__translucent-background" />
      <div className={`word-card__front ${mode === Modes.Play ? 'word-card__front_play' : ''}`}>
        <div className="card__image-wrapper">
          <img src={image} alt={word} className="card__image" />
        </div>
        <footer className="card__footer">
          <span className="card__name">{word}</span>
          <div className="word-card__flip" onClick={() => flip(toBack)} />
        </footer>
      </div>
      <div className="word-card__back">
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
