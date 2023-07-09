import React, {FC} from 'react';
import s from './Footer.module.css'
import {BsGithub, BsLinkedin, BsTelegram} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';


export const Footer:FC = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <h3>Natalia Kondratieva</h3>
                <div className={s.footerLinks}>
                    <a className={s.link} href="https://github.com/NatkaKon" >
                        <BsGithub className={s.icon}/></a>

                    <a className={s.link} href="https://www.linkedin.com/in/natalia-kondratieva/">
                        <BsLinkedin className={s.icon}/></a>

                    <a className={s.link} href="https://www.codewars.com/users/NatkaKon">
                        <SiCodewars className={s.icon}/></a>

                    <a className={s.link} href="https://t.me/Nkaftd">
                        <BsTelegram className={s.icon}/></a>
                </div>

            </div>
        </div>
    );
};

