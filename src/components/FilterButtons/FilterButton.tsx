import React from 'react';
import {FilterValuesType} from "../../App";
import s from "./FilterButtons.module.css";

type PropsType={
    changeFilter: (value: FilterValuesType) => void
}
export const FilterButtons = (props:PropsType) => {

    const onAllClickHandler = () => props.changeFilter("all");
    const onEggsClickHandler = () => props.changeFilter("eggs");
    const onParrotClickHandler = () => props.changeFilter("parrot");
    const onBirdClickHandler = () => props.changeFilter("bird");
    const onFrogClickHandler = () => props.changeFilter("frog");
    const onButterfliesClickHandler = () => props.changeFilter("butterflies");
    const onFlamingosClickHandler = () => props.changeFilter("flamingos");
    const onMonkeyClickHandler = () => props.changeFilter("monkey");

    return (
        <div className={s.filterBlock}>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onEggsClickHandler}>Eggs</button>
            <button onClick={onParrotClickHandler}>Parrot</button>
            <button onClick={onBirdClickHandler}>Bird</button>
            <button onClick={onFrogClickHandler}>Frog</button>
            <button onClick={onButterfliesClickHandler}>Butterflies</button>
            <button onClick={onFlamingosClickHandler}>Flamingos</button>
            <button onClick={onMonkeyClickHandler}>Monkey</button>
        </div>
    );
};

