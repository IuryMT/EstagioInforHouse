import './css/Login2.scss';
import { Button, Form, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputMasc } from './InputMasc';
import React from 'react';
import { Layout } from 'antd';
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
                        
                        {/* <Form {...layout} form={form} name="control-hooks"> */}
                            <InputMasc  />

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

                            <a className="login-form-forgot" href="">
                                Esqueceu sua senha? Relaxa.
                            </a>

                            {/* <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Enviar
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    Redefinir
                                </Button> */}
                                {/* <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button> */}
                            {/* </Form.Item>
                        </Form> */}
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


