import '../../components/css/Section1.scss'
import React from 'react';
import relogio from "../../img/relogio.png";
import som from "../../img/som.png";
import mulher from "../../img/mulher.png";
import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'
// import { LeftOutlined } from '@ant-design/icons'
import { ShoppingCartOutlined, TagOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons'

export const Home = () => {
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