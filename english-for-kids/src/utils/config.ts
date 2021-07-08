export const RegExpRemoveSpaces = /\s+/g;
export const toBack = true;
export const toFront = false;
export const wordPronounceDelayMs = 500;

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
