import Navbar from "./components/Navbar";
//import Registration from "./components/Registration";
import Flashcards from "./components/Flashcards";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import FlashcardDisplay from "./components/FlashcardDisplay";
import QuizDisplay from "./components/QuizDisplay";
import { useState } from "react";
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const getQuestions = async (category = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }&type=multiple`);
    setQuestions(data.results);
  };

return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/quiz" element={<Quiz getQuestions={getQuestions} />}></Route>
<Route path="/quizdisplay" element={<QuizDisplay questions={questions}
              score={score}
              setScore={setScore} />}></Route>
<Route path="/score" element={<Score score={score} />}></Route>
<Route path="/flashcards" element={<Flashcards />}></Route>
<Route path="/flashcarddisplay" element={<FlashcardDisplay />}></Route>
{/*<Route path="/registration" element={<Registration />}></Route>*/}
</Routes></>
);
}
export default App;