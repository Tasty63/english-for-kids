import { StatisticsActionType, StatisticWord } from '../../app.api';
import { TRAIN_CLICK, INIT_STATISTIC, UPDATE_STATISTIC } from '../action-constants';

const InitialStatisticState: StatisticWord[] = [];

const statisticsReducer = (state = InitialStatisticState, action: StatisticsActionType): StatisticWord[] => {
  if (action.type === INIT_STATISTIC) {
    return [...action.list];
  }
  if (action.type === TRAIN_CLICK) {
    return state.map(word => (word.id === action.id ? { ...word, trainClicks: word.trainClicks + 1 } : word));
  }
  if (action.type === UPDATE_STATISTIC) {
    return state
      .map(word => {
        return action.guessedWords.some(guessWord => word.id === guessWord.id)
          ? { ...word, guesses: word.guesses + 1 }
          : word;
      })
      .map(word => {
        const currentMistakenWord = action.mistakenWords.find(mistakenWord => word.id === mistakenWord.id);
        return currentMistakenWord ? { ...word, mistakes: word.mistakes + currentMistakenWord.mistakesAmount } : word;
      });
  }
  return state;
};

export default statisticsReducer;
