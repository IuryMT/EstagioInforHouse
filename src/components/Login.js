import './css/Login2.scss';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputMasc } from './InputMasc';
import { Routes, Route, Link } from 'react-router-dom';
import { Main } from './Main';
import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export const Login = () => {

    const [form] = Form.useForm();
    // const [values, setValues] = useState({});
 
    const onFinish = (values) => {
        // console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
            <Layout>
                <Content>

                    <div className='formLogin'>
                        <form method='post'>
                            <h1 className='titulo2'>Login</h1>


                            {/* <Form {...layout} form={form} name="control-hooks"> */}
                            <label className="label" htmlFor='user'>Usuário</label>
                            <InputMasc />

                            <br></br><br></br>
                            <label className="label" htmlFor='password'>Senha</label>

                            <br></br>

                            <Space direction="vertical">

                                <Input.Password
                                    placeholder="Senha"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Space>
                            <br></br>
                            <Link className="login-form-forgot" to="/cadastro">Esqueceu sua senha? Relaxa.</Link>
                            {/* <a className="login-form-forgot" href="">
                                
                            </a> */}
                            <br></br><br></br><br></br>

                            {/* <input type="submit" value='Enviar' />  */}
                            <Button type="primary" htmlType="submit">Enviar</Button>

                            {/* <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                            >
                                {({ getFieldValue }) =>
                                    getFieldValue('gender') === 'other' ? (
                                        <Form.Item
                                            name="customizeGender"
                                            label="Customize Gender"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    ) : null
                                }
                            </Form.Item> */}

                            <a className="login-form-forgot" href="...">
                                Esqueceu sua senha? Relaxa.
                            </a>


                            {/* <div className='content'>
                <form onSubmit={handleSubmit} className="Formulario">
                    <h1>Login</h1>
                    <div id="field">
                        <label htmlFor='email'>Email </label>
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
                        <label htmlFor='password'>Senha  </label>
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
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div> */}
                        </form>
                    </div>

                </Content>
            </Layout>

            <Routes>
                <Route path="/cadastro" element={<Main />} />
            </Routes>
        </>
    )
}


