import { StatisticsActionType, StatisticWord } from '../../app.api';
import { TRAIN_CLICK, INIT_STATISTIC } from '../action-constants';

const InitialStatisticState: StatisticWord[] = [];

const statisticsReducer = (state = InitialStatisticState, action: StatisticsActionType): StatisticWord[] => {
  if (action.type === INIT_STATISTIC) {
    return [...action.list];
  }
  if (action.type === TRAIN_CLICK) {
    return state;
  }
  return state;
};

export default statisticsReducer;
