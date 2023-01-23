import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  "In the jungle",
  "We're no strangers to love",
  "We could all use a little change"
]

function App() {
  const [counter, setCounter] = useState(2)

  return (
    <div 
      onClick={(event) => setCounter(counter + 1)}
      className="App"
    >
    {quotes[counter % quotes.length]}
    </div>
  );
}

export default App;
