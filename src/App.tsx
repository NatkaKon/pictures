import React, {useState} from 'react';
import './App.css';
import {Cards} from "./components/Cards/Cards";
import {state} from "./bll/state";

function App() {

  const [card, setCard] = useState(state.cardsData);

  function removeCard(id: string) {
    let removeCard = card.filter(t => t.id !== id);
    setCard(removeCard);
  }

  return (
    <div >
<Cards cards={card} removeCard={removeCard}/>
    </div>
  );
}

export default App;
