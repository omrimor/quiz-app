import { fromJS } from 'immutable';

// Actions
const SET_QUIZ_DATA = 'SET_QUIZ_DATA';

// Action creators
export const setQuizData = (data) => ({
  type: SET_QUIZ_DATA,
  data,
});

// The initial state of the App
const initialState = fromJS({
  data: {},
  currentStep: 1,
  results: {},
});

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUIZ_DATA:
      return state.set('data', action.data);
    default:
      return state;
  }
}
