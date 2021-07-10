import { UPDATE_DIFFICULT_WORDS, INIT_CATEGORIES } from '../action-constants';
import { CategoriesActionType, CategoriesState } from '../../app.api';
import cardCategories from '../../categories-data';

const InitialCategoriesState: CategoriesState = {
  list: cardCategories,
  difficultWords: [],
};

const categoriesReducer = (state = InitialCategoriesState, action: CategoriesActionType): CategoriesState => {
  if (action.type === INIT_CATEGORIES) {
    return { ...state, list: state.list };
  }
  if (action.type === UPDATE_DIFFICULT_WORDS) {
    return { ...state, difficultWords: action.difficultWords };
  }
  return state;
};

export default categoriesReducer;
