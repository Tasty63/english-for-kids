import { StatisticsActionType, StatisticWord } from '../../app.api';
import { TRAIN_CLICK, GET_STATISTIC, UPDATE_STATISTIC, RESET_STATISTIC } from '../action-constants';

const InitialStatisticState: StatisticWord[] = [];

const statisticsReducer = (state = InitialStatisticState, action: StatisticsActionType): StatisticWord[] => {
  if (action.type === GET_STATISTIC) {
    return [...action.statistics];
  }
  return state;
};

export default statisticsReducer;
