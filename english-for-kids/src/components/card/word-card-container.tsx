import './card.scss';
import React from 'react';
import { WordData } from '../../app.api';
import WordCard from './word-card';

const WordCardContainer = ({
  word, image, audioSrc, translation,
}: WordData) => {
  const flip = ({ target }: React.MouseEvent) => {
    if (target instanceof HTMLElement) {
      target.closest('.card')?.classList.toggle('card_flipped');
    }
  };

  const playPronunciation = ({ target }: React.MouseEvent, pronunciationSrc: string) => {
    const pronunciation = new Audio();
    pronunciation.src = pronunciationSrc;

    if (!(target instanceof HTMLElement)) {
      return;
    }
    const isNotFlipButton = !target.classList.contains('card__flip');

    if (isNotFlipButton) {
      pronunciation.play();
    }
  };

  return (
    <WordCard
      word={word}
      image={image}
      translation={translation}
      flip={flip}
      playPronunciation={(event) => playPronunciation(event, audioSrc)}
    />
  );
};

export default WordCardContainer;
