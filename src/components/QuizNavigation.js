import React from 'react';

export const QuizNavigation = ({ current, total, onSetNumber }) => {
  return (
    <div className="quiz-navigation">
      <button
        style={(current === 1) ? {backgroundColor: '#ccc', color: '#fff'} : {}}
        className="quiz-navigation__button"
        disabled={current === 1}
        onClick={() => {
          onSetNumber(current - 1)
        }}
      >
        Back
      </button>
      <button
        style={(current === total) ? {backgroundColor: '#ccc', color: '#fff'} : {}}
        className="quiz-navigation__button"
        disabled={current === total}
        onClick={() => {
          onSetNumber(current + 1)
        }}
      >
        Next
      </button>
    </div>
  );
};

export default QuizNavigation;
