import React from 'react';
import { connect } from 'react-redux';

import './Quiz.css';

import QuizTitle from '../components/QuizTitle';
import QuizCount from '../components/QuizCount';
import QuizBody from '../components/QuizBody';
import QuizOption from '../components/QuizOption';
import QuizNavigation from '../components/QuizNavigation';

import { setQuizData, setOptionSelection, setQuizNumber } from './quizReducer';
import { selectQuizQByStep, selectCurrentStep, selectAllData } from './selectors';

import questions from './quizQuestions';

class Quiz extends React.Component {
 componentDidMount() {
   const { setQuizData } = this.props;
   setQuizData(questions);
 }

 render() {
   const { currentQuizQ, currentStep, totalQNumber, setOptionSelection, setQuizNumber } = this.props;
   if (!currentQuizQ) {
     return (<div>Loading ...</div>)
   }
   return (
     <div className="quiz-container">
       <div className="quiz-header">
         <QuizTitle
           title={currentQuizQ.title}
         />
         <QuizCount
           current={currentStep}
           total={totalQNumber}
         />
       </div>
       <QuizBody
         q={currentQuizQ.qbody}
       />
       <QuizOption
         options={currentQuizQ.options}
         currentStep={currentStep}
         onSelectOption={(qNumber, answer) => {
           setOptionSelection(qNumber, answer);
         }}
       />
       <QuizNavigation
         current={currentStep}
         total={totalQNumber}
         onSetNumber={(number) => {
           setQuizNumber(number)
         }}
       />

     </div>
   );
 }
}

const mapStateToProps = (state) => ({
  currentQuizQ: selectQuizQByStep(state),
  currentStep: selectCurrentStep(state),
  totalQNumber: Object.keys(selectAllData(state)).length,
});

export default connect(mapStateToProps, { setQuizData, setOptionSelection, setQuizNumber })(Quiz);
