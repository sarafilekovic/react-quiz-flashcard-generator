import React from "react";
import { MenuItem, TextField, Button } from "@material-ui/core";
import Categories from "./Categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './homepage.css';

function Quiz({getQuestions}) {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const handleStart = () => {
    if(!category) {
      return;
    }
    else {
      getQuestions(category);
      navigate("/quizdisplay");
    }
  };
return(
<div className="quizpage">
  <div className="quiz-instructions">
    <p>Welcome to the quiz page! Please select a category:</p>
  </div>
  <div className="quiz-settings">
  <TextField select label="Choose category" variant="outlined" style={{ marginRight: 30 }} onChange={(e) => setCategory(e.target.value)} value={category}>
    { Categories.map((categoryItem) => (
      <MenuItem key={categoryItem.category} value={categoryItem.value}>{categoryItem.category}</MenuItem>
    )) } 
    </TextField>
    <Button variant="contained" color="primary" style={{margin: "20px"}} onClick={handleStart}>Start</Button>
  </div>
</div>
);
}

export default Quiz;