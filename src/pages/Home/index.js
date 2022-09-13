import '../../components/css/Section1.scss'
import React, { useState } from 'react';
import relogio from "../../img/relogio.png";
import som from "../../img/som.png";
import mulher from "../../img/mulher.png";
import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'
import { ShoppingCartOutlined, TagOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.min.css";
// import "../../../node_modules/swiper/components/pagination/pagination.min.css";
// import "../../../node_modules/swiper/components/navigation/navigation.min.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export const Home = () => {



    const [swiperRef, setSwiperRef] = useState(null);

//   let appendNumber = 4;
//   let prependNumber = 1;

//   const prepend2 = () => {
//     swiperRef.prependSlide([
//       '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
//       '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
//     ]);
//   }

//   const prepend = () => {
//     swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
//   }

//   const append = () => {
//     swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
//   }

//   const append2 = () => {
//     swiperRef.appendSlide([
//       '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
//       '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
//     ]);
//   }


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
                    {/* <button className="botao-left" id="esquerda" >
                    <LeftOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} />
                    </button> */}
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
                    {/* <button className="botao-right" >
                    <RightOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }} />
                    </button> */}
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






<div className='carousel-master2'>
    <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
  "type": "fraction"
}} navigation={true} className="mySwiper">
    
        <SwiperSlide>
            <div className='card'>
                <img src={relogio} className='imagem' alt="not found" />
                <h4>Carregadores</h4>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card2'>
                <img src={relogio} className='imagem' alt="not found" />
                <h2>Capinhas</h2>
                <h3>Descrição</h3>
            </div>
        </SwiperSlide>
    <SwiperSlide><img src={som} className='imagem' alt="not found" /></SwiperSlide>
    <SwiperSlide><img src={som} className='imagem' alt="not found" /></SwiperSlide>
  </Swiper>
</div>
  {/* <p className="append-buttons"> */}
  

  
  
  {/* <button onClick={() => prepend2()} className="prepend-2-slides">Prepend 2 Slides</button>
  <button onClick={() => prepend()} className="prepend-slide">Prepend Slide</button>
  <button onClick={() => append()} className="append-slide">Append Slide</button>
  <button onClick={() => append2()} className="append-2-slides">Append 2 Slides</button> */}
  {/* </p> */}



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