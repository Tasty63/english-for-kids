export const RegExpRemoveSpaces = /\s+/g;
export const wordPronounceDelayMs = 500;
export const lowAccuracyPercent = 50;
export const maxDifficultWords = 8;

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
  TrainClicks = 'trainClicks',
  Guesses = 'guesses',
  Mistakes = 'mistakes',
  Accuracy = 'accuracy',
}

export enum RouteNames {
  DifficultWords = 'difficultWords',
}
