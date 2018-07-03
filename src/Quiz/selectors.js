import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const quizData = state => state.getIn(['quiz', 'data'], fromJS({}));
const currentStep = state => state.getIn(['quiz', 'currentStep'], 1);
const results = state => state.getIn(['quiz', 'results'], fromJS({}));

export const selectQuizQByStep = createSelector(
  [quizData, currentStep],
  (quizData, currentStep) => quizData[currentStep]
);

export const selectCurrentStep = createSelector(
  [currentStep],
  (currentStep) => currentStep
);

export const selectAllData = createSelector(
  [quizData],
  (quizData) => quizData
);
