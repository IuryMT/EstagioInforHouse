import styles from './css/Section1.module.css'
import React from 'react';
import relogio from "../img/relogio.png";
import som from "../img/som.png";
import mulher from "../img/mulher.png";
import { Carousel } from 'antd';

export function Section() {
    return(
        <>
        <Carousel type="primary" autoplay>
                    <div>
                        <img src={relogio} className={styles.image} alt="not found" />
                    </div>
                    <div>
                        <img src={som} className={styles.image} alt="not found" />
                    </div>
                    <div>
                        <img src={mulher} className={styles.image} alt="not found" />
                    </div>
                </Carousel>
        </>
    )
}