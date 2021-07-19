export const RegExpRemoveSpaces = /\s+/g;
export const wordPronounceDelayMs = 500;
export const endGameRedirectionDelayMs = 2000;
export const lowAccuracyPercent = 50;
export const maxDifficultWordsOnPage = 8;
export const serverURL = 'http://localhost:5000';
export const userDataStorageName = 'EFK-userData';

// https://safe-chamber-08643.herokuapp.com/api/category
// http://localhost:5000

export enum Modes {
  Train = 'Train',
  Play = 'Play',
}

export enum Sounds {
  Correct = '/audio/correct.mp3',
  Error = '/audio/error.mp3',
  Failure = '/audio/failure.mp3',
  Success = '/audio/success.mp3',
}

export enum GameResults {
  Win = 'Win',
  Lose = 'Lose',
}

export enum SortDirections {
  Asc = 'Asc',
  Desc = 'Desc',
}

export enum SortKeys {
  Category = 'category',
  Word = 'word',
  Translation = 'translation',
  TrainClicks = 'trained',
  Guesses = 'guesses',
  Mistakes = 'mistakes',
  Accuracy = 'accuracy',
}

export enum RouteNames {
  DifficultWords = 'difficultWords',
}

export enum ImagePaths {
  Upload = '',
  NoImage = '/images/no-image.png',
}
