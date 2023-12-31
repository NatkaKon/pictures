import React, {useState} from 'react';
import './App.css';
import {Cards} from "./components/Cards/Cards";
import {state} from "./bll/state";
import {FilterButtons} from "./components/FilterButtons/FilterButton";
import {Footer} from "./components/Footer/Footer";

function App() {

    const [card, setCard] = useState(state.cardsData);

    function removeCard(id: number) {
        let removeCard = card.filter(card => card.id !== id);
        setCard(removeCard);
    }

    const [filter, setFilter] = useState<string>('all');

    let cardsForList = card;

    if (filter === "eggs") {
        cardsForList = card.filter(card => card.color === 'eggs');
    }
    if (filter === "parrot") {
        cardsForList = card.filter(card => card.color === 'parrot');
    }
    if (filter === "bird") {
        cardsForList = card.filter(card => card.color === 'bird');
    }
    if (filter === "frog") {
        cardsForList = card.filter(card => card.color === 'frog');
    }
    if (filter === "butterflies") {
        cardsForList = card.filter(card => card.color === 'butterflies');
    }
    if (filter === "flamingos") {
        cardsForList = card.filter(card => card.color === 'flamingos');
    }
    if (filter === "monkey") {
        cardsForList = card.filter(card => card.color === 'monkey');
    }

    const changeFilter = (value: string) => {
        setFilter(value);
    }


    return (
        <div>
            <h1>Animals</h1>
            <FilterButtons changeFilter={changeFilter}/>
            <Cards cards={cardsForList}
                   removeCard={removeCard}
            />
            <Footer/>
        </div>
    );
}

export default App;
