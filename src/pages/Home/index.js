import '../../components/css/Section1.scss'
import React, { useState } from 'react';
import relogio from "../../img/relogio.png";
import som from "../../img/som.png";
import mulher from "../../img/mulher.png";
import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'
import { ShoppingCartOutlined, TagOutlined, UserOutlined, HomeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export const Home = () => {



    const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }


    // function sliderDireita() {
    //     const aaa = document.querySelector(".carousel-master");
    //     document.querySelector(".botao-right").addEventListener("click", () => {
    //         console.log(aaa);
    //         aaa.scroll(+150, 0);
    //         const aaa = null;
    // })
    // }

    // function sliderEsquerda() {
    //     const aaa = document.querySelector(".carousel-master");
    //     document.querySelector("#esquerda").addEventListener("click", event => {
    //         console.log(aaa);
    //         aaa.scroll(150, 0);
    //     })
    // }

    return (
        <>
            <Carousel>
                <img src={relogio} className='image' alt="not found" />
                <img src={som} className='image' alt="not found" />
                <img src={mulher} className='image' alt="not found" />
            </Carousel>

            <div className='englobar'>
                <h1 className='h1'>Categorias em Destaque</h1>
                <div className="carousel-master">
                    <button className="botao-left" id="esquerda" >
                    <LeftOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} />
                    </button>
                    <div className='card'>
                        <img src={relogio} className='imagem' alt="not found" />
                        <h4>Carregadores</h4>
                    </div>
                    <div className='card'>
                        <img src={som} className='imagem' alt="not found" />
                        <h4>Capinhas</h4>
                    </div>
                    <div className='card'>
                        <img src={mulher} className='imagem' alt="not found" />
                        <h4>Fones</h4>
                    </div>
                    <div className='card'>
                        <img src={relogio} className='imagem' alt="not found" />
                        <h4>Caixinhas</h4>
                    </div>
                    <button className="botao-right" >
                    <RightOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} />
                    </button>
                </div>
            </div>
            <div className='englobar'>
                <h1 className='h1'>Mais Vendidos</h1>
                <div className="carousel-master2">
                    <div className='card2'>
                        <img src={relogio} className='imagem' alt="not found" />
                        <h2>Capinhas</h2>
                        <h3>Descrição</h3>
                    </div>
                    <div className='card2'>
                        <img src={som} className='imagem' alt="not found" />
                        <h2>Capinhas</h2>
                        <h3>Descrição</h3>
                    </div>
                    <div className='card2'>
                        <img src={mulher} className='imagem' alt="not found" />
                        <h2>Capinhas</h2>
                        <h3>Descrição</h3>
                    </div>
                    <div className='card2'>
                        <img src={relogio} className='imagem' alt="not found" />
                        <h2>Capinhas</h2>
                        <h3>Descrição</h3>
                    </div>
                </div>
            </div>







<Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
  "type": "fraction"
}} navigation={true} className="mySwiper">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>

  <p className="append-buttons">
  

  
  
  <button onClick={() => prepend2()} className="prepend-2-slides">Prepend 2 Slides</button>
  <button onClick={() => prepend()} className="prepend-slide">Prepend Slide</button>
  <button onClick={() => append()} className="append-slide">Append Slide</button>
  <button onClick={() => append2()} className="append-2-slides">Append 2 Slides</button>
  </p>



            {/* mario */}

            {/* <div className='branco2'></div> */}

            <div className='englobar'>
                <h1 className='h1'>Tendências</h1>
                <div className="carousel-master2">

                    <div className='card2'>
                        <img src={relogio} className='imagem' alt="not found" />
                        <h2>Carregadores</h2>
                        <h3>Descrição</h3>
                    </div>
                    <div className='card2'>
                        <img src={som} className='imagem' alt="not found" />
                        <h2>Capinhas</h2>
                        <h3>Descrição</h3>
                    </div>
                    <div className='card2'>
                        <img src={mulher} className='imagem' alt="not found" />
                        <h2>Fones</h2>
                        <h3>Descrição</h3>
                    </div>
                    <div className='card2'>
                        <img src={relogio} className='imagem' alt="not found" />
                        <h2>Caixinhas</h2>
                        <h3>Descrição</h3>
                    </div>
                </div>
            </div>



            <div className='navBar'>
                <nav className='nav-bottom'>
                    <ul className='navLista'>
                        <li>
                            <button className='botao'><HomeOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} /></button>
                        </li>
                        <li>
                            <button className='botao'><ShoppingCartOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} /></button>
                        </li>
                        <li>
                            <button className='botao'><TagOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} /></button>
                        </li>
                        <li>
                            <button className='botao'><UserOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} /></button>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    );
}