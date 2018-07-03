import React from 'react';
import { connect } from 'react-redux';

import { setQuizData } from './quizReducer';
import { selectQuizQByStep, selectCurrentStep, selectAllData } from './selectors';

import questions from './quizQuestions';

class Quiz extends React.Component {
 componentDidMount() {
   const { setQuizData } = this.props;
   setQuizData(questions);
 }
 render() {
   const { currentQuizQ, currentStep, totalQNumber } = this.props;
   console.log({currentQuizQ, currentStep, totalQNumber});
   return (
     <div>this is quiz</div>
   );
 }
}

const mapStateToProps = (state) => ({
  currentQuizQ: selectQuizQByStep(state),
  currentStep: selectCurrentStep(state),
  totalQNumber: Object.keys(selectAllData(state)).length,
});

export default connect(mapStateToProps, { setQuizData })(Quiz);
