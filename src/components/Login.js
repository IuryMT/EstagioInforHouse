import './css/Login2.scss';
import { Input, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputMasc } from './InputMasc';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

const { Content } = Layout;

export const Login = () => {
    const [profile, setProfile] = useState([]);
    const clientId = "147895307974-d4osge5cr8c0a1mp1fi2kq4bbqhm6pej.apps.googleusercontent.com";

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: 'email profile',
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const responseGoogleSuccess = (res) => {
        console.log(res)
        setProfile(res.profileObj);
    };

    const responseGoogleFailure = (err) => {
        console.log('Error', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <>
            <Layout>
                <Content>

                    <div className='formLogin'>
                        <form method='post'>
                            <h1 className='titulo2'>Login</h1>

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
                            <br></br><br></br><br></br>
                            <Button type="primary" htmlType="submit">Enviar</Button>
                            {profile ? (
                                <div className="goog">
                                    <GoogleLogin
                                        clientId={clientId}
                                        redirectUri='http://localhost:3000'
                                        onSuccess={responseGoogleSuccess}
                                        onFailure={responseGoogleFailure}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={false}

                                    />
                                </div>
                            ) : (
                                <div className="userInfor">
                                    <img src={profile.imageUrl} />
                                    <h3>User Logged in</h3>
                                    <p>Name: {profile.name}</p>
                                    <p>Email Address: {profile.email}</p>
                                    <br />
                                    <br />
                                    <GoogleLogout
                                        clientId={clientId}
                                        onLogoutSuccess={logOut}
                                    />
                                </div>
                            )}
                        </form>
                    </div>

                </Content>
            </Layout>

        </>
    )
}


