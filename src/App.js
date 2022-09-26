import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNumber]);
    })
  }

useEffect(() => {
  getQuote();
}, []);

  return (
    <div className="App">
      <div className='quote' id="quote-box">
        <p id="text">"{quotes.text}"</p>
        <p id="author">{quotes.author}</p>
        <div className='buttonContainer'>
          <button id="new-quote" onClick={getQuote} className='btn'>Get Quote</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quotes.text}" - ${quotes.author}`} className='btn' target='_blank' rel='noopener noreferrer'>
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;