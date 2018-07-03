/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux-immutable';

import quizReducer from './Quiz/quizReducer';

export default function createReducer() {
  return combineReducers({
    quiz: quizReducer,
  });
}
