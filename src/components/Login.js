import './css/Login2.scss';
import { Button, Form, Input, Select, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputMasc } from './InputMasc';
import { InputFilter } from './InputFilter';
import React, { useState, useCallback } from 'react';
import { Layout } from 'antd';
// const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const { Content } = Layout;

export const Login = () => {
    const [form] = Form.useForm();
    const [complet, setComplet] = useState('');
    // const [values, setValues] = useState({});

    
    const onReset = () => {
        form.resetFields();
    };





    return (
        <>
            <Layout>
                <Content>
                    <div className='formLogin'>
                        <h1 className='h1'>Login</h1>
                        {/* <Form.Item
                            name="gender"
                            label="Tipo de Dado"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Selecione a opção de Login"
                                onChange={onGenderChange}
                                allowClear
                            >
                                <Option value="Email">Email</Option>
                                <Option value="CNPJ">CNPJ</Option>
                                <Option value="Telefone">Telefone</Option>
                                <Option value="CPF">CPF</Option>
                            </Select>
                        </Form.Item> */}
                        <Form {...layout} form={form} name="control-hooks">
                            <InputMasc  />

                            

                            {/* <Input type={tipo} value={cpf} onKeyUp={handleKeyUpCpf} placeholder="999-999-999-99"
                                onChange={(event) => setCpf(event.target.value)} className={`input ${cpfOn === true && 'active'}`} />
                            <Input type={tipo} value={cnpj} onKeyUp={handleKeyUpCnpj} placeholder="99-999-999/9999-99"
                                onChange={(event) => setCnpj(event.target.value)} className={`input ${cnpjOn === true && 'active'}`} />
                            <Input type={tipo} value={tel} onKeyUp={handleKeyUpTel} placeholder="(99) 99999-9999"
                                onChange={(event) => setTel(event.target.value)} className={`input ${telefoneOn === true && 'active'}`} />

                            <Input type={tipo} value={email} placeholder="example@gmail.com"
                                onChange={(event) => setEmail(event.target.value)} className={`input ${emailOn === true && 'active'}`} /> */}
                            <br></br>
                            <Space direction="vertical">
                                <Input.Password
                                    placeholder="Senha"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Space>


                            <Form.Item
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
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Esqueceu sua senha? Relaxa.
                            </a>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Enviar
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    Redefinir
                                </Button>
                                {/* <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button> */}
                            </Form.Item>
                        </Form>
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
                    </div>
                </Content>
            </Layout>
        </>
    )
}


