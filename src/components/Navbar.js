import React from "react";
import './homepage.css';

function Navbar() {
return(
<nav>
<div className="container">
<ul className="nav-list">
<li className="title"><a href="/">Quiz and Flashcards</a></li>
<li className="nav-item">
<a href="/" className="nav-link">Home</a>
</li>
<li className="nav-item">
<a href="/quiz" className="nav-link">Take a Quiz</a>
</li>
<li className="nav-item">
<a href="/flashcards" className="nav-link">Use Flashcards</a>
</li>
<li className="nav-link-item">
<a href="/registration">Register</a>
</li>
</ul>
</div>
</nav>
);
}
export default Navbar;