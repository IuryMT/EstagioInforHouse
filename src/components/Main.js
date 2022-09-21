import './css/Main.scss'
import React, { useState } from 'react';

// forms

// import { Button, Form, Input } from 'antd';

// Layout do grid ja feito antd

// import { Layout } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;

//  para alterar para o antd // sistema grid dele

// import { Col, Row } from 'antd';
// import React from 'react';

export const Main =() => {

const [codigo, setCodigo] = useState();
const [codigos, setCodigos] = useState([]);
const [count, setCount] = useState(0);



function salva(param){
    setCodigo(param.target.value);
}


function salva2(param){
    param.preventDefault();

    let temp_codigos = codigos
    temp_codigos.push(codigo)

    setCodigos(temp_codigos)
    console.log(codigos);

    document.getElementById("form").reset();
// Nunca apagar esse contador, senão buga o bip.
    if (count <100){
        setCount ((c) => c + 1);
    
    }
    
        
}
    return(
        <>
        <main>
            
            <form onSubmit={salva2} className='form' id='form'>
              <h1 className='title'>T-T</h1>  
                <input maxLength={13} placeholder={"Código"} onChange={salva} id="codigo" type="text"/>
                
            </form>
            
            <div className='direita'>
                <h2 className='esc'>Código Escaneado</h2>
                <hr></hr>
                {codigos.map((codigo, index) => (
                    <div className='borda'  key = {index}>
                        <p className='p'>{codigo}</p>
                    </div>
                ))}
                    {/* key = {codigo.toString()} */}
            </div>
        </main>
        </>
    )
}


// Layout do antd  dividido certinho
    {/* <Layout>
    <Content>Content</Content>
    <Sider>Sider</Sider>
    </Layout>
    </Layout> */}


// para alterar para o antd // Sistema grid dele

    // <Row>
    //   <Col span={24}>col</Col>
    // </Row>
    // <Row>
    //   <Col span={12}>col-12</Col>
    //   <Col span={12}>col-12</Col>
    // </Row>
    // <Row>
    //   <Col span={8}>col-8</Col>
    //   <Col span={8}>col-8</Col>
    //   <Col span={8}>col-8</Col>
    // </Row>
    // <Row>
    //   <Col span={6}>col-6</Col>
    //   <Col span={6}>col-6</Col>
    //   <Col span={6}>col-6</Col>
    //   <Col span={6}>col-6</Col>
    // </Row>