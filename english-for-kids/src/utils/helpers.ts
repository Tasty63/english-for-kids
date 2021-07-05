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
