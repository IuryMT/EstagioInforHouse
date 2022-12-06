import '../../components/css/Section1.scss'
import React, { useState } from 'react';
import relogio from "../../img/relogio.png"
import som from "../../img/som.png";
import mulher from "../../img/mulher.png";
import { Carousel } from 'antd';
import 'antd/dist/antd.min.css'
import { ShoppingCartOutlined, TagOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'
import { Layout } from 'antd';
import { ImageUpload } from '../../components/ImageUpload';
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
import "../../../node_modules/swiper/modules/autoplay/autoplay.min.css"


import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const { Content, Footer } = Layout;

export const Home = () => {


    const [setSwiperRef] = useState(null);

    return (
        <>
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

                    <ImageUpload />

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

                    <Footer>
                        <div style={{ marginTop: 40 }}>
                            <h4>Rua São Pedro, 1226 - Juazeiro do Norte-CE
                                Infor Distribuidora</h4>
                            <p>© Desenvolvido por INFOR DEV</p>
                        </div>
                        <div style={{ width: '100%', height: '8vh' }}></div>
                    </Footer>
                </Content>
            </Layout>
        </>
    );
}

