import '../../components/css/Login.scss';
import { useState } from 'react';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log({ email, password });
        }

    return(
        <>
        <div className='content'>
            <form onSubmit={handleSubmit} className="Formulario">
                <h1>Login</h1>
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
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
        </>
    );
}