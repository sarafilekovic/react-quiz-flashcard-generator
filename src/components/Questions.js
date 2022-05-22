import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-ui/core";

function Questions({currentQuestion, setCurrentQ, questions, options, correctAnswer, score, setScore}) {

  const [selectedAnswer, setSelectedAnswer] = useState();
  const navigate = useNavigate(); 

  const handleSelection = (c) => {
    if(selectedAnswer === c && selectedAnswer === correctAnswer) {
      return "correct";
    }
    else if(selectedAnswer === c && selectedAnswer !== correctAnswer) {
      return "incorrect";
    }
    else if(c === correctAnswer) {
      return "correct";
    }
  };

  const checkAnswer = (c) => {
    setSelectedAnswer(c);
    if (c === correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion > 8) {
      navigate("/score");
    } else if (selectedAnswer) {
      setCurrentQ(currentQuestion + 1);
      setSelectedAnswer();
    }
  };

  return (
    <div className='questions-div'>
      <div className='question-container'>
        <h2>{questions[currentQuestion].question}</h2>
        <div className='question-choices'>
        {options && options.map((choice) => (
              <button className={`nextChoice  ${selectedAnswer && handleSelection(choice)}`}
                key={choice}
                onClick={() => checkAnswer(choice)}
                disabled={selectedAnswer}>{choice}</button>
            ))}
        </div>
        <div className='next-question'>
        <Button variant="contained" color="primary" onClick={nextQuestion}>{currentQuestion > 20 ? "Submit" : "Next"}</Button>
        </div>
      </div>
    </div>
  );
}

export default Questions;