import { RegExpRemoveSpaces } from './config';

export const removeSpacesfromWord = (word: string) => {
  return word.replace(RegExpRemoveSpaces, '');
};
