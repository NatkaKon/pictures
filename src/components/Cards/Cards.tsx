import React, {FC, useState} from 'react';
import Modal from 'react-modal'
import s from "./Cards.module.css";

type CardType = {
    id: string
    title: string
    cardPhoto: string
    cardDescription: string
    color: string
}

type CardsPropsType = {
    title?: string
    cards: Array<CardType>
    removeCard: (taskId: string) => void
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
                cards.map(t => {

                    const onClickHandler = () => removeCard(t.id)
                    const onClickCardModal = () => {
                        openModal()
                    }


                    return <li key={t.id} className={s.card}>
                        <div className={s.cardButton} >
                            <button onClick={onClickHandler}>x</button>
                        </div>
                        <p>{t.title}</p>
                        <div className={s.cardContainer}>
                            <img src={t.cardPhoto} alt={t.title} onClick={onClickCardModal}/>
                        </div>

                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={s.modalWindow}>
                            <p className={s.cardDescription}>{t.cardDescription}</p>
                        </Modal>

                    </li>
                })
            }
        </ul>
    </div>
};

