import React, {useState} from 'react';
import './App.css';
import {Cards} from "./components/Cards/Cards";
import {state} from "./bll/state";
import {FilterButtons} from "./components/FilterButtons/FilterButton";


export type FilterValuesType = "all"
    | "eggs"
    | "parrot"
    | "bird"
    | "frog"
    | 'butterflies'
    | 'flamingos'
    | 'monkey';

function App() {

    const [card, setCard] = useState(state.cardsData);

    function removeCard(id: string) {
        let removeCard = card.filter(t => t.id !== id);
        setCard(removeCard);
    }

    const [filter, setFilter] = useState<FilterValuesType>('all');

    let cardsForList = card;

    if (filter === "eggs") {
        cardsForList = card.filter(t => t.color === 'eggs');
    }
    if (filter === "parrot") {
        cardsForList = card.filter(t => t.color === 'parrot');
    }
    if (filter === "bird") {
        cardsForList = card.filter(t => t.color === 'bird');
    }
    if (filter === "frog") {
        cardsForList = card.filter(t => t.color === 'frog');
    }
    if (filter === "butterflies") {
        cardsForList = card.filter(t => t.color === 'butterflies');
    }
    if (filter === "flamingos") {
        cardsForList = card.filter(t => t.color === 'flamingos');
    }
    if (filter === "monkey") {
        cardsForList = card.filter(t => t.color === 'monkey');
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }


    return (
        <div>
            <h1>Animals</h1>
            <FilterButtons changeFilter={changeFilter}/>
            <Cards cards={cardsForList}
                   removeCard={removeCard}
            />
        </div>
    );
}

export default App;
