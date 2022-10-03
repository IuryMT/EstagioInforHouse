import './css/Main.scss'
import React, { useState } from 'react';
import relogio from "../img/relogio.png";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { Button } from 'antd';



const { Sider, Content } = Layout;




// forms

// import { Button, Form, Input } from 'antd';

// Layout do grid ja feito antd

// import { Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;

//  para alterar para o antd // sistema grid dele

// import { Col, Row } from 'antd';
// import React from 'react';

export const Main = () => {



    const [codigo, setCodigo] = useState();
    const [codigos, setCodigos] = useState([]);
    const [count, setCount] = useState(0);
    // const [quantidade, setQuantidade] = useState();



    function salva(param) {
        setCodigo(param.target.value);
        /*   setQuantidade(param.target.value);*/
    }


    function salva2(param) {
        param.preventDefault();

        let temp_codigos = codigos
        temp_codigos.push(codigo)

        setCodigos(temp_codigos)
        console.log(codigos);

        document.getElementById("form").reset();
        // Nunca apagar esse contador, senão buga o bip.
        if (count < 100) {
            setCount((c) => c + 1);

        }


    }
    return (
        <>
            {/* <main>

                 <form onSubmit={salva2} className='form' id='form'>
                    <h1 className='title'>T-T</h1>
                    <input maxLength={13} placeholder={"Código"} onChange={salva} id="codigo" type="text" />
                    <div className='cards'>
                        {codigos.map((codigo, index) => (
                            <div className='card' key={index}>
                                <div className='img'>
                                    <img src={relogio} alt="not found" />
                                </div>
                                <div className='content'>
                                    <h2 className='titulo'>{codigo}</h2>
                                    <h4 className='descricao'>Descrição</h4>
                                </div>
                                <div className='valor'>
                                    <h1 className='preco'>R$ 100</h1>
                                    <h4 className='descricao'>á vista</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </form>

                <div className='direita'>
                    <h2 className='esc'>Total de Compras</h2>
                    <hr></hr> */}
            {/* {codigos.map((codigo, index) => (
                        <div className='borda' key={index}>
                            <p className='p'>{codigo}</p>
                        </div>
                    ))} */}
            {/* </div>
                <div className='esquerda'>
                    <a href='#' className='comprar'>Adicionar ao carrinho <ShoppingCartOutlined /></a>
                </div>
                <div className='esquerda2'>
                    <a href='#' className='comprar'>Comprar agora</a>
                </div> */}







            {/* <Layout>
                <Header>Header</Header> */}
            <Layout>
                <Content>
                    <form onSubmit={salva2} className='form' id='form'>
                        <h1 className='title'>T-T</h1>
                        <input maxLength={13} placeholder={"Código"} onChange={salva} id="codigo" type="text" />

                        <div className='cards'>
                            {codigos.map((codigo, index) => (
                                <div className='card' key={index}>
                                    <div className='img'>
                                        <img src={relogio} alt="not found" />
                                    </div>
                                    <div className='content'>
                                        <h2 className='titulo'>{codigo}</h2>

                                        <h4 className='descricao'>Descrição</h4>
                                    </div>
                                    <div className='valor'>
                                        <h1 className='preco'>R$ 100</h1>
                                        <h4 className='descricao'>á vista</h4>
                                    </div>
                                    
                                </div>
                            
                            ))}
                        </div>
                    </form>
                </Content>
                <Sider>
                    <h2 className='esc'>Total de Compras</h2>
                    <hr></hr>
                    <div className="baixo">
                        <div className='esquerda'>
                            <Button type="secundary" block>
                                <a href='#' className='comprar'>
                                    Adicionar ao carrinho <ShoppingCartOutlined />
                                </a>
                            </Button>
                        </div>
                        <div className='esquerda2'>
                            <Button type="secundary" block>
                                <a href='#' className='comprar'>
                                    Comprar agora
                                </a>
                            </Button>
                        </div>
                    </div>
                </Sider>
            </Layout>
            {/* <Footer>Footer</Footer> */}
            {/* </Layout> */}
            {/* </main> */}


        </>
    )
}
