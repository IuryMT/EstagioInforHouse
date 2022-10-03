import '../../components/css/Section1.scss'
import React, { useState } from 'react';
import relogio from "../../img/relogio.png";
import som from "../../img/som.png";
import mulher from "../../img/mulher.png";
import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'
import { ShoppingCartOutlined, TagOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'
import { Layout } from 'antd';



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
import "../../../node_modules/swiper/modules/autoplay/autoplay.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const { Content, Footer } = Layout;

export const Home = () => {


    const [setSwiperRef] = useState(null);


    // function scrollAuto(){
    // document.querySelector('.carousel-master2').addEventListener("wheel", (event) => {
    //     console.log(event)
    // })}

    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     autoplay: {
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     },
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });

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
            <Layout>
                <Layout>
                    <Content>
                        <Carousel>
                            <img src={relogio} className='image' alt="not found" />
                            <img src={som} className='image' alt="not found" />
                            <img src={mulher} className='image' alt="not found" />
                        </Carousel>

                        <div className='englobar'>
                            <h1 className='h1'>Categorias em Destaque</h1>
                            <div className="carousel-master">
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
                            </div>
                        </div>
                        <div className='englobar'>
                            <h1 className='h1'>Mais Vendidos</h1>
                            <div className="carousel-master2">
                                <div className='card2'>
                                    <img src={relogio} className='imagem' alt="not found" />
                                    <h2>*Nome do produto*</h2>
                                    <h3>*Descrição do produto*</h3>
                                    <h3 className='bold'>*300,00 R$*</h3>
                                </div>
                                <div className='card2'>
                                    <img src={som} className='imagem' alt="not found" />
                                    <h2>*Nome do produto*</h2>
                                    <h3>*Descrição do produto*</h3>
                                    <h3 className='bold'>*300,00 R$*</h3>
                                </div>
                                <div className='card2'>
                                    <img src={mulher} className='imagem' alt="not found" />
                                    <h2>*Nome do produto*</h2>
                                    <h3>*Descrição do produto*</h3>
                                    <h3 className='bold'>*300,00 R$*</h3>
                                </div>
                                <div className='card2'>
                                    <img src={relogio} className='imagem' alt="not found" />
                                    <h2>*Nome do produto*</h2>
                                    <h3>*Descrição do produto*</h3>
                                    <h3 className='bold'>*300,00 R$*</h3>
                                </div>
                                <div className='card2'>
                                    <img src={relogio} className='imagem' alt="not found" />
                                    <h2>*Nome do produto*</h2>
                                    <h3>*Descrição do produto*</h3>
                                    <h3 className='bold'>*300,00 R$*</h3>
                                </div>
                            </div>
                        </div>
                        <h1 className='h1'>Nossos Produtos</h1>
                        <div className='carousel-master2'>

                            <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={0} autoplay={5000} speed={400} loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    "type": "fraction"
                                }} navigation={true} className="mySwiper" data-swiper-autoplay="2000">

                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={relogio} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={relogio} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={som} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={som} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='carousel-master2'>
                            <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={0} autoplay={5000} speed={400} loop={true} loopFillGroupWithBlank={true}
                                pagination={{
                                    "type": "fraction"
                                }} navigation={true} className="mySwiper" data-swiper-autoplay="2000">
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={relogio} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={relogio} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={som} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={som} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={relogio} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                        {/* <h4 className='h4'>Carregadores</h4> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={relogio} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={som} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='card2'>
                                        <img src={som} className='imagem' alt="not found" />
                                        <h3>*Nome do produto*</h3>
                                        <h3>*Descrição do produto*</h3>
                                        <h3 className='bold'>*300,00 R$*</h3>
                                    </div>
                                </SwiperSlide>
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

                        <div className='englobar2'>
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




                        {/* <div className='navBar'> */}
                        <nav className='nav-bottom'>
                            <ul className='navLista'>
                                <li>
                                    <button className='botao'><HomeOutlined style={{ fontSize: '40px', color: '#ef0505', margin: 'auto 0' }} /></button>
                                </li>
                                <li>
                                    <button className='botao'><ShoppingCartOutlined style={{ fontSize: '40px', color: '#ef0505', margin: 'auto 0' }} /></button>
                                </li>
                                <li>
                                    <button className='botao'><TagOutlined style={{ fontSize: '40px', color: '#ef0505', margin: 'auto 0' }} /></button>
                                </li>
                                <li>
                                    <button className='botao'><UserOutlined style={{ fontSize: '40px', color: '#ef0505', margin: 'auto 0' }} /></button>
                                </li>
                            </ul>
                        </nav>
                        {/* </div> */}
                    </Content>
                </Layout>
                <Footer>
                    <div className="branco">
                        <h4>Rua São Pedro, 1226 - Juzeiro do norte-CE
                        Infor Distribuidora</h4>
                        <p>© Desenvolvido por INFOR DEV</p>
                    </div>
                </Footer>
            </Layout>
        </>
    );
}

