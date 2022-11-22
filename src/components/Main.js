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
    const [codigo, setCodigo] = useState('');
    const [codigos, setCodigos] = useState([]);
    // const [count, setCount] = useState(0);
    const [quantidade, setQuantidade] = useState();
    const Input = document.getElementById('quant');
    const Form = document.getElementById('form');

    function salva(param) {
        setCodigo(param.target.value);
        // setCount(codigo.length)
        // console.log(codigo.length)
        // if (count === 12) {
        //     saveNumbersProducts();
        // }
    }

    function saveNumbersProducts(e) {
        setQuantidade(e.target.value)
        Input.addEventListener('keypress', function (param) {
            if (param.key === "Enter") {
            param.preventDefault();

            let temp_codigos = codigos
            temp_codigos.push(codigo)

            setCodigos(temp_codigos * quantidade)

            Form.reset();
        }
        });
    }

    function salva2(param) {
        param.preventDefault();

        let temp_codigos = codigos
        temp_codigos.push(codigo)

        setCodigos(temp_codigos * quantidade)

        Form.reset();
        // Nunca apagar esse contador, senão buga o bip.
        // if (count < 100) {
        //     setCount((c) => c + 1);
        // }


    }
    return (
        <>
            <Layout>
                <Content className='height100'>
                    <form onSubmit={salva2} className='form' id='form'>
                        <h1 className='title'>T-T</h1>
                        <input maxLength={13} placeholder={"Código"} onChange={salva} id="codigo" className='codigo' type="text" />
                        <input maxLength={3} placeholder={"Quantidade"} onChange={saveNumbersProducts} id="quant" className='codigo' type="text" />
                        <div className='cards'>
                            {codigos.map((codigo, index) => (
                                <div className='card' key={index}>
                                    <div className='img'>
                                        <img draggable={false} src={relogio} className='card-img' alt="not found" />
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
                    <div className='des1'>
                        {codigos.map((codigo, index) => (
                            <div className='borda' key={index}>
                                <p className='p'>{codigo}</p>
                            </div>
                        ))}
                    </div>


                    <div className="baixo">
                        <div className='esquerda'>
                            <Button type="secundary" block>
                                <a className='comprar'>
                                    Adicionar ao carrinho <ShoppingCartOutlined />
                                </a>
                            </Button>
                        </div>
                        <div className='esquerda2'>
                            <Button type="secundary" block>
                                <a className='comprar'>
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
