import './card.scss';
import React from 'react';
import { WordCardProps } from '../../app.api';
import WordCard from './word-card';

const WordCardContainer: React.FC<WordCardProps> = ({
  word,
  image,
  translation,
  playPronunciationOnClick,
  id,
}: WordCardProps) => {
  return (
    <WordCard
      word={word}
      image={image}
      translation={translation}
      playPronunciationOnClick={playPronunciationOnClick}
      id={id}
    />
  );
};

export default WordCardContainer;
