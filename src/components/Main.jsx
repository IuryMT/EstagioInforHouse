import './css/Main.scss'
import React, { useState } from 'react';
import relogio from "../img/relogio.png";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';

const { Sider, Content } = Layout;


export const Main = () => {
    const [codigo, setCodigo] = useState('');
    const [codigos, setCodigos] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const Input = document.getElementById('quant');
    const Form = document.getElementById('form');
    const [hasListening, setHasListenig] = useState(false)
    localStorage.getItem("myValueInLocalStorage")


    function salva(param) {
        sessionStorage.setItem('myValueInLocalStorage', param.target.value);
        setCodigo(param.target.value)
        console.log(codigo)
        if (codigo.length === 12) {
            document.getElementById('quant').focus()
        }
    }

    function saveNumbersProducts(param) {
        if (hasListening) return;
        setHasListenig(true);
        Input.addEventListener('keypress', function (e) {
            setQuantidade(param.target.value);
            if (e.which === 13) {
                salva2();
            }
        });
    }

    function salva2() {
        let temp_codigos = codigos
        temp_codigos.push(sessionStorage.getItem("myValueInLocalStorage"));
        setCodigos(temp_codigos)

        Form.reset();
        document.getElementById('codigo').focus();

    }
    return (
        <>
            <Layout>
                <Content className='height100'>
                    <form className='form' id='form' >
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
                                <a className='comprar' href=''>
                                    Comprar agora
                                </a>
                            </Button>
                        </div>
                    </div>
                </Sider>
            </Layout>
        </>
    )
}
