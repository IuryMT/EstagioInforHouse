import '../../components/css/Section1.scss'
import React from 'react';
import relogio from "../../img/relogio.png";
import som from "../../img/som.png";
import mulher from "../../img/mulher.png";
import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'

export const Home = () => {
    return(
        <>
        <h1>home</h1>
        <Carousel type="primary" autoplay>
                    <div>
                        <img src={relogio} className='image' alt="not found" />
                    </div>
                    <div>
                        <img src={som} className='image' alt="not found" />
                    </div>
                    <div>
                        <img src={mulher} className='image' alt="not found" />
                    </div>
                </Carousel>
        </>
    );
}