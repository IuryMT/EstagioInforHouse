import React, { useState } from 'react';
import './css/Header.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Input } from 'antd';
import { Home } from '../pages/Home/index.js';
import { Login } from './Login.js';
import { Main } from './Main.js';



export function Heade() {

    const { Search } = Input;

    const onSearch = (value) => console.log(value);

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className='nav'>
                <h1 className='logo'>Infor House</h1>
                <Search placeholder="O que você está procurando?" size="small" onSearch={onSearch} enterButton status="error" />
                <div className={`mobile-menu ${menuOpen === true && 'active'}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                <ul className={`nav-list ${menuOpen === true && 'active'}`}>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li onClick={() => setMenuOpen(!menuOpen)}>
                        <Link to="/vendas">Venda</Link>
                    </li>
                </ul>
            </nav>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/vendas" element={<Main />} />
            </Routes>
        </>
    )
}