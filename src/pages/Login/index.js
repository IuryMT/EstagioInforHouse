import '../../components/css/Login.scss';
import { useState } from 'react';
import React from 'react'
// import mer from '../../img/mer.jpg'

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import { Layout } from 'antd';
const { Content } = Layout;

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    }


    return (
        <>

            {/* <Layout>
                        <Header>Header</Header> */}
            <Layout>
                <Content>
                    <div className='conteudoLogin'>
                        {/* <img src={mer} alt="bfuyv" className='bgf' /> */}
                        <form onSubmit={handleSubmit} className="Formulario">

                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <h1>Login</h1>
                                <Form.Item
                                    name="Email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Use seu Email, telefone ou CNPJ',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Use seu Email, telefone ou CNPJ" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Tente novamente',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="A senha"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Lembrar disso</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Esqueceu sua senha? Relaxa.
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Conectar
                                    </Button>
                                    ou <a href="">Cadastrar!</a>
                                </Form.Item>
                            </Form>


                            {/* <h1>Login</h1>
                            <div id="field">
                                <label htmlFor='email'>Email: </label>
                                <input
                                    className='input'
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div id="field">
                                <label htmlFor='password'>Senha</label>
                                <input
                                    className='input'
                                    type='password'
                                    name='password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div id='actions'>
                                <button type='submit' className='enviar'>Enviar</button>
                            </div> */}
                        </form>
                    </div>
                </Content>

            </Layout>
            {/* </Layout> */}


        </>
    );
}
