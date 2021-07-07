import { RegExpRemoveSpaces } from './config';

export const removeSpacesfromWord = (word: string): string => word.replace(RegExpRemoveSpaces, '');

export const isClickOutsideMenu = (target: EventTarget): boolean => {
  if (target instanceof HTMLElement) {
    return !target.closest('.menu__list');
  }
  return false;
};

export const isClickOnBurger = (target: EventTarget): boolean => {
  if (target instanceof HTMLElement) {
    return !!target.closest('.burger');
  }
  return false;
};

export const isClickOnLink = (target: EventTarget): boolean => {
  if (target instanceof HTMLElement) {
    return !!target.closest('.menu__link');
  }
  return false;
};

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = array.slice();

  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;
}

export const playAudio = (audioSrc: string): void => {
  const pronunciation = new Audio();
  pronunciation.src = audioSrc;
  pronunciation.play();
};
