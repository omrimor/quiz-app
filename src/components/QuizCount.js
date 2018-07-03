import React from 'react'

export const QuizCount = ({ current, total}) => {
  return (
    <div className="quiz-header__count">{current} / {total}</div>
  );
};

export default QuizCount
