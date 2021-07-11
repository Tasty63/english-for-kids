import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const reduxStore = createStore(rootReducer, composedEnhancer);

export type RootState = ReturnType<typeof reduxStore.getState>;
