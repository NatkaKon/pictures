import React, {useState} from 'react';
import './App.css';
import {Cards} from "./components/Cards/Cards";
import {state} from "./bll/state";
import {FilterButtons} from "./components/FilterButtons/FilterButton";


export type FilterValuesType = "all"
    | "yellow"
    | "red"
    | "blue"
    | "green"
    | 'pink'
    | 'orange'
    | 'brown';

function App() {

    const [card, setCard] = useState(state.cardsData);

    function removeCard(id: string) {
        let removeCard = card.filter(t => t.id !== id);
        setCard(removeCard);
    }

    const [filter, setFilter] = useState<FilterValuesType>('all');

    let cardsForList = card;

    if (filter === "yellow") {
        cardsForList = card.filter(t => t.color === 'yellow');
    }
    if (filter === "red") {
        cardsForList = card.filter(t => t.color === 'red');
    }
    if (filter === "blue") {
        cardsForList = card.filter(t => t.color === 'blue');
    }
    if (filter === "green") {
        cardsForList = card.filter(t => t.color === 'green');
    }
    if (filter === "pink") {
        cardsForList = card.filter(t => t.color === 'pink');
    }
    if (filter === "orange") {
        cardsForList = card.filter(t => t.color === 'orange');
    }
    if (filter === "brown") {
        cardsForList = card.filter(t => t.color === 'brown');
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
