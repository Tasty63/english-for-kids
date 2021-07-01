import './card.scss';
import { WordData } from '../../app.api';
import React from 'react';
import WordCard from './word-card';

const WordCardContainer = ({word, image, audioSrc, translation}: WordData) => {

  const flip = ({target}: React.MouseEvent) => {
    if (target instanceof HTMLElement) {
      target.closest('.card')?.classList.toggle('card_flipped');
    }
  }
  
  const playPronunciation = ({target}: React.MouseEvent) => {
    const pronunciation = new Audio();
    pronunciation.src = audioSrc;

    if (target instanceof HTMLElement) {
      const isNotFlipButton = !target.classList.contains('card__flip')
      if (isNotFlipButton) {
        pronunciation.play()
      }
    }
  }

  return (
   <WordCard word={word} image={image} translation={translation} flip={flip} playPronunciation={playPronunciation}></WordCard>
  )
}

export default WordCardContainer;