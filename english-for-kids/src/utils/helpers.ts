import { RegExpRemoveSpaces } from './config';

export const removeSpacesfromWord = (word: string) => word.replace(RegExpRemoveSpaces, '');

export const isClickOutsideMenu = (target: EventTarget) => {
  if (target instanceof HTMLElement) {
    return !target.closest('.menu__list');
  }
};

export const isClickOnBurger = (target: EventTarget) => {
  if (target instanceof HTMLElement) {
    return !!target.closest('.burger');
  }
};

export const isClickOnLink = (target: EventTarget) => {
  if (target instanceof HTMLElement) {
    return !!target.closest('.menu__link');
  }
};
