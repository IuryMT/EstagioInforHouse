import './css/Login2.scss';
import { Button, Form, Input, Select, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useState, useCallback } from 'react';
import { Layout } from 'antd';
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
    const [complet, setComplet] = useState('');
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
                setTipo("text")
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
                setTipo("text")
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
                setTipo("text")
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

            default:
        };
    }

    // function verificarCPF(strCpf) {
    //     if (!/[0-9]{11}/.test(strCpf)) return false;
    //     if (strCpf === "00000000000") return false;

    //     var soma = 0;

    //     for (let i = 1; i <= 9; i++) {
    //         soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    //     }

    //     var resto = soma % 11;

    //     if (resto === 10 || resto === 11 || resto < 2) {
    //         resto = 0;
    //     } else {
    //         resto = 11 - resto;
    //     }

    //     if (resto !== parseInt(strCpf.substring(9, 10))) {
    //         return false;
    //     }

    //     soma = 0;

    //     for (var i = 1; i <= 10; i++) {
    //         soma += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    //     }
    //     resto = soma % 11;

    //     if (resto === 10 || resto === 11 || resto < 2) {
    //         resto = 0;
    //     } else {
    //         resto = 11 - resto;
    //     }

    //     if (resto !== parseInt(strCpf.substring(10, 11))) {
    //         return false;
    //     }

    //     return true;
    // }

    // function validarNome() {
    //     var strCpf = document.getElementById('cpf1').value;
    //     if (!verificarCPF(strCpf)) {
    //         console.log("CPF inválido");
    //         return;
    //     }
    //     document.getElementById('frm').submit();
    // }

    const handleKeyUpCpf = useCallback((e) => {
        e.currentTarget.maxLength = 11;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        e.currentTarget.value = value;
    }, [])


    const handleKeyUpCnpj = useCallback((e) => {
        e.currentTarget.maxLength = 14;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        e.currentTarget.value = value;
    }, [])

    const handleKeyUpTel = useCallback((e) => {
        e.currentTarget.maxLength = 11;
        let value = e.currentTarget.value;
        value = value.replace(/^(\d{0})(\d{2})(\d{5})(\d{4})/, "$1($2) $3.$4")
        e.currentTarget.value = value;
    }, [])

    const handleComplet = useCallback((e) => {
        console.log('handlecomplet');

        if (e.currenTarget.length === 11) {
            console.log('if 179')
            function validarCPF(cpf) {
                if (cpf == '') return false;
                // Elimina CPFs invalidos conhecidos	
                if (cpf.length != 11 ||
                    cpf == "00000000000" ||
                    cpf == "11111111111" ||
                    cpf == "22222222222" ||
                    cpf == "33333333333" ||
                    cpf == "44444444444" ||
                    cpf == "55555555555" ||
                    cpf == "66666666666" ||
                    cpf == "77777777777" ||
                    cpf == "88888888888" ||
                    cpf == "99999999999")
                    return false;
                // Valida 1o digito	
                let add = 0;
                let i = 0;
                for (i = 0; i < 9; i++)
                    add += parseInt(cpf.charAt(i)) * (10 - i);
                let rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                    rev = 0;
                if (rev != parseInt(cpf.charAt(9)))
                    return false;
                // Valida 2o digito	
                add = 0;
                for (i = 0; i < 10; i++)
                    add += parseInt(cpf.charAt(i)) * (11 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                    rev = 0;
                if (rev != parseInt(cpf.charAt(10)))
                    return false;
                return true;
            }
            if (validarCPF() === true) {
                console.log('cpf true')
                e.currentTarget.maxLength = 11;
                let value = e.currentTarget.value;
                value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                e.currentTarget.value = value;
            }

            function telefone_validation(telefone) {
                //retira todos os caracteres menos os numeros
                telefone = telefone.replace(/\D/g, '');

                //verifica se tem a qtde de numero correto
                if (!(telefone.length >= 10 && telefone.length <= 11)) return false;

                //Se tiver 11 caracteres, verificar se começa com 9 o celular
                if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;

                //verifica se não é nenhum numero digitado errado (propositalmente)
                for (var n = 0; n < 10; n++) {
                    //um for de 0 a 9.
                    //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
                    //caractere a ser repetido
                    if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
                }
                //DDDs validos
                var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
                    21, 22, 24, 27, 28, 31, 32, 33, 34,
                    35, 37, 38, 41, 42, 43, 44, 45, 46,
                    47, 48, 49, 51, 53, 54, 55, 61, 62,
                    64, 63, 65, 66, 67, 68, 69, 71, 73,
                    74, 75, 77, 79, 81, 82, 83, 84, 85,
                    86, 87, 88, 89, 91, 92, 93, 94, 95,
                    96, 97, 98, 99];
                //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
                if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;

                //  E por ultimo verificar se o numero é realmente válido. Até 2016 um celular pode
                //ter 8 caracteres, após isso somente numeros de telefone e radios (ex. Nextel)
                //vão poder ter numeros de 8 digitos (fora o DDD), então esta função ficará inativa
                //até o fim de 2016, e se a ANATEL realmente cumprir o combinado, os numeros serão
                //validados corretamente após esse período.
                //NÃO ADICIONEI A VALIDAÇÂO DE QUAIS ESTADOS TEM NONO DIGITO, PQ DEPOIS DE 2016 ISSO NÃO FARÁ DIFERENÇA
                //Não se preocupe, o código irá ativar e desativar esta opção automaticamente.
                //Caso queira, em 2017, é só tirar o if.
                // if (new Date().getFullYear() < 2017) return true;
                if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;

                //se passar por todas as validações acima, então está tudo certo
                return true;
            }

            if (telefone_validation() === true) {
                console.log('telefone true');
                e.currentTarget.maxLength = 11;
                let value = e.currentTarget.value;
                value = value.replace(/^(\d{0})(\d{2})(\d{5})(\d{4})/, "$1($2) $3.$4")
                e.currentTarget.value = value;
            }

            else {
                alert("Digite um Número válido");
            }
        }

        else {
            e.currentTarget.maxLength = 14;
            let value = e.currentTarget.value;
            value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
            e.currentTarget.value = value;
        }
    }, [])

    //  form.setFieldsValue({
    //     note: 'Hi there!',
    // }); 
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
                        <h1 className='h1'>Login</h1>
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


                            <Input type={tipo} value={cpf} onKeyUp={handleKeyUpCpf} placeholder="999-999-999-99"
                                onChange={(event) => setCpf(event.target.value)} className={`input ${cpfOn === true && 'active'}`} />
                            <Input type={tipo} value={cnpj} onKeyUp={handleKeyUpCnpj} placeholder="99-999-999/9999-99"
                                onChange={(event) => setCnpj(event.target.value)} className={`input ${cnpjOn === true && 'active'}`} />
                            <Input type={tipo} value={tel} onKeyUp={handleKeyUpTel} placeholder="(99) 99999-9999"
                                onChange={(event) => setTel(event.target.value)} className={`input ${telefoneOn === true && 'active'}`} />

                            <Input type={tipo} value={email} placeholder="example@gmail.com"
                                onChange={(event) => setEmail(event.target.value)} className={`input ${emailOn === true && 'active'}`} />
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
                            <Input onKeyUp={handleComplet} value={complet} onChange={(event) => setComplet(event.target.value)} />

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
                    </form>
                </Content>
            </Layout>
        </>
    )
}


