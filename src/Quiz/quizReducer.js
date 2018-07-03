import { fromJS } from 'immutable';

// Actions
const SET_QUIZ_DATA = 'SET_QUIZ_DATA';
const SET_OPTION_SELECTION = 'SET_OPTION_SELECTION';
const SET_QUIZ_NUMBER = 'SET_QUIZ_NUMBER';

// Action creators
export const setQuizData = (data) => ({
  type: SET_QUIZ_DATA,
  data,
});

export const setOptionSelection = (qNumber, answer) => ({
  type: SET_OPTION_SELECTION,
  qNumber,
  answer,
});

export const setQuizNumber = (number) => ({
  type: SET_QUIZ_NUMBER,
  number
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
    case SET_OPTION_SELECTION:
      return state.setIn(['results', action.qNumber], action.answer);
    case SET_QUIZ_NUMBER:
      return state.set('currentStep', action.number);
    default:
      return state;
  }
}
