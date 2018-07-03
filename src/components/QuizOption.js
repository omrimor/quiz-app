import React from 'react';

export const QuizOption = ({ options, currentStep, onSelectOption }) => {
  return (
    <div className="quiz-options">
      {
        options.map((item, inx) =>
          <button
            className="quiz-options__button"
            key={inx}
            onClick={() => {
              onSelectOption(currentStep, item);
            }}
          >
            {item}
          </button>)
      }
    </div>
  );
};

export default QuizOption;
