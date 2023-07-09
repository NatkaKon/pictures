import React, {FC, useState} from 'react';
import Modal from 'react-modal'
import s from "./Cards.module.css";
import {Comments} from "../Comments/Comments";

type CardType = {
    id: number
    title: string
    cardPhoto: string
    cardDescription: string
    color: string
}

type CardsPropsType = {
    title?: string
    cards: Array<CardType>
    removeCard: (cardId: number) => void
}

export const Cards:FC<CardsPropsType> = ({title, cards, removeCard}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return <div>
        <h2>{title}</h2>
        <ul className={s.cardsBlock}>
            {
                cards.map(card => {

                    const onClickHandler = () => removeCard(card.id)
                    const onClickCardModal = () => {
                        openModal()
                    }


                    return <li key={card.id} className={s.card}>
                        <div className={s.cardButton} >
                            <button onClick={onClickHandler} className={s.removeBtn}>x</button>
                        </div>
                        <h2>{card.title}</h2>
                        <div className={s.cardContainer}>
                            <img src={card.cardPhoto} alt={card.title} onClick={onClickCardModal}/>
                        </div>

                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={s.modalWindow}>
                            <p className={s.cardDescription}>{card.cardDescription}</p>
                        </Modal>

                        <Comments />

                    </li>
                })
            }
        </ul>
    </div>
};

