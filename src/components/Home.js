import React from "react";
import './homepage.css';

function Home() {
return(
  <><main>
      <section className="main">
        <div className="contains grids">
          <div className="main-text">
            <h1>Remain curious, play and learn.</h1>
            <p>Our Quiz & Flashcard generator helps you learn faster and more efficiently. Play once, remember forever.</p>
            <a href="/registration" className="button button-outline">Get Started</a>
          </div>
          <div className="main-form ">
            <img className="brain" src="./brainimg.png" alt="" />
          </div>
        </div>
      </section>
      <footer>
        <h4>Quiz and Flashcards &copy; 2022</h4>
      </footer>
    </main></>
);
}

export default Home;