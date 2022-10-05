import './css/Login2.scss';
import { Button, Form, Input, Select, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useState } from 'react';
import { Layout } from 'antd';
// import InputMask from 'react-input-mask';
const { Option } = Select;
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
    const [cpfOn, setCpfOn] = useState(false)
    const [cnpjOn, setCnpjOn] = useState(false)
    const [telefoneOn, setTelefoneOn] = useState(false)
    const [emailOn, setEmailOn] = useState(false)
    const [form] = Form.useForm();
    const [tipo, setTipo] = useState("")
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    // const [values, setValues] = useState({});

    const onGenderChange = (value) => {
        switch (value) {
            case 'Email':
                setTipo("email")
                setEmailOn(!emailOn)
                if (cpfOn === true) {
                    setCpfOn(false)
                } else if (cnpjOn === true) {
                    setCnpjOn(false)
                }
                else {
                    setTelefoneOn(false)
                }
                return;

            case 'CNPJ':
                setTipo("number")
                setCnpjOn(!cnpjOn)
                if (cpfOn === true) {
                    setCpfOn(false)
                }
                else if (emailOn === true) {
                    setEmailOn(false)
                }
                else {
                    setTelefoneOn(false)
                }
                return;

            case 'Telefone':
                setTipo("number")
                setTelefoneOn(!telefoneOn)
                if (cnpjOn === true) {
                    setCnpjOn(false)
                }
                else if (emailOn === true) {
                    setEmailOn(false)
                }
                else {
                    setCpfOn(false)
                }
                return;

            case 'CPF':
                setTipo("number")
                setCpfOn(!cpfOn)
                if (cnpjOn === true) {
                    setCnpjOn(false)
                }
                else if (emailOn === true) {
                    setEmailOn(false)
                }
                else {
                    setTelefoneOn(false)
                }

                return;
        };
    }

    /*} form.setFieldsValue({
        note: 'Hi there!',
    }); */
    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    // const onFill = () => {
    //     form.setFieldsValue({
    //         note: 'Hello world!',
    //         gender: 'male',
    //     });
    // };


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log({ email, password });
    // }


    return (
        <>
            <Layout>
                <Content>
                    <form className='formLogin'>
                        <h1>Login</h1>
                        <Form.Item
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
                        </Form.Item>
                        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                        
                        
                                <Input type={tipo} value={cpf} maxLength={11}
                                    onChange={(event) => setCpf(event.target.value)} className={`input ${cpfOn === true && 'active'}`} />
                                <Input type={tipo} value={cnpj} maxLength={14}
                                    onChange={(event) => setCnpj(event.target.value)} className={`input ${cnpjOn === true && 'active'}`} />
                                <Input type={tipo} value={tel}
                                    onChange={(event) => setTel(event.target.value)} className={`input ${telefoneOn === true && 'active'}`} maxLength={11} />
                                <Input type={tipo} value={email} maxLength={5}
                                    onChange={(event) => setEmail(event.target.value)} className={`input ${emailOn === true && 'active'}`} />
                                <br></br>
                                <Space direction="vertical">
                                    <Input.Password
                                        placeholder="Password"
                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                </Space>
                                {/* <MaskedInput
                                    type={tipo}
                                    name="cpf"
                                    mask="999.999.999-99"
                                    value={values.cpf}
                                    onChange={handleChange}
                                    className={`input ${cpfOn === true && 'active'}`}
                                />
                                <MaskedInput
                                    type={tipo}
                                    name="cnpj"
                                    mask="99.999.999/9999-99"
                                    value={values.cnpj}
                                    onChange={handleChange}
                                    className={CNPJ}
                                />
                                <MaskedInput
                                    type={tipo}
                                    name="telefone"
                                    mask="(99) 9-9999-9999"
                                    value={values.telefone}
                                    onChange={handleChange}
                                    className={`input ${telefoneOn === true && 'active'}`}
                                /> */}
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
                    </form>
                </Content>
            </Layout>
        </>
    )
}


