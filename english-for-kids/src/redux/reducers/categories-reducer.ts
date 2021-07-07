import { INIT_CATEGORIES } from '../action-constants';
import { ICategoriesAction, CategoriesState } from '../../app.api';
import cardCategories from '../../categories-data';

const InitialCategoriesState: CategoriesState = {
  list: cardCategories,
};

const categoriesReducer = (state = InitialCategoriesState, action: ICategoriesAction): CategoriesState => {
  if (action.type === INIT_CATEGORIES) {
    return { ...state, list: state.list };
  }
  return state;
};

export default categoriesReducer;
