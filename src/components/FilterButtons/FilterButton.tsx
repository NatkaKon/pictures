import React from 'react';
import {FilterValuesType} from "../../App";
import s from "./FilterButtons.module.css";

type PropsType={
    changeFilter: (value: FilterValuesType) => void
}
export const FilterButtons = (props:PropsType) => {

    const onAllClickHandler = () => props.changeFilter("all");
    const onYellowClickHandler = () => props.changeFilter("yellow");
    const onRedClickHandler = () => props.changeFilter("red");
    const onBlueClickHandler = () => props.changeFilter("blue");
    const onGreenClickHandler = () => props.changeFilter("green");
    const onPinkClickHandler = () => props.changeFilter("pink");
    const onOrangeClickHandler = () => props.changeFilter("orange");
    const onBrownClickHandler = () => props.changeFilter("brown");

    return (
        <div className={s.filterBlock}>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onYellowClickHandler}>Yellow</button>
            <button onClick={onRedClickHandler}>Red</button>
            <button onClick={onBlueClickHandler}>Blue</button>
            <button onClick={onGreenClickHandler}>Green</button>
            <button onClick={onPinkClickHandler}>Pink</button>
            <button onClick={onOrangeClickHandler}>Orange</button>
            <button onClick={onBrownClickHandler}>Brown</button>
        </div>
    );
};

