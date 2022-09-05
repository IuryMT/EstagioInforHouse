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
    return(
        <>
                <Carousel autoplay>
                        <img src={relogio} className='image' alt="not found" />
                        <img src={som} className='image' alt="not found" />
                        <img src={mulher} className='image' alt="not found" />
                </Carousel>
            <h1>Categorias em Destaque</h1>
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
                    {/* <Carousel className='primary'>
                        <div>
                            <img src={relogio} className='imagem' alt="not found" />
                        </div>
                        <div>
                            <img src={som} className='imagem' alt="not found" />
                        </div>
                        <div>
                            <img src={mulher} className='imagem' alt="not found" />
                        </div>

                        
                    </Carousel> */}
                {/* <button className='button'> */}
                {/* <LeftOutlined /> */}
                {/* </button> */}
            </div>
            <h1>Mais Vendidos</h1>
            <div className="carousel-master">
                <div className='card'>
                    <img src={relogio} className='imagem' alt="not found" />
                </div>
                <div className='card'>
                    <img src={som} className='imagem' alt="not found" />
                </div>
                <div className='card'>
                <img src={mulher} className='imagem' alt="not found" />
                </div>
                <div className='card'>
                    <img src={relogio} className='imagem' alt="not found" />
                </div>
            </div>
            <div className='navBar'>
                {/* <div className='contain'> */}
                <nav className='nav-bottom'>
                    <ul className='navLista'>
                        <li>
                            <button className='botao'><HomeOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }}/></button>
                        </li>
                        <li>
                        <button className='botao'><ShoppingCartOutlined style={{ fontSize: '40px', color: '#ef0505' , margin: '5px' }}/></button>
                        </li>
                        <li>
                        <button className='botao'><TagOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px' }}/></button>
                        </li>
                        <li>
                        <button className='botao'><UserOutlined style={{ fontSize: '40px', color: '#ef0505', margin: '5px'  }}/></button>
                        </li>
                    </ul>
                </nav>
                </div>
            {/* </div> */}
            <div className='branco'>hhh</div>
        </>
    );
}