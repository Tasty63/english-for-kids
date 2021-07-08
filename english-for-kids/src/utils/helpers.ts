import { RegExpRemoveSpaces } from './config';

export const removeSpacesfromWord = (word: string): string => word.replace(RegExpRemoveSpaces, '');

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = array.slice();

  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;
}

export const playAudio = (audioSrc: string): void => {
  const audio = new Audio();
  audio.src = audioSrc;
  audio.currentTime = 0;
  audio.play();
};
