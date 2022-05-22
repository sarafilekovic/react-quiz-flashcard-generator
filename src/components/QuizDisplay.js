import React, { useEffect, useState } from "react";
import Questions from "./Questions";

function QuizDisplay({questions, score, setScore}) {

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQ] = useState(0);

  useEffect(() => {
    setOptions(questions && handleQuestions(
      [questions[currentQuestion]?.correct_answer,
      ...questions[currentQuestion]?.incorrect_answers]
    ));
  }, [questions, currentQuestion]);

  const handleQuestions = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };
return(
<div className="display-quiz-page">
{questions ? (
        <>
          <div className="quizSettings">
            <h4>Category: {questions[currentQuestion].category}</h4>
            <br></br>
            <h4>Your score: {score}</h4>
            <br></br>
          </div>
          <Questions
            currentQuestion={currentQuestion}
            setCurrentQ={setCurrentQ}
            questions={questions}
            options={options}
            correctAnswer={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
</div>
);
}

export default QuizDisplay;