import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Flashcards() {
  const navigate = useNavigate();
  const handleStart = () => {
      navigate("/flashcarddisplay");
  };
  return(
  <div className="flashcardspage">
    <div className="flashcard-instructions">
      <p>Click the button to start using flashcards:</p>
    </div>
    <div className="start-button-container">
    <Button variant="contained" color="primary" style={{width: "100%"}} onClick={handleStart}>Start</Button>
    </div>
  </div>
  );
  }

export default Flashcards;