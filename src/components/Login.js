import './css/Login2.scss';
import { Button, Form, Input, Select, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputMasc } from './InputMasc';
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
    // const [cpfOn, setCpfOn] = useState(false)
    // const [cnpjOn, setCnpjOn] = useState(false)
    // const [telefoneOn, setTelefoneOn] = useState(false)
    // const [emailOn, setEmailOn] = useState(false)
    const [form] = Form.useForm();
    // const [tipo, setTipo] = useState("text")
    // const [cpf, setCpf] = useState('');
    // const [cnpj, setCnpj] = useState('');
    const [complet, setComplet] = useState('');
    // const [tel, setTel] = useState('');
    // const [email, setEmail] = useState('');
    // const [values, setValues] = useState({});

    // const onGenderChange = (value) => {
    //     switch (value) {
    //         case 'Email':
    //             setTipo("email")
    //             setEmailOn(!emailOn)
    //             if (cpfOn === true) {
    //                 setCpfOn(false)
    //             } else if (cnpjOn === true) {
    //                 setCnpjOn(false)
    //             }
    //             else {
    //                 setTelefoneOn(false)
    //             }
    //             return;

    //         case 'CNPJ':
    //             setTipo("text")
    //             setCnpjOn(!cnpjOn)
    //             if (cpfOn === true) {
    //                 setCpfOn(false)
    //             }
    //             else if (emailOn === true) {
    //                 setEmailOn(false)
    //             }
    //             else {
    //                 setTelefoneOn(false)
    //             }
    //             return;

    //         case 'Telefone':
    //             setTipo("text")
    //             setTelefoneOn(!telefoneOn)
    //             if (cnpjOn === true) {
    //                 setCnpjOn(false)
    //             }
    //             else if (emailOn === true) {
    //                 setEmailOn(false)
    //             }
    //             else {
    //                 setCpfOn(false)
    //             }
    //             return;

    //         case 'CPF':
    //             setTipo("text")
    //             setCpfOn(!cpfOn)
    //             if (cnpjOn === true) {
    //                 setCnpjOn(false)
    //             }
    //             else if (emailOn === true) {
    //                 setEmailOn(false)
    //             }
    //             else {
    //                 setTelefoneOn(false)
    //             }

    //             return;

    //         default:
    //     };
    // }

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

    // const handleKeyUpCpf = useCallback((e) => {
    //     e.currentTarget.maxLength = 11;
    //     let value = e.currentTarget.value;
    //     value = value.replace(/\D/g, "");
    //     value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    //     e.currentTarget.value = value;
    // }, [])


    // const handleKeyUpCnpj = useCallback((e) => {
    //     e.currentTarget.maxLength = 14;
    //     let value = e.currentTarget.value;
    //     value = value.replace(/\D/g, "");
    //     value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    //     e.currentTarget.value = value;
    // }, [])

    // const handleKeyUpTel = useCallback((e) => {
    //     let value = e.currentTarget.value;
    //     value = value.replace(/^(\d{0})(\d{2})(\d{5})(\d{4})/, "$1($2) $3.$4")
    //     e.currentTarget.value = value;
    // }, [])

    // const handleComplet = (e) => {
    //     // CPF value
    //     let caractere = e.currentTarget.value;
    //     console.log(caractere)
    //     // cpf_len
    //     let cpf = caractere.length;

    //     function isNumber(caractere) {
    //         return !isNaN(parseFloat(caractere)) && isFinite(caractere);
    //     }
    //     console.log("passou 01")
    //     if (cpf === 11 && (/[a-zA-Z]/).test(caractere) === false) {
    //         function validarCPF(cpf) {
    //             console.log('passou 02')
    //             if (cpf === 0) return false;
    //             console.log('passou 03')

    //             // Elimina CPFs invalidos conhecidos	
    //             if (cpf != 11 ||
    //                 caractere == "00000000000" ||
    //                 caractere == "11111111111" ||
    //                 caractere == "22222222222" ||
    //                 caractere == "33333333333" ||
    //                 caractere == "44444444444" ||
    //                 caractere == "55555555555" ||
    //                 caractere == "66666666666" ||
    //                 caractere == "77777777777" ||
    //                 caractere == "88888888888" ||
    //                 caractere == "99999999999"){
    //             console.log('passou 04')

    //                 return false;}
    //             // Valida 1o digito, soma os números até a penultima casa, e verifica a condição com último caracter
    //             let i = 0;
    //             let add = 0;
    //             for (i = 0; i < 9; i++)
    //                 add += parseInt(caractere.charAt(i)) * (10 - i);

    //             let rev = 11 - (add % 11);
    //             if (rev === 10 || rev === 11)
    //                 rev = 0;
    //             if (rev != parseInt(caractere.charAt(9))){
    //             console.log('passou 06')

    //                 return false;}
    //             // Valida 2o digito, soma todos os números, verifica com penultimo caracter
    //             add = 0;
    //             for (i = 0; i < 10; i++)
    //                 add += parseInt(caractere.charAt(i)) * (11 - i);
    //             rev = 11 - (add % 11);
    //             if (rev === 10 || rev === 11)
    //                 rev = 0;
    //             if (rev != parseInt(caractere.charAt(10))){
    //                 console.log(rev, caractere.charAt(10))
    //                 console.log('passou 07')

    //                 return false;}
    //             else {
    //                 return true;
    //             }
                
    //         }


    //         function telefone_validation(cpf) {
    //             //retira todos os caracteres menos os numeros
    //             caractere = caractere.replace(/\D/g, '');
    //             // let telfone = telefone.length;
    //             //verifica se tem a qtde de numero correto
    //             if (!(cpf >= 10 && cpf <= 11)) return false;

    //             //Se tiver 11 caracteres, verificar se começa com 9 o celular
    //             if (cpf == 11 && parseInt(caractere.substring(2, 3)) != 9) return false;

    //             //verifica se não é nenhum numero digitado errado (propositalmente)
    //             for (var n = 0; n < 10; n++) {
    //                 //um for de 0 a 9.
    //                 //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
    //                 //caractere a ser repetido
    //                 if (caractere == new Array(11).join(n) || caractere == new Array(12).join(n)) return false;
    //             }
    //             //DDDs validos
    //             var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
    //                 21, 22, 24, 27, 28, 31, 32, 33, 34,
    //                 35, 37, 38, 41, 42, 43, 44, 45, 46,
    //                 47, 48, 49, 51, 53, 54, 55, 61, 62,
    //                 64, 63, 65, 66, 67, 68, 69, 71, 73,
    //                 74, 75, 77, 79, 81, 82, 83, 84, 85,
    //                 86, 87, 88, 89, 91, 92, 93, 94, 95,
    //                 96, 97, 98, 99];
    //             //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
    //             if (codigosDDD.indexOf(parseInt(caractere.substring(0, 2))) == -1) return false;

    //             //  E por ultimo verificar se o numero é realmente válido. Até 2016 um celular pode
    //             //ter 8 caracteres, após isso somente numeros de telefone e radios (ex. Nextel)
    //             //vão poder ter numeros de 8 digitos (fora o DDD), então esta função ficará inativa
    //             //até o fim de 2016, e se a ANATEL realmente cumprir o combinado, os numeros serão
    //             //validados corretamente após esse período.
    //             //NÃO ADICIONEI A VALIDAÇÂO DE QUAIS ESTADOS TEM NONO DIGITO, PQ DEPOIS DE 2016 ISSO NÃO FARÁ DIFERENÇA
    //             //Não se preocupe, o código irá ativar e desativar esta opção automaticamente.
    //             //Caso queira, em 2017, é só tirar o if.
    //             if (new Date().getFullYear() < 2017) return true;
    //             if (cpf == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(caractere.substring(2, 3))) == -1) return false;

    //             //se passar por todas as validações acima, então está tudo certo
    //             return true;
    //         }

    //         if (telefone_validation(cpf) === true) {
    //             let value = e.currentTarget.value;
    //             value = value.replace(/^(\d{0})(\d{2})(\d{1})(\d{4})(\d{4})/, "$1($2) $3 $4-$5")
    //             e.currentTarget.value = value;
    //         }

    //         else if (validarCPF(cpf) === true) {
    //             let value = e.currentTarget.value;
    //             value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    //             e.currentTarget.value = value;
    //         }

    //     }
    //     else {
            
    //         if ((/[a-zA-Z]/).test(caractere) === true) {
    //             let car_replaced = caractere.replace(/(\.)|(\/)|(\-)/g, '')
    //             console.log('email')
    //             console.log(isNumber(caractere));
    //             e.currentTarget.value = car_replaced;
    //         }
    //         else {
    //             let car_replaced = caractere.replace(/\D/g, '')
    //             if (car_replaced.length === 14) {
    //                 console.log("CNPJ")
    //                 car_replaced = car_replaced.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    //                 e.currentTarget.value = car_replaced;
    //             }
    //         }
    //         // e.currentTarget.maxLength = 18;
    //         // caractere = e.currentTarget.value;
    //         // let value = caractere.replace(/\D/g, '');
    //         // value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    //         // e.currentTarget.value = value;
    //     }
    //     // else {
    //         // console.log('email')
    //         // console.log(isNumber(caractere));
    //         // setTipo("email");
    //     // }

    // }

    //  form.setFieldsValue({
    //     note: 'Hi there!',
    // }); 
    const onFinish = (values) => {
        // console.log(values);
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
                        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                            <InputMasc onChange={(event) => setComplet(event.target.value)} onKeyUp={InputMasc} value={complet}/>

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


