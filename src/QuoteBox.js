import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';

const quotes = [
  {
    phrase: "What is a man? A Miserable little pile of secrets!",
    game: "Castlevania: Symphony of the Night"
  },
  {
    phrase: "You were almost a Jill sandwich!",
    game: "Resident Evil"
  },
  {
    phrase: "The right man in the wrong place can make all the difference in the world.",
    game: "Half-Life 2"
  },
  {
    phrase: "It’s dangerous to go alone, take this!",
    game: "The Legend of Zelda"
  },
  {
    phrase: "Dreams have a nasty habit of going bad when you’re not looking.",
    game: "Max Payne"
  },
  {
    phrase: "Don’t make a girl a promise if you know you can’t keep it.",
    game: "Halo 3"
  },
  {
    phrase: "You can’t hide from the Grim Reaper. Especially when he’s got a gun.",
    game: "Grim Fandango"
  },
  {
    phrase: "What is bravery, without a dash of recklessness?",
    game: "Dark Souls"
  },
  {
    phrase: "Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. Their silence is your answer.",
    game: "Mass Effect 3"
  },
  {
    phrase: "I don’t need a weapon; my friends are my power!",
    game: "Kingdom Hearts"
  }
];
  
const getRandomNumber = (min, max) => Math.round((Math.random() * (max - min)) + min);
  
let randomNumber = getRandomNumber(1, 10);

function QuoteBox(props) {

  const [quote, setQuote] = useState(quotes[randomNumber - 1]);

  function changeQuote() {
    props.setColor();
    randomNumber = getRandomNumber(1, 10);
    setQuote(quotes[randomNumber - 1]);
  }

  return (
    <div id="quote-box">
      <p id="text">{quote.phrase}</p>
      <p id="author"><span>- </span>{quote.game}</p>
      <button id="new-quote" onClick={changeQuote}>New quote</button>
      <a href="www.google.com" target="_blank" id="tweet-quote">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      </a>
    </div>
  );
} 

export default QuoteBox;